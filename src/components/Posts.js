import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

  
const Posts = props => (
    <div>
      <h1>Name: Jadon Sancho</h1>
      <h3>Version: TOTS</h3>
      <h4>Club: BVB</h4>
      <h4>Nation: England</h4>
      <h4>Skills: 5* // Weak Foot: 4*</h4>
      <h4>Foot: Right</h4>
      <h4>Def. WR: Low // Att. WR: Med</h4>
      <h4>Traits: Technical Dribbler (CPU AI Only) // Outside Foot Shot // Flair // Finesse Shot</h4>
      <p>[In Game Stats Go Here]</p>
      <p>Review written by me goes here</p>
      <p>Pace: 9.7/10 // Shooting: 9.3/10 // Passing: 9/10 // Dribbling 9.4/10 // Defense: N/A // Physical: 7.4/10
      </p>

    </div>
)

export default Posts