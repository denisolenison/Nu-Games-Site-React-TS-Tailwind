import { addMonths, format, getDay, getMonth, getYear } from "date-fns";
import { getMonthName, getWeekdayName, getWeekdayNameNext, lZero, monthTypeToColor } from "../../../../helpers/baseHelpers";
import { diaryMonthsTexts } from "../../diary.mocks";
import ScoreBlockMonth from "./ScoreBlockMonth/ScoreBlockMonth";

import './DiaryMonthPage.css';
import Header from "../../../header/Header";
import { Link } from "react-router-dom";

function DiaryMonthPage({mData}:any) {

    document.body.style.backgroundImage = "url('bg_diary.jpg')";

    const monthDate = new Date(`${mData.year}-${lZero(mData.month)}-01`);
    const weekDay = getDay(monthDate);
    const weekDayNext = getDay(addMonths(monthDate, 1));

    console.log(mData.year);
    console.log(mData.month);

    let bgColor = monthTypeToColor(weekDay);
    const monthName = format(monthDate, `${getMonthName(monthDate)} yyyy`);
    console.log(mData);
    const monthScore = mData.score;
    console.log(monthScore);
    const monthText = diaryMonthsTexts.find((md:any) => md.year === mData.year && md.month === mData.month);
    const monthTypeName = getWeekdayName(weekDay);
    const monthTypeNameNext = getWeekdayNameNext(weekDayNext);
    
    const monthDatePrev = addMonths(monthDate, -1);
    const monthDateNext = addMonths(monthDate, 1);
    const [prevMonthMonth, prevMonthYear] = [getMonth(monthDatePrev)+1, getYear(monthDatePrev)];
    const [nextMonthMonth, nextMonthYear] = [getMonth(monthDateNext)+1, getYear(monthDateNext)];

    const hasPrevMonthText = diaryMonthsTexts.find((md:any) => md.year === prevMonthYear && md.month === prevMonthMonth) ? true : false;
    const hasNextMonthText = diaryMonthsTexts.find((md:any) => md.year === nextMonthYear && md.month === nextMonthMonth) ? true : false;
    
    console.log(hasPrevMonthText);
    console.log(hasNextMonthText);


    return (
      <>
        <Header></Header>
        <div className='monthBlock' style={{backgroundColor: bgColor}}>
          <div className='monthNameBlock'>
            {hasPrevMonthText && <div className="moveBtnLeft"><Link to={`/diary/month/${prevMonthYear}/${prevMonthMonth}`}>{`<-`}</Link></div>}
            <div className='dateText'>{monthName}</div>
            {hasNextMonthText && <div className="moveBtnRight"><Link to={`/diary/month/${nextMonthYear}/${nextMonthMonth}`}>{`->`}</Link></div>}
          </div>
          <ScoreBlockMonth score={monthScore} pc={mData.pc*100} />
          <h2 className="diaryMonthType">
            <div className="p-3 mt-3">{`Тип месяца: ${monthTypeName}, перед ${monthTypeNameNext}`}</div></h2>
          <h2 className="diaryText">
            <div className="pt-5 pl-10 pr-10 pb-5 mt-5">{monthText?.text_rus}</div></h2>
            <iframe className="p-5 mt-5 musicVideo" width="720" height="480" src={monthText?.song_rus} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </>
    );
  }
  
  export default DiaryMonthPage;