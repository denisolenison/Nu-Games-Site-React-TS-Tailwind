import React from 'react';
import GameRow from './gameRow';

export function GameRows(props: any) {
    const startI = props.startI;
    const endI = props.endI;
    const gamesType = props.gamesType;
    const gamesEls = [];
    for (let i = startI ; i <= endI ; i+= 4) {
        gamesEls.push({start: i, end: Math.min(i+3, endI)});
    }

    return (
        <div>
            {gamesEls.map((gameEl) => (<div className="gameRow" key={gameEl.start+gamesType+gameEl.end}>
                <GameRow startI={gameEl.start} endI={gameEl.end} gamesType={gamesType}/>
            </div>))}
        </div>
    );
}

export default GameRows;