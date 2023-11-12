export const monthTypeToColor = (num: Number) => {
    if (num === 1) return 'rgb(237, 188, 146)';
    if (num === 2) return 'rgb(245, 191, 222)';
    if (num === 3) return 'rgb(213, 213, 213)';
    if (num === 4) return 'rgb(240, 232, 158)';
    if (num === 5) return 'rgb(172, 242, 155)';
    if (num === 6) return 'rgb(167, 210, 242)';
    return 'rgb(207, 193, 230)';
}

export const daysEqual = (date1: any, date2: any) => {
    if (date1.year === date2.year && date1.month === date2.month && date1.day === date2.day) return true;
    return false;
}

export const getDateId = (date: any) => {
    return date.day + date.month * 100 + date.year * 10000;
}

export const getMonthId = (date: any) => {
    return date.month + date.year * 100;
}

export const lZero = (num: number) => {
    if (num < 10) return '0'+num;
    return num.toString();
}

export const getMonthName = (date: any) => {
    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[date.getMonth()];
};

export const getWeekdayName = (weekday: any) => {
    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Ы', 'Твороженница', 'Пятница', 'Суббота'];
    return weekdays[weekday];
};

export const getWeekdayNameShort = (weekday: any) => {
    const weekdays = ['Вс', 'Пн', 'Вт', 'Ы', 'Тв', 'Пт', 'Сб'];
    return weekdays[weekday];
};

export const pcToColor = (pc: number) => {
    let [r, g, b] = [0, 0, 0];
    if (pc < 0.5) {
        r = 255;
        g = Math.round(255 * 2 * pc);
    }
    else {
        g = 255;
        r = Math.round(255 * 2 * (1 - pc));
    }
    return `rgb(${r},${g},${b})`;
}

export const overallToEmoji = (ov: number) => {
    if (ov === -3) return "😭";
    if (ov === -2) return "😲";
    if (ov === -1) return "😕";
    if (ov === 0) return "😐";
    if (ov === 1) return "😌";
    if (ov === 2) return "😅";
    return "🥰";
}

export const overallToColor = (ov: number) => {
    if (ov === -3) return "rgb(180,0,0)";
    if (ov === -2) return "rgb(255,25,0)";
    if (ov === -1) return "rgb(255,185,0)";
    if (ov === 0) return "rgb(255,255,0)";
    if (ov === 1) return "rgb(185,255,0)";
    if (ov === 2) return "rgb(100,255,0)";
    return "rgb(0,255,0)";
}

export const pcToRank = (pc: number) => {
    if (pc > 0.98) return "SSS";
    if (pc > 0.96) return "SS";
    if (pc > 0.925) return "S";
    if (pc > 0.88) return "A+";
    if (pc > 0.82) return "A";
    if (pc > 0.79) return "A-";
    if (pc > 0.73) return "B+";
    if (pc > 0.66) return "B";
    if (pc > 0.61) return "B-";
    if (pc > 0.55) return "C+";
    if (pc > 0.5) return "C";
    if (pc > 0.47) return "C-";
    if (pc > 0.43) return "D+";
    if (pc > 0.4) return "D";
    if (pc > 0.38) return "D-";
    if (pc > 0.3) return "E";
    if (pc > 0.2) return "F";
    if (pc > 0.125) return "G";
    return "H";
}

export const pcToRankColor = (pc: number) => {
    if (pc > 0.98) return "white";
    if (pc > 0.96) return "pink";
    if (pc > 0.925) return "purple";
    if (pc > 0.88) return "cyan";
    if (pc > 0.82) return "rgb(0,255,0)";
    if (pc > 0.79) return "rgb(40,255,0)";
    if (pc > 0.73) return "rgb(80,255,0)";
    if (pc > 0.66) return "rgb(125,255,0)";
    if (pc > 0.61) return "rgb(165,255,0)";
    if (pc > 0.55) return "rgb(220,255,0)";
    if (pc > 0.5) return "rgb(255,255,0)";
    if (pc > 0.47) return "rgb(255,215,0)";
    if (pc > 0.43) return "rgb(255,190,0)";
    if (pc > 0.4) return "rgb(255,165,0)";
    if (pc > 0.38) return "rgb(255,110,0)";
    if (pc > 0.3) return "rgb(255,50,0)";
    if (pc > 0.2) return "rgb(255,0,0)";
    if (pc > 0.125) return "rgb(180,0,0)";
    return "rgb(125,0,0)";
}

export const placeToColor = (place: number, placeMax: number) => {
    if (place === 1) return "gold";
    if (place === 2) return "silver";
    if (place === 3) return "peru";
    return pcToColor(1 - (place / placeMax));
}

