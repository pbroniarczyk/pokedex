import React, { Component } from "react";
import axios from "axios";

import MoveItem from "./MoveItem.jsx";

import { BackIcon } from "./icons";
import "../card.css";

class CardMoves extends Component {
  constructor() {
    super();
    this.state = {
      moveList: [],
      expanded: false,
      moveArray: [],
      moveDetails: {},
    };
  }

  fetchMoveData(url) {
    axios
      .get(url)
      .then((response) => {
        this.setState(() => ({ moveDetails: response.data }));
      })
      .catch((error) => {
        throw error;
      });
  }

  expandMove(e, currentMoveObject, index) {
    let parent = e.target.parentNode;

    if (parent.classList.contains("item--expanded")) {
      parent.classList.remove("item--expanded");
      this.setState((prevState) => ({ expanded: !prevState.expanded }));
    } else {
      parent.classList.add("item--expanded");
      this.setState((prevState) => ({ expanded: !prevState.expanded }));
    }

    this.fetchMoveData(currentMoveObject.url);
  }

  componentDidMount() {
    let moveArray = [];
    this.props.moves.forEach((element) => {
      let move = {};
      move.name = element.move.name;
      move.expanded = false;
      moveArray.push(move);
    });

    this.setState((prevState, props) => ({ moveArray }));
  }

  render() {
    return (
      <section
        className={`card__section card__panel card__desc ${
          this.props.sectionPulled ? "card__panel--pulled" : null
        }`}
      >
        <div className="desc__wrapper desc__wrapper--reverse">
          <h3 className="card__subtitle">Moves</h3>
          <button
            className="section__link section__link--back"
            onClick={() => {
              this.props.toggleSectionList("sectionMovesPulled");
            }}
          >
            {BackIcon}
          </button>
        </div>
        <div className="card__panel-list">
          {this.props.moves.map((element, index) => (
            <MoveItem
              expandMove={this.expandMove.bind(this)}
              key={element.move.name}
              move={element.move}
              index={index}
              moveDetails={this.state.moveDetails}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default CardMoves;
