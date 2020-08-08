import React, { useState, useEffect } from "react";
import "./App.css";
import Network from "./components/Network";
// import FilterPanel from "./components/FilterPanel";
// import data from "./newData.json";

import { filteredActiveValidators, range, nomRange } from './data/allData';

const App = () => {
  const [graphType, changeGraphType] = useState("Tree");
  const [connectionType, changeConnectionType] = useState("Connected");
  const [disconnectedData, setDisconnectedData] = useState([]);

  // useEffect(() => {
  //   const newData = data.map((d) => ({
  //     address: d.address,
  //   }));
  //   setDisconnectedData(newData);
  // }, []);

  // const updateGraph = () =>
  //   changeGraphType(graphType === "Graph" ? "Tree" : "Graph");
  // const updateConnection = () =>
  //   changeConnectionType(
  //     connectionType === "Connected" ? "Disconnected" : "Connected"
  //   );
  return (
    <div className="App">
      <Network
        graphType={graphType}
        graphData={connectionType === "Connected" ? filteredActiveValidators : disconnectedData}
        range={range}
        nomRange={nomRange}
      />
      {/* <FilterPanel
        graphType={graphType}
        connectionType={connectionType}
        updateConnection={updateConnection}
        updateGraph={updateGraph}
      /> */}
    </div>
  );
};

export default App;
