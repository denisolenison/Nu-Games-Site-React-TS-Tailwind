import React from 'react';
import { BigGamesShortDesc, gamesColors, getLinksOfGames, SmallGamesShortDesc } from '../../mocks/games.mocks';
import GameBlock from '../gameBlock/gameBlock';
import './gameRow.css';

export function GameRow(props: any) {
    const startI = props.startI;
    const endI = props.endI;
    const gamesType = props.gamesType;

    const gameRowItems = [];

    if (gamesType === "big") {
        for (let i = startI ; i <= endI ; ++i) {
            let {name, shortName} = BigGamesShortDesc[i];
            let links = getLinksOfGames(shortName);
            gameRowItems.push({name, ...links, colorString: gamesColors[i%8]});
        }
    }

    if (gamesType === "small") {
        for (let i = startI ; i <= endI ; ++i) {
            let {name, shortName} = SmallGamesShortDesc[i];
            let links = getLinksOfGames(shortName);
            gameRowItems.push({name, ...links, colorString: gamesColors[i%8]});
        }
    }

    return (
        <div className="gamerow">
            {gameRowItems.map(game => (<GameBlock gameShort={game} key={game.shortName}></GameBlock>))}
        </div>
    );
}

export default GameRow;