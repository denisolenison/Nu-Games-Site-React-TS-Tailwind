
import { Link } from 'react-router-dom';
import './DiaryFooterButton.css';

interface DiaryFooterButtonProps {
    link?: string,
    name?: string,
}

function DiaryFooterButton({link, name}: DiaryFooterButtonProps) {

    const link_ = link ?? './';
    const name_ = name ?? '[]';

    return (
        <Link to={link_}>
            <button className="diaryTypeButton">
                <b>{name_}</b>
            </button>
        </Link>
    );
  }
  
  export default DiaryFooterButton;