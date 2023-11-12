import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonGamesFullInfo, UnityGamesFullInfo } from './mocks/games.mocks';
import DiaryMonthsPage from './pages/diary/DiaryMonthsPage/DiaryMonthsPage';
import DiaryPage from './pages/diary/DiaryPage';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import UnityGamePage from './pages/UnityGamePage';

function App() {
  const games = CommonGamesFullInfo;
  const unityGames = UnityGamesFullInfo;
  return (
    <Routes>
      <Route path="/" element= { <MainPage />} />
      <Route path="/diary" element= { <DiaryPage />} />
      <Route path="/diary/days" element= { <DiaryPage />} />
      <Route path="/diary/months" element= { <DiaryMonthsPage />} />
      {unityGames.map((game, index) => <Route path={`/unity_games/${game.id}`} element= { <UnityGamePage game={game} />}  key={index} />)}
      {games.map((game, index) => <Route path={`/games/${game.id}`} element= { <GamePage game={game} />}  key={index} />)}
    </Routes>
  );
}

export default App;
