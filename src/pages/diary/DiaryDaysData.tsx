
import { daysEqual, getDateId, getMonthName, getMonthName2 } from '../../helpers/baseHelpers';
import DayBlock from './DayBlock/DayBlock';
import './DiaryPage.css';


function DiaryDaysData({diaryData}: any) {
    return (
      <>
        {diaryData.map((diaryDay: any, index: any) => <DayBlock diaryDay={diaryDay} key={index} />)}
      </>
    );
  }
  
  export default DiaryDaysData;