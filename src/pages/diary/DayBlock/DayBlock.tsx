import AtmosphereBlock from './AtmosphereBlock/AtmosphereBlock';
import './DayBlock.css';
import InconsistencyBlock from './InconsistencyBlock/InconsistencyBlock';
import ScoreBlock from './ScoreBlock/ScoreBlock';
import { format, getDay } from 'date-fns'
import { ru, enCA } from 'date-fns/locale';
import { lZero, monthTypeToColor } from '../../../helpers/baseHelpers';

function DayBlock({ dayData, textData}: any) {

    let lang = localStorage.getItem("lang") ?? "en";

    const date = new Date(`${dayData.year}-${lZero(dayData.month)}-${lZero(dayData.day)}`)

    let newDate = format(date, 'd MMMM yyyy', {locale: ru});

    if (lang == "en") {
      newDate = format(date, 'MMMM d, yyyy', {locale: enCA});
    }

    const weekDay = getDay(new Date(`${dayData.year}-${lZero(dayData.month)}-01`));

    let bgColor = monthTypeToColor(weekDay);

    const impSqrt = Math.round(Math.sqrt(dayData.importance) * 10)/10

    return (
        <div className='dayBlock' style={{backgroundColor: bgColor}}>
          <h1 className='dateText'>{newDate}</h1>
          <ScoreBlock score={dayData.score} lang={lang}/>
          <h1 style={{ left: "auto", right:"auto", textAlign:"center"}}>{lang == "ru" ? "Важность:" : "Importance: "} <span className="font-bold">{impSqrt}</span></h1>
          <InconsistencyBlock lang={lang} inc_min={dayData.inconsistency_min} inc_max={dayData.inconsistency_max} />
          <AtmosphereBlock lang={lang} atmosphere={dayData.atmosphere} />
          <h2 className="diaryText">
            <div className="p-3 mt-3 diaryText">{textData.fullText}</div></h2>
        </div>
    );
  }
  
  export default DayBlock;