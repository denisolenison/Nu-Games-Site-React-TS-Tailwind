
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    return (
        <div id="logos">
        <span><img className="siteicon" src="logo2.png" alt="Nu Games"></img></span>
        <span className="company">Nu Games</span>
        <Link to="../" style={{marginRight: "40px", marginLeft: "auto"}}><button className="gamesGo">
          <b>Games</b>
        </button></Link>
        <Link to='/diary/' style={{marginRight: "40px"}}><button className="diaryGo">
          <b>Dev's Diary</b>
        </button></Link>
      </div>
    );
  }
  
  export default Header;