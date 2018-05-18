import React, { Component } from "react";
import CardContainer from "../card/CardContainer.jsx";

// Assets
import "./modal.css";

const ICON = <svg fill="#FFFFFF" className="close__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>



class Modal extends Component {
    constructor() {
        super();
        this.closeModalOutside = this.closeModalOutside.bind(this);
    }
    
    closeModalOutside(e, modalID) {
        const ID = e.target.getAttribute("id");  
        if(ID === modalID) this.props.handleCloseCard();
    }
    
    render() {
        const ROOT = document.getElementsByTagName("body");
        if (this.props.isOpen) {
            ROOT[0].style.overflow = "hidden";
            return (
                <div
                    id="modal"
                    className="modal"
                    onClick={(e) => { this.closeModalOutside(e, "modal") }}
                >
                    <div className="modal__content">
                        <CardContainer
                            pokemon={this.props.pokemon}
                            handleCloseCard={this.props.handleCloseCard}
                        />
                        <button
                            className="modal__close"
                            onClick={this.props.handleCloseCard}
                        >{ICON}</button>
                    </div>
                </div>
            );
        } else {
            ROOT[0].style.overflow = "scroll"
            return "";
        }
        
    }
}

export default Modal