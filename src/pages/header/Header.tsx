
import './Header.css';

function Header() {

    return (
        <div id="logos">
        <span><img className="siteicon" src="logo2.png" alt="Nu Games"></img></span>
        <span className="company">Nu Games</span>
        <a href="../index.html" style={{marginRight: "40px", marginLeft: "auto"}}><button className="gamesGo">
          <b>Games</b>
        </button></a>
        <a href='/diary' style={{marginRight: "40px"}}><button className="diaryGo">
          <b>Dev's Diary</b>
        </button></a>
      </div>
    );
  }
  
  export default Header;