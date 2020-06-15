import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

const Posts = props => (
    <div className="overall-wrapper">
        <div className="image-wrapper"></div>
        <div className="player-data-wrapper">
            <div className="player-name">
                <h1>TOTS Jadon Sancho</h1>
            </div>
            <div className="info-column">
                <div className="player-main">
                    <p className="player-main-data">Version: Team of the Season</p>
                    <p className="player-main-data">Club: Dortmund</p>
                    <p className="player-main-data">Nation: England</p>
                    <p className="player-main-data">Age: 20</p>
                </div>
                
                <div className="middle-section">
                  <div className="player-meta">
                      <p>Skills: 5* // Weak Foot: 4*</p>
                      <p>Foot: Right</p>
                      <p>Def. WR: Low // Att. WR: Med</p>
                      <p>Traits: Technical Dribbler (CPU AI Only) // Outside Foot Shot // Flair //
                          Finesse Shot</p>
                  </div>
                  <div className="player-stats">
                      <p>[[In Game Stats Go Here]]</p>
                  </div>
                </div>


                <div className="player-review">
                    <h4>Review written by me goes here</h4>
                    <p>Comparisons:
                    </p>
                    <h2>Pace: 9.7/10 // Shooting: 9.3/10 // Passing: 9/10 // Dribbling 9.4/10 //
                        Defense: N/A // Physical: 7.4/10
                    </h2>
                </div>
            </div>
        </div>
    </div>
)

export default Posts