import React, { useEffect, useState } from "react";
import axios from "axios";

import MoveItem from "./MoveItem.jsx";

import { BackIcon } from "./icons";
import "../card.css";

const CardMoves = ({ moves, sectionPulled, toggleSectionList }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [moveArray, setMoveArray] = useState([]);
  const [moveDetails, setMoveDetails] = useState({});

  useEffect(() => {
    let moveArray = [];
    moves.forEach((element) => {
      let move = {};
      move.name = element.move.name;
      move.expanded = false;
      moveArray.push(move);
    });

    setMoveArray(moveArray);
  }, []);

  const fetchMoveData = (url) => {
    axios
      .get(url)
      .then((response) => setMoveDetails(response.data))
      .catch((error) => {
        throw error;
      });
  };

  const expandMove = (e, currentMoveObject, index) => {
    let parent = e.target.parentNode;

    if (parent.classList.contains("item--expanded")) {
      parent.classList.remove("item--expanded");
      setExpanded((prevState) => !prevState.expanded);
    } else {
      parent.classList.add("item--expanded");
      setExpanded((prevState) => !prevState.expanded);
    }

    fetchMoveData(currentMoveObject.url);
  };

  const expandMovePanel = () => {
    toggleSectionList("isMovesSectionOpen");
  };

  return (
    <section
      className={`card__section card__panel card__desc ${
        sectionPulled ? "card__panel--pulled" : null
      }`}
    >
      <div className="desc__wrapper desc__wrapper--reverse">
        <h3 className="card__subtitle">Moves</h3>
        <button
          className="section__link section__link--back"
          onClick={expandMovePanel}
        >
          {BackIcon}
        </button>
      </div>
      <div className="card__panel-list">
        {moves.map((element, index) => (
          <MoveItem
            expandMove={expandMove}
            key={element.move.name}
            move={element.move}
            index={index}
            moveDetails={moveDetails}
          />
        ))}
      </div>
    </section>
  );
};

export default CardMoves;
