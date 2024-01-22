
import { useEffect } from 'react';
import Header from '../../header/Header';
import DiaryFooter from '../DiaryFooter/DiaryFooter';
import './DiaryGraphsPage.css';
import { graphInit } from './Graph1';

interface DiaryGraphsPageProps {
  newDiaryMonths: any,
  avg: number,
}

function DiaryGraphsPage({newDiaryMonths, avg}: DiaryGraphsPageProps) {
  document.body.style.backgroundImage = "url('bg_diary.jpg')";
  useEffect(() => {
    graphInit('diaryGraph1', newDiaryMonths);
  });
    return (
      <>
      <div className='diaryGraphsPage'>
      <Header></Header>
      <div id='diaryGraph1'></div>

      </div>
      <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryGraphsPage;