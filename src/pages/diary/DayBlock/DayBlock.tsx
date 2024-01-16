import AtmosphereBlock from './AtmosphereBlock/AtmosphereBlock';
import './DayBlock.css';
import InconsistencyBlock from './InconsistencyBlock/InconsistencyBlock';
import ScoreBlock from './ScoreBlock/ScoreBlock';
import { format, getDay } from 'date-fns'
import { ru, enCA } from 'date-fns/locale';
import { lZero, monthTypeToColor } from '../../../helpers/baseHelpers';

function DayBlock({ diaryDay }: any) {

    let lang = localStorage.getItem("lang") ?? "en";

    const date = new Date(`${diaryDay.year}-${lZero(diaryDay.month)}-${lZero(diaryDay.day)}`)

    let newDate = format(date, 'd MMMM yyyy', {locale: ru});

    if (lang == "en") {
      newDate = format(date, 'MMMM d, yyyy', {locale: enCA});
    }

    const weekDay = getDay(new Date(`${diaryDay.year}-${lZero(diaryDay.month)}-01`));

    let bgColor = monthTypeToColor(weekDay);

    const impSqrt = Math.round(Math.sqrt(diaryDay.importance) * 10)/10

    return (
        <div className='dayBlock' style={{backgroundColor: bgColor}}>
          <h1 className='dateText'>{newDate}</h1>
          <ScoreBlock score={diaryDay.score} lang={lang}/>
          <h1 style={{ left: "auto", right:"auto", textAlign:"center"}}>{lang == "ru" ? "Важность:" : "Importance: "} <span className="font-bold">{impSqrt}</span></h1>
          <InconsistencyBlock lang={lang} inc_min={diaryDay.inconsistency_min} inc_max={diaryDay.inconsistency_max} />
          <AtmosphereBlock lang={lang} atmosphere={diaryDay.atmosphere} />
          <h2 className="diaryText">
            <div className="p-3 mt-3 diaryText">{diaryDay.fullText}</div></h2>
        </div>
    );
  }
  
  export default DayBlock;