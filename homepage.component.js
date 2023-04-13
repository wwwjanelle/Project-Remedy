import React, { Component } from "react";

export default class HomePage extends Component {
    render() {
        return (
            <form>
                <h3>Home Page</h3>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Provider</button>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Patient</button>
            </form>
        );
    }
}