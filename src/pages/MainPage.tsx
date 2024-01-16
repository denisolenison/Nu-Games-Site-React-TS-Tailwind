import GameRows from "../components/gameRow/gameRows";
import Header from "./header/Header";
import './MainPage.css';


function MainPage() {
  document.body.style.backgroundImage = "url('bg_games.jpg')";

  let lang = localStorage.getItem("lang") ?? "en";

    return (
      <div className="gamesPage">
        <Header></Header>
        <div id="welcomeSite">{lang == "en" ? "Hello, welcome to my site!" : "Здарова! Добро пожаловать на мой сайт)"}</div>
        <br></br>
        <div id="demosText">{lang == "en" ? "My games (demos)" : "Мои игры (демки)"}</div>
        <GameRows startI={0} endI={0} gamesType="big"/>
        <div id="miniGamesText">{lang == "en" ? "My mini-games" : "Мои миниигры"}</div>
        <GameRows startI={0} endI={22} gamesType="small"/>
      </div>
    );
  }
  
  export default MainPage;