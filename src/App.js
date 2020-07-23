import React, { useState, useEffect } from "react";
import "./App.css";
import Network from "./components/Network";
import FilterPanel from "./components/FilterPanel";
import data from "./data.json";

const App = () => {
  const [graphType, changeGraphType] = useState("Graph");
  const [connectionType, changeConnectionType] = useState("Connected");
  const [disconnectedData, setDisconnectedData] = useState([]);
  useEffect(() => {
    let count = 0;
    const newData = data.map((d) => ({
      address: d.address,
      backedValidators: d.backedValidators.map((v) => ({
        ...v,
        address: v.address + count++,
      })),
    }));
    setDisconnectedData(newData);
  }, []);
  const updateGraph = () =>
    changeGraphType(graphType === "Graph" ? "Tree" : "Graph");
  const updateConnection = () =>
    changeConnectionType(
      connectionType === "Connected" ? "Disconnected" : "Connected"
    );
  return (
    <div className="App">
      <Network
        graphType={graphType}
        graphData={connectionType === "Connected" ? data : disconnectedData}
      />
      <FilterPanel
        graphType={graphType}
        connectionType={connectionType}
        updateConnection={updateConnection}
        updateGraph={updateGraph}
      />
    </div>
  );
};

export default App;
