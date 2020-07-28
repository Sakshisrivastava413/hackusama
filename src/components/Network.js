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

    node.bind("click", (event) => {
      const elements = [];
      const { nominators, id } = event.target._private.data;
      nominators.forEach((v) => {
        elements.push({
          group: "nodes",
          data: {
            id: v.address,
            bg: "blue",
            shape: "ellipse",
            size: v.size,
            rank: v.rank,
          },
        });
        elements.push({
          group: "edges",
          data: {
            source: id,
            target: v.address,
          },
        });
      });
      cy.add(elements);
      var layout = cy.layout({
        name: "dagre",
        fit: false,
        rankSep: 200,
        transform: function (node, pos) {
          const { rank } = node._private.data;
          return { x: pos.x, y: pos.y + rank * 50 };
        },
      });
      layout.run();
      cy.zoom(1);
    });
  }, [graphType, graphData]);
  return <div id="cy" style={{ height: "42rem", position: "relative" }}></div>;
};

export default Network;
