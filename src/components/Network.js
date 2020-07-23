import React, { useEffect } from "react";
import cytoscape from "cytoscape";
import data from "../data.json";
import { createCytoscapeConfig, getGraphData } from "../utils";

const Network = ({ graphType }) => {
  useEffect(() => {
    cytoscape(createCytoscapeConfig(getGraphData(data), graphType));
  }, [graphType]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
