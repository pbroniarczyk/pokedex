import React, { Component } from "react";

// Assets
import "./card.css"

const ICON = <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
    </svg>


class CardContainer extends Component {
    render() {
        console.log("RENDER DESC", this.props);
        return(
            <section className="card__section card__desc">
                <div className="desc__wrapper">
                    <span className="stat__name desc__section">height: <span className="stat__value">{this.props.pokemon.height}</span></span>
                    <span className="stat__name desc__section">weight: <span className="stat__value">{this.props.pokemon.weight}</span></span>
                </div>
                <div className="desc__section">
                    <h3 className="card__subtitle">Stats</h3>
                    <div className="card__stats">
                        {
                            this.props.pokemon.stats.map((element, index) => 
                                <span key={index} className="stat__name">{element.stat.name}: <span className="stat__value">{element.base_stat}</span></span>)
                        }
                    </div>
                </div>
                <div className="desc__section">
                    <h3 className="card__subtitle">Abilities</h3>
                    <div className="card__abilities">
                        {
                            this.props.pokemon.abilities.map((element, index) => 
                                <span key={index} className="ability__name">{element.ability.name}</span>)
                        }
                    </div>
                </div>
                <div className="desc__section desc__wrapper">
                    <h3 className="card__subtitle">Moves</h3>
                    <button
                        className="section__link"
                        onClick={() => { this.props.toggleSectionList("sectionMovesPulled") }}
                    >{ICON}
                    </button>
                </div>
                <div className="desc__section desc__wrapper">
                    <h3 className="card__subtitle">Locations</h3>
                    <button
                        className="section__link"
                        onClick={() => { this.props.toggleSectionList("sectionLocationsPulled") }}
                    >{ICON}
                    </button>
                </div>
            </section>
        );
    }
}

export default CardContainer