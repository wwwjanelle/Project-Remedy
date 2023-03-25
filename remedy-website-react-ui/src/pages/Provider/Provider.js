import React from "react";
import "../../App.css";


const Provider = () => {

    return (
        <form>
        <h3>Provider</h3>

        <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider/login">Log In</a></button>
        <button type="submit" className="btn btn-dark btn-lg btn-block"><a href="/provider/signup">Sign Up</a></button>

    </form>

    );
};

export default Provider;