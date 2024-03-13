import React from "react";

const PlayerScore = ({ name, score }) => {
    return (
        <>
            <span>{name}</span>: <span>{score}</span>
        </>
    )
}

export default PlayerScore;