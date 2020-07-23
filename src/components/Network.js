import React, { useEffect } from "react";
import cytoscape from "cytoscape";
import { createCytoscapeConfig, getGraphData } from "../utils";

const Network = ({ graphType, graphData }) => {
  useEffect(() => {
    cytoscape(createCytoscapeConfig(getGraphData(graphData), graphType));
  }, [graphType, graphData]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
