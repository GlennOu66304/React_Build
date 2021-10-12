
import './user.css'
import { Search } from '@material-ui/icons';
import { Link } from "react-router-dom";
import React from 'react'
import auth from "../../auth";
export const User = props => {

    return (
        <>
            {/* <button
                onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
            >
                Logout
            </button> */}

            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/" style={{ textDecoration: 'none' }}><span className="logo">Lama Social</span></Link>
                </div>

                <div className="topbarCenter">
                    <div className="searchBar">
                        <Search className="searchIcon" />
                        <input placeholder="Search for friend, video ,post" className="searchInput" />
                    </div>
                </div>

                <div className="topbarRight">
                    <div className="topbarLinks">

                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>


                    <div className="topbarIcons">
                        <div className="topbarIconItem">
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

                    </div>
                </div>

            </div>

        </>
    )
}