import React, { Component } from "react";

// Assets
import "./card.css"


class MoveItem extends Component {    
    render() {
        let combinedText;
        if(this.props.move.name === this.props.moveDetails.name && this.props.moveDetails.effect_chance) {
            let attackChance = this.props.moveDetails.effect_chance ? this.props.moveDetails.effect_chance : null;

            if (attackChance) {
                let text = this.props.moveDetails.effect_entries[0].short_effect;
                combinedText = text.replace(/\$effect_chance/, attackChance);
            }

        } else if(this.props.move.name === this.props.moveDetails.name)
            combinedText = this.props.moveDetails.effect_entries[0].short_effect;

        return(
            <div className="desc__section moves-list__item" >
                <div 
                    className="item__title"
                    onClick={(e) => { this.props.expandMove(e, this.props.move, this.props.index) }}
                >
                    {this.props.move.name}
                </div>
                {
                    this.props.move.name === this.props.moveDetails.name
                    ? <div className="item__details">
                        <p className="details">type: {this.props.moveDetails.type.name}</p>
                        <p className="details">damage_class: {this.props.moveDetails.damage_class.name}</p>
                        <p className="details">power: {this.props.moveDetails.power}</p>
                        <p className="details">PP: {this.props.moveDetails.pp}</p>
                        <p className="details">accuracy: {this.props.moveDetails.accuracy}</p>
                        <hr/>
                        <p className="details">{combinedText}</p>
                    </div>
                    : null
                }
                
            </div>
        );
    }
}

export default MoveItem