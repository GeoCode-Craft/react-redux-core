import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({ videos }) =>{
    //props.videos destructured above
   const renderedList = videos.map( video => {
        return <VideoItem video={video}/>;
    });
    return <div className="list-group">{renderedList}</div>
};

export default VideoList;