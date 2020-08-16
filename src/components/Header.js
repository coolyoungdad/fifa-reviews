import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

const Header = props => (

    <header className="header-wrapper">
        <div className="header">
            <NavLink to="/" className="big-title">FUT REVIEWS</NavLink>
            <p className="header-p">
                Welcome to FUT Reviews, featuring world class reviews of EA's FIFA 20
                Ultimate Team cards. These rankings are FUT Reviews' personal opinions, and
                incorporate factors such as in-game stats, player information, in-game
                performance, and meta fit. The "Big Board" will be updated to reflect new
                content.
            </p>
        </div>
    </header>
)

export default Header
