
import './ScoreBlockMonth.css';

function ScoreBlockMonth({score, pc}: any) {


    let [green, red, blue] : any[] = [200, 200, 0];
    
    let lang = localStorage.getItem("lang") ?? "en";

    if (pc > 50) {
        green = 200;
        red = Math.round(200 * ((100 - pc)/50));
    }
    else {
        red = 200;
        green = Math.round(200 * (pc/50));
    }

    if (pc > 100) {
        red = 0;
        green = 200;
        blue = Math.round(200 * ((pc - 100)/50));
    }

    const colorOfBar = `rgba(${red},${green},${blue},1)`;

    return (
          <div className='scoreBlock mt-5'>
            <h2 className="diaryText"  style={{marginBottom: "-15px"}}>
              <div className='scoreBar' style={{width: `${Math.min(100, pc)}%`, height: "35px",
                backgroundColor: `${colorOfBar}`, marginTop: "10px", borderRadius: "10px"}}>
              </div>
            </h2>
            <h1 style={{ position: "relative", bottom: "17px",
                left: "auto", right:"auto", textAlign:"center"}}>
                <span className="scoreTxt">{lang == "ru" ? "Оценка: " : "Score: "}</span>
                <span className="scoreTxt"><b>{Math.round(score*10)/10}</b></span>
                <span className="scoreTxt"> ({Math.round(pc)}%)</span></h1>
          </div>
    );
  }
  
  export default ScoreBlockMonth;