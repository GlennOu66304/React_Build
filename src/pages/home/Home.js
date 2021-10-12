
import { Link } from "react-router-dom";
import React from "react";


export const Home = props => {
    return (
        <div>
            <h1>This is the home page</h1>
            <button >
                <Link to="/login">go to login page </Link></button>
        </div>
    );
};
