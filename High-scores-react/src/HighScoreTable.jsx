import React from "react";

const HighScoreTable = ({ country, sortOrder }) => {
    const sortedScores = [...country.scores].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.s - b.s;
        } else {
            return b.s - a.s;
        }
    })
    return (
        <>
            <div className="box">
                <h2 className="sub-heading">High scores: {country.name}</h2>
                <table>
                    <tbody>
                        {sortedScores.map((score, index) => {
                            return (
                                <tr key={index}>
                                    <td>{score.n.toUpperCase()}</td>
                                    <td>{score.s}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HighScoreTable;