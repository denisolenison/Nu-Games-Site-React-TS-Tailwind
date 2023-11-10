import AtmosphereBlock from './AtmosphereBlock/AtmosphereBlock';
import './DayBlock.css';
import InconsistencyBlock from './InconsistencyBlock/InconsistencyBlock';
import ScoreBlock from './ScoreBlock/ScoreBlock';
import { format, getDay, getMonth, getYear } from 'date-fns'
import { ru } from 'date-fns/locale';
import { lZero, monthTypeToColor } from '../../../helpers/baseHelpers';

function DayBlock({dayData, textData}: any) {

    const date = new Date(`${dayData.year}-${lZero(dayData.month)}-${lZero(dayData.day)}`)

    let newDate = format(date, 'd MMMM yyyy', {locale: ru});

    const weekDay = getDay(new Date(`${dayData.year}-${dayData.month}-01`));

    let bgColor = monthTypeToColor(weekDay);

    const impSqrt = Math.round(Math.sqrt(dayData.importance) * 10)/10

    return (
        <div className='dayBlock' style={{backgroundColor: bgColor}}>
          <h1 className='dateText'>{newDate}</h1>
          <ScoreBlock score={dayData.score}/>
          <h1 style={{ left: "auto", right:"auto", textAlign:"center"}}>Важность: <span className="font-bold">{impSqrt}</span></h1>
          <InconsistencyBlock inc_min={dayData.inconsistency_min} inc_max={dayData.inconsistency_max} />
          <AtmosphereBlock atmosphere={dayData.atmosphere} />
          <h2 className="diaryText">
            <div className="p-3 mt-3">{textData.fullText}</div></h2>
        </div>
    );
  }
  
  export default DayBlock;