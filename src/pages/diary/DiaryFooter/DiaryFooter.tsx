
import './DiaryFooter.css';

function DiaryFooter() {

    return (
      <div className='diaryFooter'>
        <a href='/diary/days'><button className="diaryTypeButton">
          <b>Days</b>
        </button></a>
        <a href='/diary/months'><button className="diaryTypeButton">
          <b>Months</b>
        </button></a>
      </div>
    );
  }
  
  export default DiaryFooter;