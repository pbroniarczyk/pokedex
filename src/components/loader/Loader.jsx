import React, { Component } from "react";

// Assets
import "./loader.css"


class Loader extends Component {
    render() {
        return (
            <div className="loader">
                <div className="loader__figure" />
            </div>
        );
    }
}

export default Loader