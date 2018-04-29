import React, { Component } from "react";
import axios from "axios";

// Components
import Loader from "../loader/Loader.jsx";

// Assets
import "./card.css"

let pokemon = {};


class Card extends Component {
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
                    <section className="card__section card__avatar">
                        <h2 className="card__title">{pokemon.name}</h2>
                        <div className="card__avatar"><img src={pokemon.sprites.front_default} alt={pokemon.name}/></div>
                    </section>
                    <section className="card__section card__desc">
                    
                    </section>
                </div>
            );
        } else {
            return <Loader />
        }
    }
}

export default Card