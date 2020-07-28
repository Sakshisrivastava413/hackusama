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
        size: getSize(el.rank),
        rank: el.rank,
      },
    });
  });
  return elements;
}

function getSize(rank) {
  switch(rank) {
    case 1: return 35
    case 2: return 25
    case 3: return 20
    case 4: return 15
  }
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
          shape: "data(shape)",
          width: "data(size)",
          height: "data(size)",
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
        transform: function (node, pos) {
          const { rank } = node._private.data;
          return { x: pos.x, y: pos.y + rank * 50 };
        },
      };
}

export { createCytoscapeConfig, getGraphData };
