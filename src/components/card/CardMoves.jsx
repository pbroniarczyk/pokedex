import React, { Component } from "react";
import axios from "axios";

// Components
import MoveItem from "./MoveItem.jsx";

// Assets
import "./card.css"

const ICON = <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>


class CardMoves extends Component {
    constructor() {
        super();
        this.state = {
            moveList: [],
            expanded: false,
            moveArray: [],
            moveDetails: {}
        }
    }

    fetchMoveData(url) {
        axios.get(url)
        .then((response) => {
            this.setState(() => ({ moveDetails: response.data }));
        }).catch(error => { throw(error) });
    }

    expandMove(e, currentMoveObject, index) {
        let parent = e.target.parentNode;

        if (parent.classList.contains("item--expanded")) {
            parent.classList.remove("item--expanded");
            this.setState((prevState) => ({ expanded: !prevState.expanded }))
        } else {
            parent.classList.add("item--expanded");
            this.setState((prevState) => ({ expanded: !prevState.expanded }))
        }

        this.fetchMoveData(currentMoveObject.url)
    }

    componentDidMount() {
        let moveArray = [];
        this.props.moves.forEach(element => {
            let move = {};
            move.name = element.move.name;
            move.expanded = false
            moveArray.push(move);
        });
        
        this.setState((prevState, props) => ({ moveArray }));
    }

    render() {
        return(
            <section className={`card__section card__moves card__desc ${this.props.sectionPulled ? "card__moves--pulled" : null}`}>
                <div className="desc__wrapper desc__wrapper--reverse">
                    <h3 className="card__subtitle">Moves</h3>
                    <button
                        className="section__link section__link--back"
                        onClick={this.props.toggleSectionsList}
                    >{ICON}
                    </button>
                </div>
                <div className="card__moves-list">
                    {
                        this.props.moves.map((element, index) => 
                            <MoveItem
                                expandMove={this.expandMove.bind(this)}
                                key={element.move.name}
                                move={element.move}
                                index={index}
                                moveDetails={this.state.moveDetails}
                            />)
                    }
                </div>
            </section>
        );
    }
}

export default CardMoves