import React, { Component } from "react";
// import axios from "axios";

// Assets
import "./card.css"


class CardContainer extends Component {
    // constructor() {
    //     super();
        
    // }

    // componentWillMount() {
    //     console.log("EVOLUTION CHAIN", this.props.pokemon.id)
    //     axios.get(`https://pokeapi.co/api/v2/evolution-chain/${this.props.pokemon.id}/`)
    //     .then(response => { console.log(response.data) })
    //     .catch(error => { throw(error) })
    // }

    render() {
        return(
            <section className="card__section card__avatar">
                <h2 className="card__title">{this.props.pokemon.name}</h2>
                <div className="card__basic">
                    <div className="basic__types">
                        {
                            this.props.pokemon.types.map((element, index) =>
                                <span
                                    className={`type type--${element.type.name}`}
                                    key={index}
                                >
                                    {element.type.name}
                                </span>)
                        }
                    </div>
                    <span>No. <span className="basic__number">{this.props.pokemon.id}</span></span>
                </div>
                <div className="card__avatar">
                    <img
                        src={this.props.pokemon.sprites.front_default}
                        alt={this.props.pokemon.name}
                    />
                </div>
            </section>
        );
    }
}

export default CardContainer