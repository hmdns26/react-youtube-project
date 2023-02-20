import React from "react";
import './videoitem.css';

const videoItems =props=>{
    return <div onClick={()=>{props.onVideoSelected(props.video)}} className="video-item item" >
            <img alt="props.video.snippet.title" className="ui image" src={props.video.snippet.thumnails.medium.url} />
            <div className="content" >
                <div className="header" >
                    {props.video.snippet.title}
                </div>
            </div>
            
        </div>;
};
export default videoItems;