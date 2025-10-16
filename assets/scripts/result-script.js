
const ctx = document.getElementById('donut') 

/*
const shadowPlugin = {
  id: 'shadowPlugin',
  beforeDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.save(); // Save the current canvas state
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'; // Set shadow color and opacity
    ctx.shadowBlur = 10; // Set shadow blur radius
    ctx.shadowOffsetX = 5; // Set horizontal shadow offset
    ctx.shadowOffsetY = 5; // Set vertical shadow offset
  },
  afterDraw: (chart) => {
    const ctx = chart.ctx;
    ctx.restore(); // Restore the canvas state
  }
};
*/

//recupero i valori dei risultati dall'URL
let params = new URLSearchParams(document.location.search);
let score = parseInt(params.get("score"), 10);
let total = parseInt(params.get("total"), 10);
let wrong = parseInt(params.get("wrong"), 10); 

console.log(`Lo score è ${score}, il totale è ${total}, le sbagliate sono ${wrong}`)

let yValues = [score, wrong, (score + wrong)]

console.log(yValues)
//Disegno del grafico a ciambella
const myChart = new Chart(ctx,
  { 
    type:"doughnut",
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor:['#00ffff', '#c2128d',], 
        data: [yValues[0],yValues[1]],
        }
      ]
    },
    
    options: {
      // offset: '',
      events:[],
      cutout: '75%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        annotation: {
      annotations: {
        backgroundShadowColor: 'black',
      }, 
    },
  },
},
}
)

/*
setInterval(function() {
    data.datasets[0].data[1] = 60;
    data.datasets[0].backgroundColor[1] = "#F7464A";
 		myChart.update();
}, 1000);
*/

//restituisco le percentuali ed i risultati
const percentuali = function () {

  correct = document.querySelector('#wright-perc')
  wrong = document.querySelector('#wrong-perc')

  const perCorrect = document.createElement('p')
    perCorrect.classList.add('percentuali')
    perCorrect.innerText = Number.parseFloat((yValues[0]/yValues[2])*100).toFixed(1) + '%'
    correct.appendChild(perCorrect)
  const rapCorrect = document.createElement('p')
    rapCorrect.classList.add('rapporti')
    rapCorrect.innerText = yValues[0] + '/' + yValues[2] + ' questions'
    correct.appendChild(rapCorrect)
    
  const perWrong = document.createElement('p')
    perWrong.classList.add('percentuali')
    perWrong.innerText = Number.parseFloat((yValues[1]/yValues[2])*100).toFixed(1) + '%'
    wrong.appendChild(perWrong)
  const rapWrong = document.createElement('p')
    rapWrong.classList.add('rapporti')     
    rapWrong.innerText = yValues[1] + '/' + yValues[2] + ' questions'
  wrong.appendChild(rapWrong)
}

percentuali()