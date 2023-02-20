import React from "react";


const videoDetail =(props)=>{
    const videosrc =`https://www.youtube.com/embed/${props.video.id.videoId}`
    return <div>
        <div className="ui embed">
            <iframe title="props.video.snippet.title" src={videosrc}/>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
    </div>
};

export default videoDetail;