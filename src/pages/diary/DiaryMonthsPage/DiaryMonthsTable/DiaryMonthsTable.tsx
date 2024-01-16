
import { getMonthId } from '../../../../helpers/baseHelpers';
import { diaryMonths, diaryMonthsTexts } from '../../../../mocks/diary.mocks';
import './DiaryMonthsTable.css';
import DiaryMonthsTableHeader from './DiaryMonthsTableHeader/DiaryMonthsTableHeader';
import DiaryMonthsTableRow from './DiaryMonthsTableRow/DiaryMonthsTableRow';


function DiaryMonthsTable({newDiaryMonths, avg}:any) {

    return (
        <div className='diaryMonthsTable w-full relative'>
          <DiaryMonthsTableHeader/>
          <div>
            {newDiaryMonths.map((ndm: any, index:number) => <DiaryMonthsTableRow month={ndm} index={index+1} 
            average={avg} total={newDiaryMonths.length} key={getMonthId(ndm)} monthText={diaryMonthsTexts.find((mdata) =>
              mdata.year === ndm.year && mdata.month === ndm.month) ?? 'no'} />)}
          </div>
        </div>
    );
  }
  
  export default DiaryMonthsTable;