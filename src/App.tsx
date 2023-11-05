import React from 'react';
import './App.css';
import GameRows from './components/gameRow/gameRows';

function App() {
  return (
    <div>
      <div id="logos">
      <span><img className="siteicon" src="logo2.png" alt="Nu Games"></img></span>
      <span className="company">Nu Games</span>
      </div>
      <div id="welcomeSite">Hello, welcome to my site!</div>
      <br></br>
      <div id="demosText">My games (demos)</div>
      <GameRows startI={0} endI={0} gamesType="big" key="bigGamesRows"></GameRows>
      <div id="miniGamesText">My mini-games</div>
      <GameRows startI={0} endI={21} gamesType="small" key="smallGamesRows"></GameRows>
    </div>
  );
}

export default App;
