// risposte esatte
let score = 4
// domande totali
let questionNumber = 10

let sbagliate = questionNumber - score

let xValues = ['correct', 'wrong',]

let yValues = [score, sbagliate,]

const ctx = document.getElementById('donut')

const shadow = {
  type: 'polygon',
  backgroundColor: 'white',
  backgroundShadowColor: 'black',
  borderColor: 'red',
  borderJoinStyle: 'round',
  borderWidth: 7,
  radius: 40,
  rotation: 180,
  shadowBlur: 3,
  shadowOffsetX: 3,
  shadowOffsetY: 10,
  xValue: (ctx) => value(ctx, 0, 2, 'x'),
  yValue: (ctx) => value(ctx, 0, 2, 'y')
};

const myChart = new Chart(ctx,
  { 
    type:"doughnut",
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor:[
          '#00ffff', 
          '#c2128d',
        ], 
        data: yValues,
        }
      ]
    },
    options: {
      // offset: '',
      cutout: '75%',
      title: {
        display: true,
      },
      plugins: [shadow]
      
    }
  }
)

setInterval(function() {
    data.datasets[0].data[1] = 60;
    data.datasets[0].backgroundColor[1] = "#F7464A";
 		myChart.update();
}, 1000);


const percentuali = function () {
  // 
  correct = document.querySelector('#wright-perc')
  wrong = document.querySelector('#wrong-perc')
  const perCorrect = document.createElement('p')
    perCorrect.classList.add('percentuali')
    perCorrect.innerText = (yValues[0]/questionNumber)*100 + '%'
    correct.appendChild(perCorrect)
  const rapCorrect = document.createElement('p')
    rapCorrect.classList.add('rapporti')
    rapCorrect.innerText = yValues[0] + '/' + questionNumber + ' question'
    correct.appendChild(rapCorrect)
    
  const perWrong = document.createElement('p')
    perWrong.classList.add('percentuali')
    perWrong.innerText = (yValues[1]/questionNumber)*100 + '%'
    wrong.appendChild(perWrong)
  const rapWrong = document.createElement('p')
    rapWrong.classList.add('rapporti')     
    rapWrong.innerText = yValues[1] + '/' + questionNumber + ' question'
  wrong.appendChild(rapWrong)
}

percentuali()