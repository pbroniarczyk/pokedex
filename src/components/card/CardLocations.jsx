import React, { Component } from "react";
import axios from "axios";

// Components
import LocationItem from "./LocationItem.jsx";

// Assets
import "./card.css"

const ICON = <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>


class CardLocations extends Component {
    constructor() {
        super();
        this.state = {
            locationList: []
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon.id}/encounters`)
        .then((response) => {
            this.filterLocationByVersion(response.data);
        }).catch(error => { throw(error) });
    }

    filterLocationByVersion(locationsToFilter) {
        const LOCATION_LIST = [];
        locationsToFilter.map((element, index) => {
            element.version_details.map((ver) => {
                if(
                    ver.version.name === "red" ||
                    ver.version.name === "blue" &&
                    !LOCATION_LIST.includes(element)
                ) {
                    LOCATION_LIST.push(element)
                }
            });
        });

        this.setState((prevState) => ({ locationList: LOCATION_LIST }))
    }

    render() {
        return(
            <section className={`card__section card__panel card__desc ${this.props.sectionPulled ? "card__panel--pulled" : null}`}>
                <div className="desc__wrapper desc__wrapper--reverse">
                    <h3 className="card__subtitle">Locations</h3>
                    <button
                        className="section__link section__link--back"
                        onClick={() => { this.props.toggleSectionList("sectionLocationsPulled") }}
                    >{ICON}
                    </button>
                </div>
                <div className="card__moves-list card__panel-list">
                    {
                        this.state.locationList.map((element, index) => 
                            <LocationItem
                                key={element.location_area.name}
                                location={element.location_area.name}
                                index={index}
                                version={element.version_details}
                            />)
                    }
                </div>
            </section>
        );
    }
}

export default CardLocations