import { Link } from 'react-router-dom';
import { gamesColors, getIconLinkOnPage } from '../mocks/games.mocks';
import './GamePage.css';
import Header from './header/Header';

function GamePage({game}: any) {
    
    document.body.style.backgroundImage = "url('bg_games.jpg')";
    let lang = localStorage.getItem("lang") ?? "en";
    const color = gamesColors[game.count % 8];;

    return (
      <>
      <Header></Header>
        <div className="gp_gameblock" style={{backgroundColor: color}}>
            <img className="gameicon" src={getIconLinkOnPage(game.id)}></img>
            <div className="gameblock2" style={{width: "100%"}}>
              <a className="gamename">{game.name}</a>
              <a>{lang == "en" ? "Release Date:" : "Дата выхода: "}</a>
              <a className="rdate">{lang == "en" ? game.releaseDate : game.releaseDateRu}</a>
              <Link to="../" style={{color: "darkblue", fontWeight: '700', fontSize: "20px"}}>{lang == "en" ? "Return to main page" : "Вернуться на главную"}</Link>
            </div>
            <div className="gameblock2" style={{marginLeft: "10%"}}>
              <a className="gamename">{lang == "en" ? "Description" : "Описание"}</a>
              <a className="gamedesc" style={{textAlign: 'center'}}>{lang == "en" ? game.description : game.descriptionRu}</a>
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