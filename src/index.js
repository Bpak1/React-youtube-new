import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = "AIzaSyCDgx3hN13xIRNcJkw0FuXSOwX227jovq4";

class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'Surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render(){
      return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </div>
      );
    }
}

// Take this component's generated html en put it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
