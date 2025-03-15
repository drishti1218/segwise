import React, { useState } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import Preview from "./components/Preview";
import Modal from "./components/Modal";
import mockData from "./mock-data.json";
import "./styles/App.css";

function App() {
  const [data, setData] = useState(mockData);
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "creative_id", direction: null });
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apply filters
  const applyFilters = (newFilters) => {
    let filteredData = [...mockData];

    if (newFilters.country) {
      filteredData = filteredData.filter((item) => item.country === newFilters.country);
    }
    if (newFilters.campaign) {
      filteredData = filteredData.filter((item) => item.campaign === newFilters.campaign);
    }
    if (newFilters.ipmRange) {
      filteredData = filteredData.filter(
        (item) => item.ipm >= newFilters.ipmRange[0] && item.ipm <= newFilters.ipmRange[1]
      );
    }

    setFilters(newFilters);
    setData(filteredData);
  };

  // Handle search
  const handleSearch = (query) => {
    const filteredData = mockData.filter(
      (item) =>
        item.creative_name.toLowerCase().includes(query.toLowerCase()) ||
        item.creative_id.includes(query)
    );
    setData(filteredData);
    setSearchQuery(query);
  };

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    } else if (sortConfig.key === key && sortConfig.direction === "desc") {
      direction = null;
    }

    const sortedData = [...data].sort((a, b) => {
      if (direction === null) return 0;
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(direction === null ? mockData : sortedData);
    setSortConfig({ key, direction });
  };

  // Handle row click for preview
  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <div className="app">
      <h1>Creative Dashboard</h1>
      <Filters onFilterChange={applyFilters} />
      <Table
        data={data}
        onSearch={handleSearch}
        onSort={handleSort}
        sortConfig={sortConfig}
        onRowClick={handleRowClick}
      />
      {selectedRow && (
        <Preview row={selectedRow} onExpand={() => setIsModalOpen(true)} />
      )}
      {isModalOpen && selectedRow && (
        <Modal row={selectedRow} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default App;