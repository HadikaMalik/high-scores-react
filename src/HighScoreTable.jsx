import React from "react";

const HighScoreTable = ({ country }) => {
    return (
        <>
            <div className="box">
                <h2 className="sub-heading">High scores: {country.name}</h2>
                <table>
                    <tbody>
                        {country.scores.map((score, index) => {
                            return (
                                <tr key={index}>
                                    <td>{score.n}</td>
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