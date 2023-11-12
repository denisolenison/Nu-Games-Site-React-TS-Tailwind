import GameRows from "../components/gameRow/gameRows";
import Header from "./header/Header";
import './MainPage.css';


function MainPage() {
  document.body.style.backgroundImage = "url('bg_games.jpg')";
    return (
      <div className="gamesPage">
        <Header></Header>
        <div id="welcomeSite">Hello, welcome to my site!</div>
        <br></br>
        <div id="demosText">My games (demos)</div>
        <GameRows startI={0} endI={0} gamesType="big"/>
        <div id="miniGamesText">My mini-games</div>
        <GameRows startI={0} endI={21} gamesType="small"/>
      </div>
    );
  }
  
  export default MainPage;