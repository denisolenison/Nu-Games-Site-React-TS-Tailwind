
import { useEffect } from 'react';
import './PaginationPanel.css';
import { Link } from 'react-router-dom';

function PaginationPanel({page, maxPage, type}: any) {

    let currentType = localStorage.getItem("currentType") ?? 'top';

    const moveTop = () => {
        currentType = 'top';
        localStorage.setItem("currentType", currentType);
    }

    const moveBottom = () => {
        currentType = 'bottom';
        localStorage.setItem("currentType", currentType);
    }
    
    useEffect(() => {
        currentType = localStorage.getItem("currentType") ?? 'top';
    }, [page, currentType]);

    let moveFunc;

    if (type == 'top') {
        moveFunc = moveTop;
    }
    else {
        moveFunc = moveBottom;
    }
    
    return (
        <div className='pagination'>
          {page - 3 >= 1 ? <Link to={`/diary/days/1`} onClick={moveFunc} className='pageBtnSide'>{1}</Link> : <></>}
          {page - 2 >= 1 ? <Link to={`/diary/days/${page - 2}`} onClick={moveFunc} className='pageBtnPrev2'>{page - 2}</Link> : <></>}
          {page - 1 >= 1 ? <Link to={`/diary/days/${page - 1}`} onClick={moveFunc} className='pageBtnPrev'>{page - 1}</Link> : <></>}
          {<span className='pageBtnCur'>{page}</span>}
          {page + 1 <= maxPage ? <Link to={`/diary/days/${page + 1}`} onClick={moveFunc} className='pageBtnPrev'>{page + 1}</Link> : <></>}
          {page + 2 <= maxPage ? <Link to={`/diary/days/${page + 2}`} onClick={moveFunc} className='pageBtnPrev2'>{page + 2}</Link> : <></>}
          {page + 3 <= maxPage ? <Link to={`/diary/days/${maxPage}`} onClick={moveFunc} className='pageBtnSide'>{maxPage}</Link> : <></>}
        </div>
    );
  }
  
  export default PaginationPanel;