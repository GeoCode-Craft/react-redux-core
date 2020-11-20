import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({ videos, onVideoSelected }) =>{
    //props.videos destructured above
   const renderedList = videos.map( video => {
        return <VideoItem  onVideoSelected={onVideoSelected} video={video}/>;
    });
    return <div className="list-group">{renderedList}</div>
};

export default VideoList;