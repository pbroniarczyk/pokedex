import React, { Component } from "react";
import axios from "axios";

// Assets
import "./card.css"

let pokemon = {};

class Card extends Component {
    
    componentWillReceiveProps() {
        if(this.props.isOpen) {
            axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/${this.props.pokemon}`)
            .then(response => {
                console.log("POKEMON", response.data) 
                pokemon = response.data
            })
            .catch(error => { throw(error) })
        }
    }

    render() {
        return (
            <div className="card__item">
                <a
                    href="#"
                    className="card__close"
                    onClick={this.props.handleCloseCard}
                >CLOSE</a>
                <h2 className="card__title">{this.props.pokemon}</h2>
            </div>
        );
    }
}

export default Card