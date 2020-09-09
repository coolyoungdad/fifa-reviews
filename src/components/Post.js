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
        let replaceImage = img.bgimage
        let backgroundImage = replaceImage.replace("url(", '').replace(')', '').replace('"', '').replace('"','')      
        let backgroundStyle = {
            backgroundImage: 'url(' +  backgroundImage + ')',
           
          };

        

        return (
            <div className="overall-wrapper">
                <div className='image-container'>
                    <div className="border-right">
                        <div  className="background-image" style={backgroundStyle}>
                            <img className="player-image" src={`https://www.futwiz.com${img.playerimage}`}/>                   
                            <div className="player-rating-overall">{img.playerRatImg}</div>
                            <div className="player-club"><img src={`https://www.futwiz.com${img.playerClubImg}`}/></div>
                            <div className="player-country"><img src={`https://www.futwiz.com${img.playerCountryImage}`}/></div>
                            <div className="player-name-card">{img.playerNameCard}</div>
                            <div className="player-position-card player-icon">{img.playerPositionCard}</div>

                        <div className="attr-wrapper">
                            <div className="attr-row">
                                <div className="pace-stat">{img.playerPaceStat} <span>{img.playerPAC}</span></div>  
                                <div className="dribble-stat">{img.playerDribblingStat} <span>{img.playerDRI}</span></div>
                            </div>
                            <div className="attr-row">
                                <div className="shoot-stat">{img.playerShootingStat} <span>{img.playerSHO}</span></div>
                                <div className="defend-stat">{img.playerDefenseStat} <span>{img.playerDEF}</span></div>
                            </div>                           
                            <div className="attr-row">
                                <div className="pass-stat">{img.playerPassingStat} <span>{img.playerPAS}</span></div>
                                <div className="physical-stat">{img.playerPhysicalStat} <span>{img.playerPHY}</span></div>
                            </div>
                        </div>

                            <div class="card-20-headeroverlay"></div>
                            <div class="card-20-split card-20-name-split"></div>
                            <div class="card-20-split card-20-atts-split"></div>
                            <div class="card-20-split card-20-chem-split"></div>
                        </div>        
                    </div> 
                </div>


                <div className="player-data-wrapper">
                    <div className="player-name">
                    <h1 className="player-name-title">
                    <span className="bold">{this.props.player_json.Revision}</span> {this.props.player_json.Name}
                    </h1>
                </div>



                    <div className='player-summary' className={this.state.isShow ? "hide" : "show"}>
                    <p className='player-summary'>{img.playerPositionCard} <img className='image-icon' src={`https://www.futwiz.com${img.playerCountryImage}`}/> <img className='image-icon' src={`https://www.futwiz.com${img.playerClubImg}`}/></p>
                    </div>

                    <div className="player-review">
                        {/* Line Ellipses Show/Hide */}
                        <h3 className="bold">Review:</h3>
                        <LinesEllipsis text={this.props.review} maxLine='2' ellipsis='...' trimright='true' basedOn='words' className={this.state.isShow ? "hide" : "show"}/>  
                        <p className={this.state.isShow ? "show" : "hide"}>{this.props.review}</p>


                        <p className={this.state.isShow ? "" : "light"}><h3 className="bold">Comparisons:</h3>{this.props.comparisons}</p>
                        <h3 className={this.state.isShow ? "show" : "hide"}><h4 className="bold">Ratings: </h4>{this.props.ratings}</h3>
                    </div>


                    <div className="info-column" className={this.state.isShow ? "show" : "hide"}>
                        <div className="player-main"></div>                       
                        <div className="middle-section">     
                            <div className="player-meta">
                                <h3>Player Details</h3>
                                <p className="player-main-data"><span className="bold">Version:</span> {this.props.player_json.Revision}</p>
                                <p className="player-main-data"><span className="bold">Club:</span> <img className="image-icon" src={`https://www.futwiz.com${img.playerClubImg}`}/> {this.props.player_json.Club}</p>
                                <p className="player-main-data"><span className="bold">Nation:</span> <img className="image-icon" src={`https://www.futwiz.com${img.playerCountryImage}`}/> {this.props.player_json.Nation}</p>
                                <p className="player-main-data"><span className="bold">Age:</span> {this.props.player_json.Age}</p>
                                <p className="player-main-data"><span className="bold">Height:</span> {this.props.player_json.Height}</p>
                                <p className="player-main-data"><span className="bold">Weight:</span> {this.props.player_json.Weight}kg</p>
                                <p className="player-main-data"><span className="bold">Skills:</span> {this.props.player_json.Skills}*</p>
                                <p className="player-main-data"><span className="bold">Weak Foot:</span> {this.props.player_json['Weak Foot']}*</p>
                                <p className="player-main-data"><span className="bold">Foot:</span> {this.props.player_json.Foot}</p>
                                <p className="player-main-data"><span className="bold">Def. WR:</span> {this.props.player_json['Def. WR']}
                                </p>
                                <p className="player-main-data"><span className="bold">Att. WR:</span> {this.props.player_json['Att. WR']}</p> 
                            </div>
                            
                        <div className="player-stats-wrapper">
                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Pace: {this.props.player_json.Pace}</h3>
                                <p>Acceleration: {this.props.player_json.Acceleration}</p>
                                <p>Sprint Speed: {this.props.player_json['Sprint Speed']}</p>
                            </div>
                            </div>

            
                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Shooting {this.props.player_json.Shooting}</h3>
                                <p>Positioning: {this.props.player_json.Positioning}</p>
                                <p>Finishing: {this.props.player_json.Finishing}</p>
                                <p>Shot Power: {this.props.player_json['Shot Power']}</p>
                                <p>Long Shots: {this.props.player_json['Long Shots']}</p>
                                <p>Volleys: {this.props.player_json.Volleys}</p>
                                <p>Penalties: {this.props.player_json.Penalties}</p>
                            </div>
                            </div>
                                
                  
                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Passing: {this.props.player_json.Passing}</h3>
                                <p>Vision: {this.props.player_json.Vision}</p>
                                <p>Crossing: {this.props.player_json.Crossing}</p>
                                <p>Fk. Accuracy: {this.props.player_json["FK. ' + 'Accuracy"]}</p>
                                <p>Short Passing: {this.props.player_json['Short Passing']}</p>
                                <p>Long Passing: {this.props.player_json['Long Passing']}</p>
                                <p>Curve: {this.props.player_json.Curve}</p>
                            </div>
                            </div>
                            
                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Dribbling: {this.props.player_json.Dribbling}</h3>
                                <p>Agility: {this.props.player_json.Agility}</p>
                                <p>Balance: {this.props.player_json.Balance}</p>
                                <p>Reactions: {this.props.player_json.Reactions}</p>
                                <p>Ball Control: {this.props.player_json['Ball Control']}</p>
                                <p>Dribbling {this.props.player_json.Dribbling}</p>
                                <p>Vision: {this.props.player_json.Vision}</p>
                            </div>
                            </div> 

                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Defending: {this.props.player_json.Defending}</h3>
                                <p>Interceptions: {this.props.player_json.Interceptions}</p>
                                <p>Heading Accuracy: {this.props.player_json['Heading Accuracy']}</p>
                                <p>Def. Awareness: {this.props.player_json['Def. Awareness']}</p>
                                <p>Standing Tackle: {this.props.player_json['Standing Tackle']}</p>
                                <p>Sliding Tackle: {this.props.player_json['Sliding Tackle']}</p>
                            </div>
                            </div>
                            <div className="player-stats">
                            <div className="player-stats-column">
                                <h3>Physical: {this.props.player_json.Physicality}</h3>
                                <p>Jumping: {this.props.player_json.Jumping}</p>
                                <p>Stamina: {this.props.player_json.Stamina}</p>
                                <p>Strength: {this.props.player_json.Strength}</p>
                                <p>Aggression: {this.props.player_json.Aggression}</p>
                            </div>
                            </div>
                            </div>
                            {/* {Playerstats} */}
                        </div>                   
                    </div>
                    <input type="submit" value="Read More" onClick={this.handleToggle} className={this.state.isShow ? "on" : "off"} className="button" />
                </div>
                <div></div>
            </div>
        )
    }
}
export default Post;