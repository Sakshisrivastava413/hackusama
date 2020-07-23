import React from "react";
import "./App.css";
import Network from "./components/Network";
import FilterPanel from "./FilterPanel";

const App = () => {
  return (
    <div className="App">
      <Network />
      <FilterPanel />
    </div>
  );
};

export default App;
