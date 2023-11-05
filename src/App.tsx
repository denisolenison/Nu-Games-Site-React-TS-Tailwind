import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonGamesFullInfo, UnityGamesFullInfo } from './mocks/games.mocks';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import UnityGamePage from './pages/UnityGamePage';

function App() {
  const games = CommonGamesFullInfo;
  const unityGames = UnityGamesFullInfo;
  return (
    <Routes>
      <Route path="/" element= { <MainPage />} />
      <Route path="/index.html" element= { <MainPage />} />
      {unityGames.map((game) => <Route path={`/unity_games/${game.id}.html`} element= { <UnityGamePage game={game} />} />)}
      {games.map((game) => <Route path={`/games/${game.id}.html`} element= { <GamePage game={game} />} />)}
    </Routes>
  );
}

export default App;
