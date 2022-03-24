var trace1 = {
  x: ['Repo1', 'Repo2', 'Repo3'],
  y: [20, 14, 23],
  name: 'Code Scan',
  type: 'bar'
};

var trace2 = {
  x: ['Repo1', 'Repo2', 'Repo3'],
  y: [12, 18, 29],
  name: 'Secret Scan',
  type: 'bar'
};

var data = [trace1, trace2];

var layout = {barmode: 'group'};

Plotly.newPlot('tester', data, layout);
