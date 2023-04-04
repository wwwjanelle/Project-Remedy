import React, {Component} from "react";
import Navbar from "./Navbar";
import Cards  from "./Cards"
import PatientHeader from "./PatientHeader";

export default class MainPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <PatientHeader />
                <Cards />
            </div>
        );
            
    }
}

