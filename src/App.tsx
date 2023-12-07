import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonGamesFullInfo, UnityGamesFullInfo } from './mocks/games.mocks';
import DiaryMonthsPage from './pages/diary/DiaryMonthsPage/DiaryMonthsPage';
import DiaryPage from './pages/diary/DiaryPage';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import UnityGamePage from './pages/UnityGamePage';
import { diaryMonths } from './pages/diary/diary.mocks';
import DiaryMonthPage from './pages/diary/DiaryMonthsPage/DiaryMonthPage/DiaryMonthPage';
import { diaryMontsInit } from './pages/diary/DiaryMonthsInit';

function App() {
  const games = CommonGamesFullInfo;
  const unityGames = UnityGamesFullInfo;
  const {newDiaryMonths, avg} = diaryMontsInit(diaryMonths);

  return (
    <Routes>
      <Route path="/" element= { <MainPage />} />
      <Route path="/diary" element= { <DiaryPage />} />
      <Route path="/diary/days" element= { <DiaryPage />} />
      <Route path="/diary/months" element= { <DiaryMonthsPage newDiaryMonths={newDiaryMonths} avg={avg} />} />
      {unityGames.map((game, index) => <Route path={`/unity_games/${game.id}`} element= { <UnityGamePage game={game} />}  key={index} />)}
      {games.map((game, index) => <Route path={`/games/${game.id}`} element= { <GamePage game={game} />}  key={index} />)}
      {newDiaryMonths.map((mData:any, index:number) => <Route path={`/diary/month/${mData.year}/${mData.month}`} element= { <DiaryMonthPage mData={mData} />}  key={index} />)}
    </Routes>
  );
}

export default App;
