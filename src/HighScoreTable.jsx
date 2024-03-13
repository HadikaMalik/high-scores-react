import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ country }) => {
    return (
        <>
            <h2>{country.name}</h2>
            <div>
                {country.scores.map((player, index) => (
                    <PlayerScore key={index} name={player.n} score={player.s} />
                ))}
            </div>
        </>
    )
}

export default HighScoreTable;