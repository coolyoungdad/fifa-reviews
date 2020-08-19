import React from 'react';

class PlayerImage extends React.Component {

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
          
                <div className='image-container'>
                    <div className="border-right">
                        <div  className="background-image" style={backgroundStyle}>
                            <img className="player-image" src={`https://www.futwiz.com${img.playerimage}`}/>                   
                            <div className="player-rating-overall">{img.playerRatImg}</div>


                            <div className="player-club"><img src={`https://www.futwiz.com${img.playerClubImg}`}/></div>
                            <div className="player-country"><img src={`https://www.futwiz.com${img.playerCountryImage}`}/></div>
                            <div className="player-name-card">{img.playerNameCard}</div>
                            <div className="player-position-card player-icon">{img.playerPositionCard}</div>
                            <div class="card-20-headeroverlay"></div>
                        </div>        
                    </div> 
                </div>

        )
    }
}
export default PlayerImage;