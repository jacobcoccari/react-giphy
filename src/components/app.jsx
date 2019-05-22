import React, {Component} from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "SKGo6OYe24EBG"

    }
  }

  search = (query) => {
    giphy('9vZm3WCvcfVoeBoce8wcBhloBPgXYPn1').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
    });
  });
  }

  render() {
    const gifs = [
      { id: 'SKGo6OYe24EBG'}
    ];
    return (
      <div>
        <div className= "left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className= "right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
