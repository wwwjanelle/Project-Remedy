import React, {Component} from "react";
import Navbar from "./Navbar";
import Cards  from "./Cards"

export default class MainPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <Cards />
            </div>
        );
            
    }
}

