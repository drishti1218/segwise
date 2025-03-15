import React, { useState } from "react";

function Filters({ onFilterChange }) {
  const [country, setCountry] = useState("");
  const [campaign, setCampaign] = useState("");
  const [ipmRange, setIpmRange] = useState([0, 5]);

  const handleApply = () => {
    const filters = {
      country,
      campaign,
      ipmRange,
    };
    onFilterChange(filters);
  };

  return (
    <div className="filters">
      <div>
        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">All</option>
          <option value="IN">India</option>
          <option value="BR">Brazil</option>
          <option value="ID">Indonesia</option>
        </select>
      </div>
      <div>
        <label>Campaign:</label>
        <select value={campaign} onChange={(e) => setCampaign(e.target.value)}>
          <option value="">All</option>
          <option value="App promotion campaign - New Creatives">New Creatives</option>
          <option value="App promotion campaign - OG Creatives">OG Creatives</option>
          <option value="Bubblewise CPI Test Campaign">CPI Test</option>
        </select>
      </div>
      <div>
        <label>IPM Range: {ipmRange[0]} - {ipmRange[1]}</label>
        <input
          type="range"
          min="0"
          max="5"
          value={ipmRange[0]}
          onChange={(e) => setIpmRange([+e.target.value, ipmRange[1]])}
        />
        <input
          type="range"
          min="0"
          max="5"
          value={ipmRange[1]}
          onChange={(e) => setIpmRange([ipmRange[0], +e.target.value])}
        />
      </div>
      <button onClick={handleApply}>Apply Filters</button>
    </div>
  );
}

export default Filters;