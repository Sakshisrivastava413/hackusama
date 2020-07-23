function getGraphData(data) {
  const elements = [];
  data.forEach((el) => {
    elements.push({
      group: "nodes",
      data: {
        id: el.address,
        bg: "red",
      },
    });
    el.backedValidators &&
      el.backedValidators.forEach((v) => {
        elements.push({
          group: "nodes",
          data: {
            id: v.address,
            bg: "blue",
          },
        });
        elements.push({
          group: "edges",
          data: {
            target: el.address,
            source: v.address,
          },
        });
      });
  });
  return elements;
}

function createCytoscapeConfig(elements) {
  return {
    container: document.getElementById("cy"),
    elements: elements,
    grabbable: true,
    style: [
      {
        selector: "node",
        style: {
          "background-color": "data(bg)",
          "font-size": 13,
        },
      },
      {
        selector: "edge",
        style: {
          "line-color": "#ccc",
        },
      },
    ],
    zoom: 2,
  };
}

export { createCytoscapeConfig, getGraphData };
