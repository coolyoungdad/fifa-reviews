import React from 'react';

const Post = props => (
    <div className="overall-wrapper">
        <div className="image-wrapper"></div>
        <div className="player-data-wrapper">
            <div className="player-name">
                <h1>{props.player_json.Name}</h1>
            </div>
            <div className="info-column">
                <div className="player-main">
                    <p className="player-main-data">Version: (not scraped)</p>
                    <p className="player-main-data">Club: {props.player_json.Club}</p>
                    <p className="player-main-data">Nation: {props.player_json.Nation}</p>
                    <p className="player-main-data">Age: (not scraped)</p>
                </div>     
                <div className="middle-section">
                  <div className="player-meta">
                      <p>Skills: {props.player_json.Skills}</p>
                      <p>Weak Foot: {props.player_json['Weak Foot']}</p>
                      <p>Foot: {props.player_json.Foot}</p>
                      <p>Def. WR: {props.player_json['Def. WR']} </p>
                      <p>Att. WR: {props.player_json['Att. WR']}</p>
                  </div>
                  <div className="player-stats">
                      <p>[[In Game Stats Go Here]]</p>
                  </div>
                </div>
                <div className="player-review">
                    <h4>{props.review}</h4>
                    <p>{props.comparisons}
                    </p>
                    <h3>{props.ratings}
                    </h3>
                </div>
            </div>
        </div>
    </div>
)

export default Post;