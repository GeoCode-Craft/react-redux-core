import React from 'react';
import './VideoItem.css';

//Destructuring to get video
const VideoItem=({video, onVideoSelected})=>{

    return (
    <div onClick={() => onVideoSelected(video)}className ="video-item item">
       <img className="ui image" src={video.snippet.thumbnails.medium.url} alt=""/>
       <div className="content">
       <div className ="header">{video.snippet.title}</div>
       </div>
    </div>
    );
};

export default VideoItem;