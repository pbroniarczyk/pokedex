import React, { Component } from "react";
import axios from "axios";

// Components
import PokeItem from "./PokeItem.jsx";

// Assets
import "./pokeList.css";


class PokeList extends Component {
    constructor() {
        super();
        this.state = { 
            pokeList: [],
            loading: true 
        }
    }

    componentWillMount() {
        axios.get("http://pokeapi.salestock.net/api/v2/pokemon/?limit=151")
        .then(response => { this.setState({ pokeList: response.data.results }) })
        .catch(error => { throw(error) });
    }

    render() {
        return (
            <React.Fragment>
                <h1>POKE LIST</h1>
                <section className="pokelist">
                    {this.state.pokeList.map((e,i) => <PokeItem name={e.name} index={i + 1} key={e.name}/>)}
                </section>
            </React.Fragment>
        );
    }
}

export default PokeList