import React from "react";

const videoItems =props=>{
    return <div>
            <img src={props.video.snippet.thumnails.medium.url} />
            {props.video.snippet.title}
        </div>;
};
export default videoItems;