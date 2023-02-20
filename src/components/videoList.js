import React from "react";
import videoItems from "./videoitem";



const videoList =props=>{

    const renderList =props.videos.map(video=>{
        return <videoItems video={video} />
    })
    return <div>{renderList}</div>;
};
export default videoList;