import React, { Component } from "react";
import axios from "axios";

class PokeList extends Component {
    render() {
        console.log("POKE ITEM == ", this.props)
        return (
            <div className="poke-list__item">
                <img src={`../assets/img/sprites/${this.props.index}.png`} alt={`${this.props.name}`}/>
                {this.props.name}
            </div>
        );
    }
}

export default PokeList