import React, { Component } from 'react';

// Components
import Search from "./components/search/Search.jsx";
import PokeList from "./components/pokeList/PokeList.jsx";
import Modal from "./components/modal/Modal.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardIsOpen: false,
      pokemon: ""
    }

    this.handleOpenCard = this.handleOpenCard.bind(this);
    this.handleCloseCard = this.handleCloseCard.bind(this);
  }

  handleOpenCard(pokemon) {
    this.setState({ 
      pokemon,
      cardIsOpen: true
    });
  }

  handleCloseCard() {
    this.setState({ cardIsOpen: false });
  }

  render() {
    return (
      <div className="pokedex">
        <h1 className="pokedex__title">Gotta Catch'em All</h1>
        {/* <Search /> */}
        <PokeList handleOpenCard={this.handleOpenCard} />
        <Modal
          isOpen={this.state.cardIsOpen}
          pokemon={this.state.pokemon}
          handleCloseCard={this.handleCloseCard}  
        />
      </div>
    );
  }
}

export default App;
