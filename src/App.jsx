import React from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="heading">High Scores per Country</h1>
      {allCountryScores.map((country, index) => (
        <HighScoreTable key={index} country={country} />
      ))}
    </div>
  );
}

export default App;
