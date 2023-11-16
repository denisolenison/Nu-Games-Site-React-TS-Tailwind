export const diaryMontsInit = (diaryMonths: any) => {
    const newDiaryMonths = diaryMonths.map((dMonth: any) => {
        let realScore = dMonth.baseScore;
        if (dMonth.baseScore < 40) {
          realScore = dMonth.baseScore;
        }
        else if (dMonth.baseScore < 85) {
          realScore = (dMonth.baseScore + 3.33)/43.33*40;
        }
        else if (dMonth.baseScore < 100) {
          realScore = 81.54 + (dMonth.baseScore / (dMonth.baseScore+200) - 0.29824)*350;
        }
        else {
          realScore = 93.82 + (dMonth.baseScore - 100)/2.25;
        }
        let percent = 1;
        if (realScore > 100) {
          percent = (realScore - 90.5)/(realScore-90);
        }
        else if (realScore > 95) {
          percent = 0.9 + (realScore - 95)/100;
        }
        else if (realScore > 88) {
          percent = 0.8 + (realScore - 88)/70;
        }
        else if (realScore > 82) {
          percent = 0.7 + (realScore - 82)/60;
        }
        else if (realScore > 76) {
          percent = 0.6 + (realScore - 76)/60;
        }
        else if (realScore > 70) {
          percent = 0.5 + (realScore - 70)/60;
        }
        else if (realScore > 64) {
          percent = 0.4 + (realScore - 64)/60;
        }
        else if (realScore > 56) {
          percent = 0.3 + (realScore - 56)/80;
        }
        else if (realScore > 45) {
          percent = 0.2 + (realScore - 45)/110;
        }
        else if (realScore > 30) {
          percent = 0.1 + (realScore - 30)/150;
        }
        else {
          percent = 0.1 * Math.pow(realScore/30, 2.75);
        }
  
        const percText = Math.round(percent*1000)/10 + "%";
  
        return {
          id: dMonth.id,
          year: dMonth.year,
          month: dMonth.month,
          score: realScore,
          pc: percent,
          percent: percText,
          place: 4,
          placeTotal: 0,
        }
    })
  
    let avg = 0;
    let count = Math.max(newDiaryMonths.length, 1);
  
    for (let i = 0 ; i < newDiaryMonths.length ; ++i) {
      avg += newDiaryMonths[i].score;
    }
    avg = avg / count;
  
    const minYear = 2014;
    const maxYear = newDiaryMonths[newDiaryMonths.length - 1].year;
  
    for (let year = minYear; year <= maxYear ; ++year) {
      let yearlyData = newDiaryMonths.filter((month: any) => month.year === year);
      yearlyData.sort((a:any, b:any) => b.score - a.score);
      for (let m = 0 ; m < yearlyData.length ; ++m) {
        let res = newDiaryMonths.find((month2:any) => (month2.year === year && month2.month === yearlyData[m].month));
        if (res) res.place = m+1;
      }
    }
  
    let allData = [...newDiaryMonths];
    allData.sort((a, b) => b.score - a.score);
    for (let m = 0 ; m < allData.length ; ++m) {
      let res = newDiaryMonths.find((month2:any) => (month2.year === allData[m].year && month2.month === allData[m].month));
      if (res) res.placeTotal = m+1;
    }

    return {newDiaryMonths, avg}
}