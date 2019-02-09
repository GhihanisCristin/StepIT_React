import React from 'react';
import Counter from './Counter';

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name"><button className="remove-player">✖</button>{props.player}</span>
            <Counter />
        </div>
    );

};
export default Player;
