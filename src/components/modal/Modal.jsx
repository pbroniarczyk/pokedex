import React, { Component } from "react";
import Card from "../card/Card.jsx";

// Assets
import "./modal.css";

const ICON = <svg fill="#FFFFFF" className="close__icon" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
    </svg>


class Modal extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <div className="modal">
                    <div className="modal__content">
                        <Card pokemon={this.props.pokemon} />
                        <button
                            className="modal__close"
                            onClick={this.props.handleCloseCard}
                        >{ICON}</button>
                    </div>
                </div>
            );
        } else {
            return "DUPA";
        }
        
    }
}

export default Modal