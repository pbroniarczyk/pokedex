import React, { Component } from "react";
import axios from "axios";

// Components
import Loader from "../loader/Loader.jsx";
import CardAvatar from "./CardAvatart.jsx";
import CardDescription from "./CardDescription.jsx";
import CardMoves from "./CardMoves.jsx";

// Assets
import "./card.css"

let pokemon = {};


class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            isLoaded: false,
            movesPulled: false
        }

        this.toggleMovesList = this.toggleMovesList.bind(this);
    }

    toggleMovesList() {
        this.setState((prevState, props) => ({
            movesPulled: !prevState.movesPulled
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
                        toggleMovesList={this.toggleMovesList}
                    />
                    <CardMoves
                        moves={pokemon.moves}
                        movesPulled={this.state.movesPulled}
                        toggleMovesList={this.toggleMovesList}
                    />
                </div>
            );
        } else {
            return <Loader />
        }
    }
}

export default CardContainer