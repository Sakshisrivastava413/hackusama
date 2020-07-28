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
    // cy.animate().delay(1500).animate({
    //   zoom: 1,
    // });
    let node = cy.elements().nodes();
    node.unbind("mouseover");
    node.bind("mouseover", () => {
      document.body.style.cursor = "pointer";
    });
    node.unbind("mouseout");
    node.bind("mouseout", () => {
      document.body.style.cursor = "default";
    });
  }, [graphType, graphData]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
