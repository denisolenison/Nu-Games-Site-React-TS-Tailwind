
import { Link } from 'react-router-dom';
import './DiaryFooter.css';

function DiaryFooter() {

    return (
      <div className='diaryFooter'>
        <Link to='/diary/days'><button className="diaryTypeButton">
          <b>Days</b>
        </button></Link>
        <Link to='/diary/months'><button className="diaryTypeButton">
          <b>Months</b>
        </button></Link>
      </div>
    );
  }
  
  export default DiaryFooter;