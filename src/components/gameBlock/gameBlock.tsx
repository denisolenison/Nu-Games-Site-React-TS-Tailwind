import React from 'react';
import './gameBlock.css';

export function GameBlock(props: any) {
    let game = props.gameShort ?? {};
    if (game) {
        return (
        <div className="gameblock" style={{backgroundColor: game.colorString}}>
            <a href={game.link}>
                <img className="gameicon" src={game.iconLink} alt={game.name}>
                </img>
            </a>
            <br></br>
            <a className="gamename" href={game.link}>{game.name}</a>
        </div>
        );
    }
    else {
        return (<div></div>)
    }
}

export default GameBlock;