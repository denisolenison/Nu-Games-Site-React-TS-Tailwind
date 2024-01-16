
import { useEffect, useRef } from 'react';
import { getDateId } from '../../helpers/baseHelpers';
import Header from '../header/Header';
//import { diaryDays, diaryDayTexts, diaryDayTextsRu, language } from './diary.mocks';
import DiaryFooter from './DiaryFooter/DiaryFooter';
import './DiaryPage.css';
import AddDayPanel from './AddDayPanel';
import { isAdmin } from '../../mocks/diary.mocks';
import DiaryDaysData from './DiaryDaysData';
import PaginationPanel from './PaginationPanel';

function DiaryPage({page, maxPage, diaryData, nextDate}: any) {
    document.body.style.backgroundImage = "url('bg_diary.jpg')";
    
    const bottomRef: any = useRef(null);
    const topRef: any = useRef(null);

    let currentType = localStorage.getItem("currentType") ?? 'top';

    diaryData.sort((day1: any, day2: any) => getDateId(day2) - getDateId(day1));
    
    useEffect(() => {
      if (currentType == 'bottom') {
        bottomRef.current?.scrollIntoView();
      }
    }, [page]);

    return (
      <>
      <div className='diaryPage'>
        <Header ></Header>
        {isAdmin ? <AddDayPanel nextDate={nextDate}></AddDayPanel> : <></>}
        <div ref={topRef} />
        <button className='moveBtn' onClick={() => bottomRef.current?.scrollIntoView({behavior: "smooth"})}>Move to Bottom</button>
        <PaginationPanel page={page} maxPage={maxPage} type={'top'} />
        <DiaryDaysData diaryData={diaryData} />
        <PaginationPanel page={page} maxPage={maxPage} type={'bottom'} />
        <button className='moveBtn' onClick={() => topRef.current?.scrollIntoView({behavior: "smooth"})}>Move to Top</button>
        <div ref={bottomRef} />
      </div>
      <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryPage;