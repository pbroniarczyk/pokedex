import React, { Component } from "react";

// Assets
import "./card.css"


class LocationItem extends Component {    
    render() {
        return(
            <div className="desc__section moves-list__item locations-list__item ">
                <div 
                    className="item__title"
                    // onClick={(e) => { this.props.expandMove(e, this.props.move, this.props.index) }}
                >
                    {this.props.location}
                </div>
                <div className="item__details">
                    <div className="item__version">
                        <span className="version__title">ver. </span>
                        { 
                            this.props.version.map((element, index) => {
                                if(element.version.name === "red") { return <span key={index} className="version__orb version__orb--red"></span>;}
                                if(element.version.name === "blue") { return <span key={index} className="version__orb version__orb--blue"></span>;}
                            }) 
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationItem