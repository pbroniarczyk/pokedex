import React, { Component } from "react";
// import axios from "axios";

// Assets
import "./card.css"


const ICON = <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>

class CardContainer extends Component {
    render() {

        const CardTitle = () => {
            if(window.innerWidth <= 678) {
                return (
                    <div className="card__title-wrapper">
                        <button className="card__return" onClick={this.props.handleCloseCard}>{ICON}</button>
                        <h2 className="card__title">{this.props.pokemon.name}</h2>
                    </div>
                );
            } else return  <h2 className="card__title">{this.props.pokemon.name}</h2>;
        }
        
        return(
            <section className="card__section card__avatar">
                <CardTitle />

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