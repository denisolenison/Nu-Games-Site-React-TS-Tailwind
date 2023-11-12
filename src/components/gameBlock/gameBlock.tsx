import React from 'react';
import './gameBlock.css';
import { Link } from 'react-router-dom';

export function GameBlock(props: any) {
    let game = props.gameShort ?? {};
    if (game) {
        return (
        <div className="gameblock" style={{backgroundColor: game.colorString}}>
            <Link to={game.link}>
                <img className="gameicon" src={game.iconLink} alt={game.name}>
                </img>
            </Link>
            <br></br>
            <Link className="gamename" to={game.link}>{game.name}</Link>
        </div>
        );
    }
    else {
        return (<div></div>)
    }
}

export default GameBlock;