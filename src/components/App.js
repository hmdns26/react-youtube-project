import React from "react";
import SearchBar from './searchbar';
import youtube from "../apis/youtube";
import videoList from "./videoList";

class App extends React.Component {

    state={videos:[]};

    onTermSubmit=async term=>{
        const response =await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos:response.data.items});
    };
    render(){
        return <div className="ui container" style={{marginTop:'10px'}} >
        <SearchBar onFormSubmit={this.onTermSubmit}  />
        <videoList videos={this.state.videos} />
        </div>;
    };
};
export default App;