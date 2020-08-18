import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

class About extends Component {

    render() {

        return (
            <div>
            
                <p className="overall-wrapper">
                Welcome to FUT Reviews, featuring world class reviews of EA's FIFA 20
                Ultimate Team cards. These rankings are FUT Reviews' personal opinions, and
                incorporate factors such as in-game stats, player information, in-game
                performance, and meta fit. The "Big Board" will be updated to reflect new
                content.
            </p>

            </div>

        )
    }

}

export default About
