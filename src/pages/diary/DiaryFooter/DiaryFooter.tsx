
import { Link } from 'react-router-dom';
import './DiaryFooter.css';
import DiaryFooterButton from './DiaryFooterButton/DiaryFooterButton';

function DiaryFooter() {

    return (
      <div className='diaryFooter'>
        <DiaryFooterButton link='/diary/days' name='Days' />
        <DiaryFooterButton link='/diary/months' name='Months' />
        <DiaryFooterButton link='/diary/graphs' name='Graphs' />
      </div>
    );
  }
  
  export default DiaryFooter;