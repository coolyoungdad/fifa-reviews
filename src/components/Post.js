import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'

class Post extends React.Component {

    state = {
        isShow: false
      };

      handleToggle = () => {
        const { isShow } = this.state;
        this.setState({ isShow: !isShow });
      };

    render() {
        let img = JSON.parse(this.props.img)
        

        return (
            <div className="overall-wrapper">
                <div className="image-wrapper">
                    <img src={`${img.playerimage}`}/>
                </div>
                <div className="player-data-wrapper">
                    <div className="player-name">
                        <div></div>
                        <h1>{this.props.player_json.Revision} {this.props.player_json.Name}</h1>
                    </div>

                    <div className="player-review">
                        <LinesEllipsis text={this.props.review} maxLine='2' ellipsis='...' trimRight basedOn='words' className={this.state.isShow ? "hide" : "show"}/>
                        
                        <p className={this.state.isShow ? "show" : "hide"}>
                        <h3>Review:</h3> {this.props.review}</p>
                        <p><h3>Comparisons:</h3> {this.props.comparisons}</p>
                        <h3 className={this.state.isShow ? "show" : "hide"}>Ratings: {this.props.ratings}</h3>
                    </div>

                    <div className="info-column" className={this.state.isShow ? "show" : "hide"}>
                        <div className="player-main"></div>                       
                        <div className="middle-section">     
                            <div className="player-meta">
                                <h3>Player Details</h3>
                                <p className="player-main-data"><span>Version:</span> {this.props.player_json.Revision}</p>
                                <p className="player-main-data">Club: <img src={`${img.playerClubImg}`}/>{this.props.player_json.Club}</p>
                                <p className="player-main-data">Nation: <img src={`${img.playerCountryImage}`}/>{this.props.player_json.Nation}</p>
                                <p className="player-main-data">Age: {this.props.player_json.Age}</p>
                                <p>Height: {this.props.player_json.Height}</p>
                                <p>Weight: {this.props.player_json.Weight}kg</p>
                                <p>Skills: {this.props.player_json.Skills}*</p>
                                <p>Weak Foot: {this.props.player_json['Weak Foot']}*</p>
                                <p>Foot: {this.props.player_json.Foot}</p>
                                <p>Def. WR: {this.props.player_json['Def. WR']}
                                </p>
                                <p>Att. WR: {this.props.player_json['Att. WR']}</p>
                                
                            </div>
                            <div className="player-stats">
                                <h3>Pace: {this.props.player_json.Pace}</h3>
                                <p>Acceleration: {this.props.player_json.Acceleration}</p>
                                <p>Sprint Speed: {this.props.player_json['Sprint Speed']}</p>
                            </div>
                            <div className="player-stats">
                                <h3>Shooting {this.props.player_json.Shooting}</h3>
                                <p>Positioning: {this.props.player_json.Positioning}</p>
                                <p>Finishing: {this.props.player_json.Finishing}</p>
                                <p>Shot Power: {this.props.player_json['Shot Power']}</p>
                                <p>Long Shots: {this.props.player_json['Long Shots']}</p>
                                <p>Volleys: {this.props.player_json.Volleys}</p>
                                <p>Penalties: {this.props.player_json.Penalties}</p>
                            </div>
                            <div className="player-stats">
                                <h3>Passing: {this.props.player_json.Passing}</h3>
                                <p>Vision: {this.props.player_json.Vision}</p>
                                <p>Crossing: {this.props.player_json.Crossing}</p>
                                <p>Fk. Accuracy: {this.props.player_json['Fk. Accuracy']}</p>
                                <p>Short Passing: {this.props.player_json['Short Passing']}</p>
                                <p>Long Passing: {this.props.player_json['Long Passing']}</p>
                                <p>Curve: {this.props.player_json.Curve}</p>
                            </div>
                            <div className="player-stats">
                                <h3>Dribbling: {this.props.player_json.Dribbling}</h3>
                                <p>Agility: {this.props.player_json.Agility}</p>
                                <p>Balance: {this.props.player_json.Balance}</p>
                                <p>Reactions: {this.props.player_json.Reactions}</p>
                                <p>Ball Control: {this.props.player_json['Ball Control']}</p>
                                <p>Dribbling {this.props.player_json.Dribbling}</p>
                                <p>Vision: {this.props.player_json.Vision}</p>
                            </div>
                            <div className="player-stats">
                                <h3>Defending: {this.props.player_json.Defending}</h3>
                                <p>Interceptions: {this.props.player_json.Interceptions}</p>
                                <p>Heading Accuracy: {this.props.player_json['Heading Accuracy']}</p>
                                <p>Def. Awareness: {this.props.player_json['Def. Awareness']}</p>
                                <p>Standing Tackle: {this.props.player_json['Standing Tackle']}</p>
                                <p>Sliding Tackle: {this.props.player_json['Sliding Tackle']}</p>
                            </div>
                            <div className="player-stats">
                                <h3>Physical: {this.props.player_json.Physicality}</h3>
                                <p>Jumping: {this.props.player_json.Jumping}</p>
                                <p>Stamina: {this.props.player_json.Stamina}</p>
                                <p>Strength: {this.props.player_json.Strength}</p>
                                <p>Aggression: {this.props.player_json.Aggression}</p>
                            </div>
                            {/* {Playerstats} */}
                        </div>                   
                    </div>
                    <input type="submit" value="Expand" onClick={this.handleToggle} className={this.state.isShow ? "on" : "off"} />
                </div>
                <div></div>
            </div>
        )
    }
}
export default Post;