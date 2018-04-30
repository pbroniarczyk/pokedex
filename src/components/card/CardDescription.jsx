import React, { Component } from "react";

// Assets
import "./card.css"


class CardContainer extends Component {
    constructor() {
        super();
        
    }

    render() {
        return(
            <section className="card__section card__desc">
                <h3 className="card__subtitle">Stats</h3>
                <div className="card__stats">
                    {
                        this.props.pokemon.stats.map((element, index) => 
                            <span key={index} className="stat__name">{element.stat.name}: <span className="stat__value">{element.base_stat}</span></span>)
                    }
                </div>
            </section>
        );
    }
}

export default CardContainer