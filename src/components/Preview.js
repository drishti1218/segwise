import React from "react";

function Preview({ row, onExpand }) {
  return (
    <div className="preview">
      <h3>{row.creative_name}</h3>
      <p>ID: {row.creative_id}</p>
      <p>Campaign: {row.campaign}</p>
      <button onClick={onExpand}>Expand</button>
    </div>
  );
}

export default Preview;