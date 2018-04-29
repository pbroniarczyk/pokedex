import React, { Component } from "react";

// Assets
import "./pokeItem.css"


const importAllSprites = r => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAllSprites(require.context('../../assets/img/sprites', false, /.*\.png/));
let zerosAmount;

class PokeList extends Component {
    
    componentWillMount() {
        if(this.props.index < 10) zerosAmount = "00";
        if(this.props.index >= 10 && this.props.index < 100) zerosAmount = "0";
        if(this.props.index >= 100) zerosAmount = "";
    }

    render() {
        return (
            <div
                className="poke-list__item"
                onClick={() => { this.props.handleOpenCard(this.props.name) }}
            >
                <img
                    className="poke-list__sprite"
                    src={images[`${zerosAmount + this.props.index}.png`]}
                    alt={`${this.props.name}-sprite`}
                />
                {this.props.name}
            </div>
        );
    }
}

export default PokeList