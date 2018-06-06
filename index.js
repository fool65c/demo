var express = require('express');  
var app = express();  
app.use(express.static(__dirname + '/public'));  

var Tickers = require('./tickers.js');

app.get('/data.js', function(req, res) {
  console.log(Tickers.Tickers.length);
  res.send(Tickers);
});

// helper function
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//price data
var priceData = {
    labels: [],
    datasets: []
};

var priceRawData = {};

function addPriceData() {
  priceData.labels.push((new Date()).toISOString());

  Tickers.Tickers.forEach(function(ticker) {
    if (priceRawData.hasOwnProperty(ticker)) {
      priceRawData[ticker].data.push(Math.random() * 100)
    } else {
      var color = getRandomColor();
      priceRawData[ticker] = {
        label: ticker,
        fill: false,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        pointRadius: 1,
        data: [
          Math.random() * 100
        ]
      };
    }
  });  

  priceData.datasets = Object.values(priceRawData);
};

app.get('/price', function (req, res) {
  addPriceData();
  res.send(priceData);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
