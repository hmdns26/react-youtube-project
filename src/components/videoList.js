import React from "react";
import videoItems from "./videoitem";



const videoList =props=>{

    const renderList =props.videos.map(video=>{
        return <videoItems key={props.video.id.videoId} onvideoselected={props.onVideoSelected} video={video} />
    })
    return <div className="ui relaxed divided list" >{renderList}</div>;
};
export default videoList;