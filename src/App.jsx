import React from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
import './App.css';

function App() {
  const sortedCountryNames = [...allCountryScores].sort((a,b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
    <h1 className="heading">High Scores per Country</h1>
      {sortedCountryNames.map((country, index) => (
        <HighScoreTable key={index} country={country} />
      ))}
    </div>
  );
}

export default App;
