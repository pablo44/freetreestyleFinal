import React, { Component } from "react";
import "./style.scss";

class MissingPage extends Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className="missingPage">
                <h2>The page is missing</h2>
                <p>we are sorry but we can't find the page</p>
            </div>
        )
    }
}
export default MissingPage;