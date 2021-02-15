import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('het verhaal van brandweer');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    //console.log(response);
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app ui container">
        <Header />
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
