var trace1 = {
  x: ['code', 'secret', 'vuln'],
  y: [20, 14, 23],
  name: 'Repo 1',
  type: 'bar'
};

var trace2 = {
  x: ['code', 'secret', 'vuln'],
  y: [12, 18, 29],
  name: 'Repo 2',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot('tester', data, layout);
