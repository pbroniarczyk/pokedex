import React, { Component } from "react";
import axios from "axios";

// Components
import PokeItem from "./PokeItem.jsx";

class PokeList extends Component {
    constructor() {
        super();
        this.state = { pokeList: [] }
    }

    componentWillMount() {
        axios.get("http://pokeapi.salestock.net/api/v2/pokemon/?limit=151")
        .then(response => { this.setState({ pokeList: response.data.results }) })
        .catch(error => { console.log(error) });
    }

    render() {
        return (
            <React.Fragment>
                <h1>POKE LIST</h1>
                {this.state.pokeList.map((e,i) => <PokeItem name={e.name} index={i + 1}/>)}
            </React.Fragment>
        );
    }
}

export default PokeList