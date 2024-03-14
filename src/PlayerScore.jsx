import React from "react";

const PlayerScore = ({ playerName, score }) => {
    return (
        <>
            <tr>
                <td>{playerName}</td>
                <td>{score}</td>
            </tr>
        </>
    )
}

export default PlayerScore;