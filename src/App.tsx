import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CommonGamesFullInfo, UnityGamesFullInfo } from './mocks/games.mocks';
import DiaryMonthsPage from './pages/diary/DiaryMonthsPage/DiaryMonthsPage';
import DiaryPage from './pages/diary/DiaryPage';
import GamePage from './pages/GamePage';
import MainPage from './pages/MainPage';
import UnityGamePage from './pages/UnityGamePage';
import { diaryDayTextsMocks, diaryDayTextsRuMocks, diaryDaysMocks, diaryMonths } from './mocks/diary.mocks';
import DiaryMonthPage from './pages/diary/DiaryMonthsPage/DiaryMonthPage/DiaryMonthPage';
import { diaryMontsInit } from './pages/diary/DiaryMonthsInit';
import axios from 'axios';
import { addDays } from 'date-fns';
import { DiaryDay, DiaryFlowScore } from './diary.types';

function App() {
  const games = CommonGamesFullInfo;
  const unityGames = UnityGamesFullInfo;

  let lang = localStorage.getItem("lang") ?? "en";

  const [diaryDays, setDiaryDays]: any[] = useState([]);
  const [diaryDayTexts, setDiaryDayTexts]: any[] = useState([]);
  const [diaryDayTextsRu, setDiaryDayTextsRu]: any[] = useState([]);

    useEffect(() => {
      try {
        Promise.all([axios.get("http://localhost:3001/dayscores"),
        axios.get("http://localhost:3001/daytexts"),
          axios.get("http://localhost:3001/daytextsRu")]).then((res) => {
            setDiaryDays(res[0].data.reverse());
            setDiaryDayTexts(res[1].data.reverse());
            setDiaryDayTextsRu(res[2].data.reverse());
        }).catch((res) => {
          console.log(res);
          setDiaryDays(diaryDaysMocks);
          setDiaryDayTexts(diaryDayTextsMocks);
          setDiaryDayTextsRu(diaryDayTextsRuMocks);
        }
        )
      }
      catch {
      }
    }, [])

  const pages = Math.ceil(diaryDays.length / 25);
  let pageStarts = [];
  for (let i = 0 ; i < pages ; ++i) {
    pageStarts.push(i * 25);
  }

  let diaryData: DiaryDay[][] = [];
  for (let i = 0 ; i < pages ; ++i) {
    let pageData = [];
    for (let j = pageStarts[i] ; j < Math.min(pageStarts[i] + 25, diaryDays.length) ; ++j) {
      let obj = {
        ...diaryDays[j],
        fullText: lang == "en" ? diaryDayTexts[j].fullText : diaryDayTextsRu[j].fullText,
      }
      pageData.push(obj);
    }
    diaryData.push(pageData);
  }

  let diaryDaysStr = [...diaryDays].reverse();
  
  let flowScores: DiaryFlowScore[] = [];
  for (let i = 0 ; i < diaryDaysStr.length ; ++i) {
    let flowScore: number = 8;
    if (i == 0) {
      flowScore = 16.32;
    }
    else if (i == 1) {
      flowScore = 13.99;
    }
    else if (i == 2) {
      flowScore = 9.75;
    }
    else {
      flowScore = Math.pow(diaryDaysStr[i-1].score, Math.sqrt(diaryDaysStr[i-1].importance));
      flowScore *= Math.pow(diaryDaysStr[i].score, Math.sqrt(diaryDaysStr[i].importance));
      if (i + 1 < diaryDaysStr.length) {
        flowScore *= Math.pow(diaryDaysStr[i+1].score, Math.sqrt(diaryDaysStr[i+1].importance));
      }
      else {
        flowScore *= Math.pow(diaryDaysStr[i].score, Math.sqrt(diaryDaysStr[i].importance));
      }
      flowScore *= Math.pow(Math.pow(flowScores[i-3].flowScore * flowScores[i-2].flowScore * flowScores[i-1].flowScore, 0.3333), Math.sqrt(Math.sqrt((diaryDaysStr[i-3].importance + diaryDaysStr[i-2].importance + diaryDaysStr[i-1].importance)/3)));

      flowScore = Math.pow(flowScore, (1 / (Math.sqrt(diaryDaysStr[i-1].importance) + Math.sqrt(diaryDaysStr[i].importance) + ((i+1) < diaryDaysStr.length ? Math.sqrt(diaryDaysStr[i+1].importance) : Math.sqrt(diaryDaysStr[i].importance))  + Math.sqrt(Math.sqrt((diaryDaysStr[i-3].importance + diaryDaysStr[i-2].importance + diaryDaysStr[i-1].importance)/3)))));
    }
    flowScores.push({
      day: diaryDaysStr[i].day,
      month: diaryDaysStr[i].month,
      year: diaryDaysStr[i].year,
      flowScore: flowScore,
    })
  }

  
  let newMonthScores = [...diaryMonths];
  let currentMonth = 0;
  let lastMonthLength = 0;
  let score = 1;

  for (let i = 0 ; i < flowScores.length ; ++i) {
    let newCurrentMonth = flowScores[i].month + flowScores[i].year * 100;
    if (newCurrentMonth != currentMonth || i == flowScores.length - 1) {
      if (lastMonthLength >= 22) {
        newMonthScores.push({
          id: newMonthScores[newMonthScores.length - 1].id + 1,
          year: Math.floor(currentMonth / 100),
          month: currentMonth % 100,
          baseScore: Math.pow(Math.pow(score, 1 / lastMonthLength), 2),
        })
      }
      currentMonth = newCurrentMonth;
      lastMonthLength = 0;
      score = 1;
    }
    score = score * flowScores[i].flowScore;
    lastMonthLength += 1;
  }
  
  const {newDiaryMonths, avg} = diaryMontsInit(newMonthScores);
  
  let lastYear = diaryDays[0]?.year ?? 2016;
  let lastMonth = diaryDays[0]?.month ?? 12;
  let lastDay = diaryDays[0]?.day ?? 1;

  if (lastMonth < 10) {
    lastMonth = "0"+lastMonth;
  }
  if (lastDay < 10) {
    lastDay = "0"+lastDay;
  }

  let nextDate = addDays(new Date(`${lastYear}-${lastMonth}-${lastDay}`), 1);


  return (
    <Routes>
      <Route path="/" element= { <MainPage />} />
      <Route path="/diary" element= { <DiaryPage page={1} maxPage={pages} diaryData={diaryData[0] ?? []} nextDate={nextDate} />} />
      <Route path="/diary/days" element= { <DiaryPage page={1} maxPage={pages} diaryData={diaryData[0] ?? []} nextDate={nextDate}/>} />
      {pageStarts.map((_page, index) => <Route path={`/diary/days/${index+1}`} element= { <DiaryPage page={index+1} maxPage={pages} diaryData={diaryData[index] ?? []} nextDate={nextDate}/>}  key={index} />)}
      <Route path="/diary/months" element= { <DiaryMonthsPage newDiaryMonths={newDiaryMonths} avg={avg} />} />
      {unityGames.map((game, index) => <Route path={`/unity_games/${game.id}`} element= { <UnityGamePage game={game} />}  key={index} />)}
      {games.map((game, index) => <Route path={`/games/${game.id}`} element= { <GamePage game={game} />}  key={index} />)}
      {newDiaryMonths.map((mData:any, index:number) => <Route path={`/diary/month/${mData.year}/${mData.month}`} element= { <DiaryMonthPage mData={mData} />}  key={index} />)}
    </Routes>
  );
}

export default App;
