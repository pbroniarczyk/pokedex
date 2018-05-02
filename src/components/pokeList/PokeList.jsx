import React, { Component } from "react";
import axios from "axios";

// Components
import Loader from "../loader/Loader.jsx";
import PokeItem from "./PokeItem.jsx";

// Assets
import "./pokeList.css";


class PokeList extends Component {
    constructor() {
        super();
        this.state = { 
            pokeList: [],
            isLoaded: false 
        }
    }

    componentWillMount() {
        axios.get("http://pokeapi.salestock.net/api/v2/pokemon/?limit=150")
        .then(response => {
            this.setState({
                pokeList: response.data.results,
                isLoaded: true
            })
        })
        .catch(error => { throw(error) });
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <React.Fragment>
                    <h1>POKE LIST</h1>
                    <section className="pokelist">
                        {this.state.pokeList.map((e,i) => 
                            <PokeItem
                                key={e.name}
                                name={e.name}
                                index={i + 1}
                                handleOpenCard={this.props.handleOpenCard}
                            />)}
                    </section>
                </React.Fragment>
            );
        } else {
            return <Loader />
        }
    }
}

export default PokeList