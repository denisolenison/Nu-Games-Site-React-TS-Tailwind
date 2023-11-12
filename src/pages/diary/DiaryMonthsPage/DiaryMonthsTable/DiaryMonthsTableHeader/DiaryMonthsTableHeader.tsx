
import '../DiaryMonthsTable.css';
import './DiaryMonthsTableHeader.css';

function DiaryMonthsTable() {

    return (
        <div className='diaryMonthsHeader'>
          <div className='diaryMonthsHeaderTr'>
            <div className='diaryMonthsColumn1'>#</div>
            <div className='diaryMonthsColumn2'>Month</div>
            <div className='diaryMonthsColumn3'>Score</div>
            <div className='diaryMonthsColumn4'>Place (year)</div>
            <div className='diaryMonthsColumn5'>Type</div>
            <div className='diaryMonthsColumn6'>%</div>
            <div className='diaryMonthsColumn7'>Overall</div>
            <div className='diaryMonthsColumn8'>Grade</div>
            <div className='diaryMonthsColumn9'>Place</div>
          </div>
        </div>
    );
  }
  
  export default DiaryMonthsTable;