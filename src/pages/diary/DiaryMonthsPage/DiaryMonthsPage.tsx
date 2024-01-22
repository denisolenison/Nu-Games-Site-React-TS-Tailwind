
import Header from '../../header/Header';
import DiaryFooter from '../DiaryFooter/DiaryFooter';
import './DiaryMonthsPage.css';
import DiaryMonthsTable from './DiaryMonthsTable/DiaryMonthsTable';

interface DiaryMonthsPageProps {
  newDiaryMonths: any,
  avg: number,
}

function DiaryMonthsPage({newDiaryMonths, avg}: DiaryMonthsPageProps) {
  document.body.style.backgroundImage = "url('bg_diary.jpg')";

    return (
      <>
      <div className='diaryMonthsPage'>
      <Header></Header>
      <DiaryMonthsTable newDiaryMonths={newDiaryMonths} avg={avg}/>

      </div>
      <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryMonthsPage;