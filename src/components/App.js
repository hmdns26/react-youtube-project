import React from "react";
import SearchBar from './searchbar';
import youtube from "../apis/youtube";
import videoList from "./videoList";
import videoDetail from "./videoDetail";

class App extends React.Component {

    state={videos:[] ,selectedvideo:null};
    componentDidMount(){
        this.onTermSubmit('dortmund')
    }
    onTermSubmit=async term=>{
        const response =await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({
            videos:response.data.items,
            selectedvideo:response.data.items[0]
        });
    };

    onVideoSelected=video=>{
        this.setState({selectedvideo:video})
    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}} >
        <SearchBar onFormSubmit={this.onTermSubmit}  />
        <div className="ui grid">
            <div className="ui row" >
                <div className="eleven wide column">
                    <videoDetail video={this.state.selectedvideo}/>
                </div>
                <div className="five wide column ">
                    <videoList onvideoselect={this.onVideoSelected} videos={this.state.videos} />
                </div>
            </div>
        </div>
        </div>;
    };
};
export default App;