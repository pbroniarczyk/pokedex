import React, { Component } from "react";
import axios from "axios";

// Components
import Loader from "../loader/Loader.jsx";
import CardAvatar from "./CardAvatart.jsx";
import CardDescription from "./CardDescription.jsx";
import CardMoves from "./CardMoves.jsx";
import CardLocations from "./CardLocations.jsx";

// Assets
import "./card.css"

let pokemon = {};


class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            isLoaded: false,
            sectionsPulled: false
        }

        this.toggleSectionsList = this.toggleSectionsList.bind(this);
    }

    toggleSectionsList() {
        this.setState((prevState, props) => ({
            sectionsPulled: !prevState.sectionsPulled
        }));
    }
    
    componentWillMount() {
        axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${this.props.pokemon}`)
        .then(response => {
            pokemon = response.data;
            this.setState((prevState, props) => ({
                isLoaded: !prevState.isLoaded
            }));
        })
        .catch(error => { throw(error) })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="card__item">
                    <CardAvatar pokemon={pokemon} />
                    <CardDescription
                        pokemon={pokemon}
                        toggleSectionsList={this.toggleSectionsList}
                    />
                    <CardMoves
                        moves={pokemon.moves}
                        sectionsPulled={this.state.sectionsPulled}
                        toggleSectionsList={this.toggleSectionsList}
                    />
                    <CardLocations
                        pokemon={pokemon}
                        moves={pokemon.moves}
                        sectionsPulled={this.state.sectionsPulled}
                        toggleSectionsList={this.toggleSectionsList}
                    />
                </div>
            );
        } else {
            return <Loader />
        }
    }
}

export default CardContainer