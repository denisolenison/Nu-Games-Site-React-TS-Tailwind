import GameRows from "../components/gameRow/gameRows";
import './MainPage.css';


function MainPage() {
    return (
      <div>
        <div id="logos">
          <span><img className="siteicon" src="logo2.png" alt="Nu Games"></img></span>
          <span className="company">Nu Games</span>
          <button className="diaryGo" style={{marginRight: "50px", marginLeft: "auto"}}>Dev. Diary</button>
        </div>
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