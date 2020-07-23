import React, { useEffect } from "react";
import cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import { createCytoscapeConfig, getGraphData } from "../utils";

cytoscape.use(dagre);

const Network = ({ graphType, graphData }) => {
  useEffect(() => {
    let cy = cytoscape(
      createCytoscapeConfig(getGraphData(graphData), graphType)
    );
    cy.animation({ zoom: 1 })
      .play()
      .promise()
      .then(() => cy.animation({ fit: true }).stop().promise());
  }, [graphType, graphData]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
