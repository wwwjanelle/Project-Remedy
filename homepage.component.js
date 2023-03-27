import React, { Component } from "react";

export default class HomePage extends Component {
    render() {
        return (
            <form>
                <img border = "0" src="Remedy-xxx" alt="Remedy" width="64" height="64"/>
                <h3>Home Page</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Provider</button>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Patient</button>
            </form>
        );
    }
}