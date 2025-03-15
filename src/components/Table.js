import React from "react";

function Table({ data, onSearch, onSort, sortConfig, onRowClick }) {
  const headers = [
    { label: "Creative ID", key: "creative_id" },
    { label: "Creative Name", key: "creative_name" },
    { label: "Tags", key: "tags" },
    { label: "Country", key: "country" },
    { label: "Ad Network", key: "ad_network" },
    { label: "OS", key: "os" },
    { label: "Campaign", key: "campaign" },
    { label: "Ad Group", key: "ad_group" },
    { label: "IPM", key: "ipm" },
    { label: "CTR", key: "ctr" },
    { label: "Spend", key: "spend" },
    { label: "Impressions", key: "impressions" },
    { label: "Clicks", key: "clicks" },
    { label: "CPM", key: "cpm" },
    { label: "Cost/Click", key: "cost_per_click" },
    { label: "Cost/Install", key: "cost_per_install" },
    { label: "Installs", key: "installs" },
  ];

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search by name or ID..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key} onClick={() => onSort(header.key)}>
                {header.label}{" "}
                {sortConfig.key === header.key &&
                  (sortConfig.direction === "asc" ? "↑" : sortConfig.direction === "desc" ? "↓" : "")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.creative_id}>
              <td onClick={() => onRowClick(row)}>{row.creative_id}</td>
              <td>{row.creative_name}</td>
              <td>{row.tags}</td>
              <td>{row.country}</td>
              <td>{row.ad_network}</td>
              <td>{row.os}</td>
              <td>{row.campaign}</td>
              <td>{row.ad_group}</td>
              <td>{row.ipm}</td>
              <td>{row.ctr}</td>
              <td>{row.spend}</td>
              <td>{row.impressions}</td>
              <td>{row.clicks}</td>
              <td>{row.cpm}</td>
              <td>{row.cost_per_click}</td>
              <td>{row.cost_per_install}</td>
              <td>{row.installs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;