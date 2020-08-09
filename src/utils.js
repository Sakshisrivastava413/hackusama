function getGraphData(data, range) {
  const elements = [];
  data.forEach((el) => {
    elements.push({
      group: 'nodes',
      data: {
        id: el.accountId,
        bg: 'red',
        nominators: el.backedNominator,
        shape: 'barrel',
        size: getSize(getRank(el.totalStake, range)),
        rank: getRank(el.totalStake, range),
        totalStake: el.totalStake,
      },
    });
  });
  return elements;
}

function getSize(rank) {
  switch (rank) {
    case 2:
      return 35 * 4;
    case 4:
      return 25 * 3;
    case 6:
      return 20 * 2;
    case 8:
      return 15;
  }
}

function getRank(rank, range) {
  const min = range[0];
  const max = range[range.length - 1];
  if (rank >= max && rank > max * 0.5) return 2;
  else if (rank >= max * 0.5 && rank > max * 0.2) return 4;
  else if (rank >= max * 0.2 && rank > max * 0.1) return 6;
  else return 8;
}

function createCytoscapeConfig(elements, graphType) {
  return {
    container: document.getElementById('cy'),
    elements: elements,
    grabbable: true,
    style: [
      {
        selector: 'node',
        style: {
          'background-color': 'data(bg)',
          shape: 'data(shape)',
          width: 'data(size)',
          height: 'data(size)',
        },
      },
      {
        selector: 'edge',
        style: {
          'line-color': '#ccc',
        },
      },
    ],
    layout: getLayout(graphType),
    zoom: 2,
  };
}

function getLayout(type) {
  // let lastPos;
  // let lastRank;
  return type === 'Graph'
    ? {
        name: 'cose',
        nodeRepulsion: 400000,
        gravity: 80,
        coolingFactor: 0.95,
      }
    : {
        name: 'dagre',
        transform: function (node, pos) {
          const { rank } = node._private.data;
          return { x: pos.x, y: pos.y + rank * 50 };

          // YESTERDAY's experiment
          // let res;
          // console.log(lastRank, rank);
          // console.log(lastPos, pos);
          // if (!lastPos) {
          //   res = { x: pos.x, y: pos.y + rank * 50 };
          // } else {
          //   res = { x: lastRank != rank ? lastPos.x : pos.x, y: pos.y + rank * 50 };
          // }
          // lastPos = {...pos};
          // lastRank = rank;
          // return res;
        },
      };
}

export { createCytoscapeConfig, getGraphData, getRank, getSize };
