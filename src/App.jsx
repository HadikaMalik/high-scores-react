import React, { useState } from "react";
import allCountryScores from "./scores";
import HighScoreTable from "./HighScoreTable";
import './App.css';

function App() {
  const [sortOrder, setSortOrder] = useState('asc');
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  const sortedCountryNames = [...allCountryScores].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="App">
      <button className="toggle-button" onClick={toggleSortOrder}>Sort scores by asc/desc</button>
      <div className="container">
        <h1 className="heading">High Scores per Country</h1>
        {sortedCountryNames.map((country, index) => (
          <HighScoreTable key={index} country={country} sortOrder={sortOrder} />
        ))}
      </div>
    </div>
  );
}

export default App;
