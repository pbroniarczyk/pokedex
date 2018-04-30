import React, { Component } from "react";
import axios from "axios";

// Components
import Loader from "../loader/Loader.jsx";
import CardAvatar from "./CardAvatart.jsx";
import CardDescription from "./CardDescription.jsx";

// Assets
import "./card.css"

let pokemon = {};


class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            isLoaded: false
        }
    }
    
    componentWillMount() {
        axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${this.props.pokemon}`)
        .then(response => {
            pokemon = response.data;
            this.setState({ isLoaded: true })
        })
        .catch(error => { throw(error) })
    }

    render() {
        console.log("POOOOKE", pokemon)
        if (this.state.isLoaded) {
            return (
                <div className="card__item">
                    <CardAvatar pokemon={pokemon} />
                    <CardDescription pokemon={pokemon} />
                </div>
            );
        } else {
            return <Loader />
        }
    }
}

export default CardContainer