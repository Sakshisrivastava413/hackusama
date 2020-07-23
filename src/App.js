import React, { useState } from "react";
import "./App.css";
import Network from "./components/Network";
import FilterPanel from "./components/FilterPanel";

const App = () => {
  const [graphType, changeGraphType] = useState("Graph");
  const [connectionType, changeConnectionType] = useState("Connected");
  const updateGraph = () =>
    changeGraphType(graphType == "Graph" ? "Tree" : "Graph");
  const updateConnection = () =>
    changeConnectionType(
      connectionType == "Connected" ? "Disconnected" : "Connected"
    );
  return (
    <div className="App">
      <Network graphType={graphType} />
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
