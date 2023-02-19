import React, { Component } from "react";
import "../../App.css";

export default class Provider extends Component {
    render() {
        return (
            <form>
                <h3>Provider</h3>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider/login">Log In</a></button>
                <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider/signup">Sign Up</a></button>

            </form>

        );
    }
}