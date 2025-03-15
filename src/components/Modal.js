import React from "react";

function Modal({ row, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{row.creative_name}</h2>
        <p><strong>ID:</strong> {row.creative_id}</p>
        <p><strong>Tags:</strong> {row.tags}</p>
        <p><strong>Country:</strong> {row.country}</p>
        <p><strong>Campaign:</strong> {row.campaign}</p>
        <p><strong>IPM:</strong> {row.ipm}</p>
        <p><strong>CTR:</strong> {row.ctr}%</p>
        <p><strong>Spend:</strong> ${row.spend}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;