import React from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
import './App.css';

function App() {
  return (
    <>
    <h1>High Scores per Country</h1>
      {allCountryScores.map((country, index) => (
        <HighScoreTable key={index} country={country} />
      ))}
    </>
  );
}

export default App;
