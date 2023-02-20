import React from "react";
import SearchBar from './searchbar';
import youtube from "../apis/youtube";
import videoList from "./videoList";

class App extends React.Component {

    state={videos:[] ,selectedvideo:null};

    onTermSubmit=async term=>{
        const response =await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items});
    };

    onVideoSelected=video=>{

    }

    render(){
        return <div className="ui container" style={{marginTop:'10px'}} >
        <SearchBar onFormSubmit={this.onTermSubmit}  />
        <videoList onvideoselect={this.onVideoSelected} videos={this.state.videos} />
        </div>;
    };
};
export default App;