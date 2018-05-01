import React, { Component } from "react";

// Assets
import "./card.css"


class MoveItem extends Component {
    constructor() {
        super();
    }

    render() {
        console.log("RENDER DETAILS", this.props.moveDetails)
        return(
            <div className="desc__section moves-list__item" >
                <div 
                    className="item__title"
                    onClick={(e) => { this.props.expandMove(e, this.props.move, this.props.index) }}
                >
                    {this.props.move.name}
                </div>
                {
                    this.props.moveDetails && this.props.moveDetails.hasOwnProperty("type")
                    ? <div className="item__details">
                        <p className="details">{this.props.moveDetails.type.name}</p>
                    </div>
                    : null
                }
                
            </div>
        );
    }
}

export default MoveItem