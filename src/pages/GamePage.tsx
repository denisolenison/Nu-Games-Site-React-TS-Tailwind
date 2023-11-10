import { gamesColors, getIconLinkOnPage } from '../mocks/games.mocks';
import './GamePage.css';

function GamePage({game}: any) {
    
    document.body.style.backgroundImage = "url('../bg.jpg')";
    const color = gamesColors[game.count % 8];;

    return (
      <>
        <div className="gp_gameblock" style={{backgroundColor: color}}>
            <img className="gameicon" src={getIconLinkOnPage(game.id)}></img>
            <div className="gameblock2" style={{width: "100%"}}>
              <a className="gamename">{game.name}</a>
              <a>Release Date:</a>
              <a className="rdate">{game.releaseDate}</a>
              <a href="../index.html" style={{color: "darkblue", fontWeight: '700', fontSize: "20px"}}>Return to main page</a>
            </div>
            <div className="gameblock2" style={{marginLeft: "10%"}}>
              <a className="gamename">Description</a>
              <a className="gamedesc" style={{textAlign: 'center'}}>{game.description}</a>
            </div>
        </div>
      <p style={{textAlign: 'center'}}>
        <iframe style={{display: "block", marginLeft: "auto", marginRight: "auto"}} src={game.gameLink}
        width={game.gameWidth} height={game.gameHeight} scrolling="no" frameBorder="5"  allowFullScreen></iframe>
      </p>
      </>
    );
  }
  
  export default GamePage;