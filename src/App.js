import React, { Component } from 'react';

// Components
import Search from "./components/search/Search.jsx";

class App extends Component {
  render() {
    return (
      <div className="pokedex">
        <h1 className="pokedex__title">Gotta Catch'em All</h1>
        <Search />
      </div>
    );
  }
}

export default App;
