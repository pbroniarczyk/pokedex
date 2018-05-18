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
            sectionMovesPulled: false,
            sectionLocationsPulled: false
        }

        this.toggleSectionList = this.toggleSectionList.bind(this);
    }

    toggleSectionList(panel) {
        this.setState((prevState, props) => ({
            [panel]: !prevState[panel]
        }));
    }
    
    componentWillMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`)
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
                    <CardAvatar
                        pokemon={pokemon}
                        handleCloseCard={this.props.handleCloseCard}
                    />
                    <CardDescription
                        pokemon={pokemon}
                        toggleSectionList={this.toggleSectionList}
                    />
                    <CardMoves
                        moves={pokemon.moves}
                        sectionPulled={this.state.sectionMovesPulled}
                        toggleSectionList={this.toggleSectionList}
                    />
                    <CardLocations
                        pokemon={pokemon}
                        moves={pokemon.moves}
                        sectionPulled={this.state.sectionLocationsPulled}
                        toggleSectionList={this.toggleSectionList}
                    />
                </div>
            );
        } else {
            return <Loader />
        }
    }
}

export default CardContainer