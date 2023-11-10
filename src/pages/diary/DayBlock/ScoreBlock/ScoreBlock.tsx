
import './ScoreBlock.css';

function ScoreBlock({score}: any) {

    let perc = 100;
    if (score >= 20) perc = 100 + (score-20)*10;
    if (score < 20) perc = 90 + (score-18)/20*100;
    if (score < 18) perc = 80 + (score-16)/20*100;
    if (score < 16) perc = 70 + (score-12)/40*100;
    if (score < 12) perc = 60 + (score-9)/30*100;
    if (score < 9) perc = 50 + (score-8)/10*100;
    if (score < 8) perc = score/16*100;

    perc = Math.round(perc*10)/10;

    let [green, red, blue] : any[] = [200, 200, 0];

    if (perc > 50) {
        green = 200;
        red = Math.round(200 * ((100 - perc)/50));
    }
    else {
        red = 200;
        green = Math.round(200 * (perc/50));
    }

    if (perc > 100) {
        red = 0;
        green = 200;
        blue = Math.round(200 * ((perc - 100)/50));
    }

    const colorOfBar = `rgba(${red},${green},${blue},1)`;

    return (
          <div className='scoreBlock'>
            <h2 className="diaryText"  style={{marginBottom: "-15px"}}>
              <div className='scoreBar' style={{width: `${Math.min(100, perc)}%`, height: "25px",
                backgroundColor: `${colorOfBar}`, marginTop: "10px", borderRadius: "10px"}}>
              </div>
            </h2>
            <h1 style={{ position: "relative", bottom: "10px",
                left: "auto", right:"auto", textAlign:"center"}}>
                <span>Оценка: </span>
                <span><b>{Math.round(score*10)/10}</b></span>
                <span> / 25 ({perc}%)</span></h1>
          </div>
    );
  }
  
  export default ScoreBlock;