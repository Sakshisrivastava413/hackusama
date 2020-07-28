function getGraphData(data) {
  const elements = [];
  data.forEach((el) => {
    elements.push({
      group: "nodes",
      data: {
        id: el.address,
        bg: "red",
        nominators: el.backedValidators,
        shape: "barrel",
      },
    });
  });
  return elements;
}

function createCytoscapeConfig(elements, graphType) {
  return {
    container: document.getElementById("cy"),
    elements: elements,
    grabbable: true,
    style: [
      {
        selector: "node",
        style: {
          "background-color": "data(bg)",
          "shape": "data(shape)",
        },
      },
      {
        selector: "edge",
        style: {
          "line-color": "#ccc",
        },
      },
    ],
    layout: getLayout(graphType),
    zoom: 2,
  };
}

function getLayout(type) {
  return type == "Graph"
    ? {
        name: "cose",
        nodeRepulsion: 400000,
        gravity: 80,
        coolingFactor: 0.95,
      }
    : {
        name: "dagre",
      };
}

export { createCytoscapeConfig, getGraphData };
