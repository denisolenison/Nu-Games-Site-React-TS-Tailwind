
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    
    
    let lang = localStorage.getItem("lang") ?? "en";

    return (
        <div id="logos">
        <span><img className="siteicon" src="logo2.png" alt="Nu Games"></img></span>
        <span className="company">Nu Games</span>
        <button style={{marginRight: "20px", marginLeft: "auto"}} type = 'submit' onClick = {() => {
          lang = (lang == "en" ? "ru" : "en");
          localStorage.setItem("lang", lang);
          window.location.reload();
          }}>{lang == "en" ? "Change Language" : "Сменить язык"}</button>
        <Link to="../" style={{marginRight: "40px", marginLeft: "auto"}}><button className="gamesGo">
          <b>{lang == "en" ? "Games" : "Игры"}</b>
        </button></Link>
        <Link to='/diary/' style={{marginRight: "40px"}}><button className="diaryGo">
          <b>{lang == "en" ? "Dev's Diary" : "Дневник"}</b>
        </button></Link>
      </div>
    );
  }
  
  export default Header;