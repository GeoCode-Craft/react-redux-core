import React from 'react';
import './VideoItem.css';

//Destructuring to get video
const VideoItem=({video})=>{

    return (
    <div className ="item">
       <img className="rounded mx-auto d-block" src={video.snippet.thumbnails.medium.url} alt=""/>
       <div className="card-title">
       <div className ="card-text">{video.snippet.title}</div>
       </div>
    </div>
    );
};

export default VideoItem;