import React from "react";

const FilterPanel = ({
  graphType,
  connectionType,
  updateConnection,
  updateGraph,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: 20 }}>
        <div>
          <input
            type="radio"
            value="Graph"
            onChange={updateGraph}
            checked={graphType == "Graph"}
          />
          <label>Graph</label>
        </div>
        <div>
          <input
            type="radio"
            value="Tree"
            onChange={updateGraph}
            checked={graphType == "Tree"}
          />
          <label>Tree</label>
        </div>
      </div>
      <div style={{ margin: 20 }}>
        <div>
          <input
            type="radio"
            value="Connected"
            onChange={updateConnection}
            checked={connectionType == "Connected"}
          />
          <label>Connected</label>
        </div>
        <div>
          <input
            type="radio"
            value="Disconnected"
            onChange={updateConnection}
            checked={connectionType == "Disconnected"}
          />
          <label>Disconnected</label>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
