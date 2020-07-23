import React, { useEffect } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import { createCytoscapeConfig, getGraphData } from "../utils";

cytoscape.use(dagre);

const Network = ({ graphType, graphData }) => {
  useEffect(() => {
    cytoscape(createCytoscapeConfig(getGraphData(graphData), graphType));
  }, [graphType, graphData]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
