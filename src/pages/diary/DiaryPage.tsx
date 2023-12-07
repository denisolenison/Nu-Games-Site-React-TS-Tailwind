
import { daysEqual, getDateId } from '../../helpers/baseHelpers';
import Header from '../header/Header';
import DayBlock from './DayBlock/DayBlock';
import { diaryDays, diaryDayTexts, diaryDayTextsRu, language } from './diary.mocks';
import DiaryFooter from './DiaryFooter/DiaryFooter';
import './DiaryPage.css';

function DiaryPage() {
    document.body.style.backgroundImage = "url('bg_diary.jpg')";

    let lang = localStorage.getItem("lang") ?? "en";

    diaryDays.sort((day1, day2) => getDateId(day2) - getDateId(day1));

    let dayData = diaryDayTexts;

    if (lang == "ru") {
      dayData = diaryDayTextsRu;
    }


    return (
      <>
      <div className='diaryPage'>
      <Header ></Header>
        {diaryDays.map(diaryDay => <DayBlock dayData={diaryDay} textData={dayData.find((dday: any) => daysEqual(dday, diaryDay))} key={getDateId(diaryDay)} />)}
      </div>
      <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryPage;