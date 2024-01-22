import { addMonths, format, getDay, getMonth, getYear } from "date-fns";
import { getMonthName, getWeekdayName, getWeekdayNameNext, lZero, monthTypeToColor } from "../../../../helpers/baseHelpers";
import { diaryMonthsTexts } from "../../../../mocks/diary.mocks";
import ScoreBlockMonth from "./ScoreBlockMonth/ScoreBlockMonth";

import './DiaryMonthPage.css';
import Header from "../../../header/Header";
import { Link } from "react-router-dom";
import DiaryFooter from "../../DiaryFooter/DiaryFooter";

function DiaryMonthPage({mData}:any) {

    document.body.style.backgroundImage = "url('bg_diary.jpg')";
    let lang = localStorage.getItem("lang") ?? "en";

    const monthDate = new Date(`${mData.year}-${lZero(mData.month)}-01`);
    const weekDay = getDay(monthDate);
    const weekDayNext = getDay(addMonths(monthDate, 1));


    let bgColor = monthTypeToColor(weekDay);
    const monthName = format(monthDate, `${lang == "ru" ? getMonthName(monthDate, lang) : 'MMMM'} yyyy`);
    const monthScore = mData.score;
    const monthText = diaryMonthsTexts.find((md:any) => md.year === mData.year && md.month === mData.month);
    const monthTypeName = getWeekdayName(weekDay, lang);
    const monthTypeNameNext = getWeekdayNameNext(weekDayNext, lang);
    
    const monthDatePrev = addMonths(monthDate, -1);
    const monthDateNext = addMonths(monthDate, 1);
    const [prevMonthMonth, prevMonthYear] = [getMonth(monthDatePrev)+1, getYear(monthDatePrev)];
    const [nextMonthMonth, nextMonthYear] = [getMonth(monthDateNext)+1, getYear(monthDateNext)];

    const hasPrevMonthText = diaryMonthsTexts.find((md:any) => md.year === prevMonthYear && md.month === prevMonthMonth) ? true : false;
    const hasNextMonthText = diaryMonthsTexts.find((md:any) => md.year === nextMonthYear && md.month === nextMonthMonth) ? true : false;


    return (
      <>
        <Header></Header>
        <div className='monthBlock' style={{backgroundColor: bgColor}}>
          <div className='monthNameBlock'>
            {hasPrevMonthText && <Link to={`/diary/month/${prevMonthYear}/${prevMonthMonth}`}><div className="moveBtnLeft">{`<-`}</div></Link>}
            <div className='dateText'>{monthName}</div>
            {hasNextMonthText && <Link to={`/diary/month/${nextMonthYear}/${nextMonthMonth}`}><div className="moveBtnRight">{`->`}</div></Link>}
          </div>
          <ScoreBlockMonth score={monthScore} pc={mData.pc*100} />
          <h2 className="diaryMonthType">
            <div className="p-3 mt-3">{lang == "ru" ? `Тип месяца: ${monthTypeName}, перед ${monthTypeNameNext}` : `Month type: ${monthTypeName}, before ${monthTypeNameNext}`}</div></h2>
          <h2 className="diaryTextMonth">
            <div className="pt-5 pl-10 pr-10 pb-5 mt-5">{lang == "ru" ? monthText?.text_rus: monthText?.text_en}</div></h2>
            <iframe className="p-5 mt-5 musicVideo" width="720" height="480" src={lang == "ru" ? monthText?.song_rus : monthText?.song_en} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryMonthPage;