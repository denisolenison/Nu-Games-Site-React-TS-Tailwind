
import Header from '../../header/Header';
import DiaryFooter from '../DiaryFooter/DiaryFooter';
import './DiaryMonthsPage.css';
import DiaryMonthsTable from './DiaryMonthsTable/DiaryMonthsTable';

function DiaryMonthsPage() {
    document.body.style.backgroundImage = "url('./bg.jpg')";

    return (
      <>
      <div className='diaryMonthsPage'>
      <Header></Header>
      <DiaryMonthsTable/>

      </div>
      <DiaryFooter></DiaryFooter>
      </>
    );
  }
  
  export default DiaryMonthsPage;