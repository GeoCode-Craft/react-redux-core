import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList'

class App extends React.Component {
    state = {videos:[], selectedVideo: null};

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
        params:{
            q: term
        }
     });

     this.setState({videos:response.data.items});
  };

  onVideoSelected =(video)=>{
      console.log("Video from App", video);
  }

    render() {
        return (
        <div>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <VideoList onVideoSelected={this.onVideoSelected} videos={this.state.videos}/>
        </div>
        )
    }
}

export default App;