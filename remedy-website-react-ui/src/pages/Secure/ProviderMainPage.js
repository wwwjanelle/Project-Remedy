import React, {Component} from "react";
import Navbar from "./Navbar";
import PatientHeader from "./PatientHeader";
import ProviderHeader from "./ProviderHeader";
import Cards from "./Cards";
import ProviderCards from "./ProviderCards";


export default class ProviderMainPage extends Component {
    render() {
        return(
            <div>
                <Navbar />
                <ProviderHeader />
                <ProviderCards />
            </div>
        );
            
    }
}

