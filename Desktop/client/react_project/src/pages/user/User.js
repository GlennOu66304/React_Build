import React from "react";
import auth from "../../auth";

export const User = props => {
    return (
        <div>
            <h1>This is the user page after login</h1>
            <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button>
        </div>
    );
};

