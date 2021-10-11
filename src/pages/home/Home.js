// import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import React from "react";
import auth from "../../auth";

export const Home = props => {
    return (
        <div>
            <h1>This is the home page</h1>
            <button
                onClick={() => {
                    auth.login(() => {
                        props.history.push("/user");
                    });
                }}
            >
                Login
            </button>
        </div>
    );
};
