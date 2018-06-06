var priceConfig = {
  type: 'line',
  data: {
    labels: [],
    datasets: []
  },
  options: {
    animation: false,
    legend: {
      display: false
    },
    responsive: true,
    title: {
      display: true,
      text: 'Price'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};
