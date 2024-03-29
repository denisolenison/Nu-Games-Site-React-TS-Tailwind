
import { format, getDay } from 'date-fns';
import { getMonthName, getWeekdayName, lZero, monthTypeToColor, overallToColor, overallToEmoji, pcToColor, pcToRank, pcToRankColor, placeToColor } from '../../../../../helpers/baseHelpers';
import '../DiaryMonthsTable.css';
import './DiaryMonthsTableRow.css';
import { Link } from 'react-router-dom';

function DiaryMonthsTableRow({month, index, average, total, monthText}: any) {


  let lang = localStorage.getItem("lang") ?? "en";


  const needToBorderBottom = month.month === 12 ? "5px black solid" : "2px grey solid";

  const dateFirst = new Date(`${month.year}-${lZero(month.month)}-01`)

  const monthName = format(dateFirst, `${lang == "ru" ? getMonthName(dateFirst, lang) : 'MMMM'} yyyy`);
  const weekDay = getDay(dateFirst);

  const typeColor = monthTypeToColor(weekDay);
  let scoreText: (number | string) = Math.round(month.score*100)/100;

  if (scoreText % 1 === 0) {
    scoreText = scoreText + ".00";
  }
  else if ((scoreText*10) % 1 === 0) {
    scoreText = scoreText + "0";
  }

  let overall = 0;
  if (month.pc < 0.2) {
    overall = -3;
  }
  else if (month.pc < 0.35) {
    overall = -2;
  }
  else if (month.pc < 0.5) {
    overall = -1;
  }
  else if (month.pc < 0.6) {
    overall = 0;
  }
  else if (month.pc < 0.75) {
    overall = 1;
  }
  else if (month.pc < 0.875) {
    overall = 2;
  }
  else {
    overall = 3;
  }

  const pcShort = Math.round(month.pc * 100) + "%";

  return (
        <div className='diaryMonthsRow' style={{backgroundColor: typeColor, borderBottom: needToBorderBottom}}>
          <div className='diaryMonthsColumn1'>{index}</div>
          {
          (monthText === 'no') ?
          <div className='diaryMonthsColumn2'><p className={`${month.placeTotal == total ? 'worst' : ''}${month.placeTotal == 1 ? 'best' : ''}`}>
            {monthName + (month.hasDeath ? ' 💀' : '')}
            </p></div>
          : <Link to={`/diary/month/${monthText.year}/${monthText.month}`} className='diaryMonthsColumn2'>
            <p className={`${month.placeTotal == total ? 'worst' : ''}${month.placeTotal == 1 ? 'best' : ''}`}>{monthName + (month.hasDeath ? ' 💀' : '')}</p>
            </Link>
          }
          <div className='diaryMonthsColumn3'>
            <div className='monthScoreBar' style={{width: month.percent}}></div>
            <div><p className={`monthScore ${month.placeTotal == total ? 'worst' : ''}${month.placeTotal == 1 ? 'best' : ''}`}>{scoreText}</p></div>
          </div>
          <div className='diaryMonthsColumn4'>{month.place}</div>
          <div className='diaryMonthsColumn5'>{getWeekdayName(weekDay, lang)}</div>
          <div className='diaryMonthsColumn6' style={{backgroundColor: pcToColor(month.pc)}}>{pcShort}</div>
          <div className='diaryMonthsColumn7' style={{backgroundColor: overallToColor(overall)}}>{overallToEmoji(overall)}</div>
          <div className='diaryMonthsColumn8' style={{backgroundColor: pcToRankColor(month.pc)}}>{pcToRank(month.pc)}</div>
          <div className={`diaryMonthsColumn9 ${month.placeTotal <= 3 ? 'shining' : ''}`} style={{backgroundColor: placeToColor(month.placeTotal, total)}}>{month.placeTotal}</div>
        </div>
    );
  }
  
  export default DiaryMonthsTableRow;