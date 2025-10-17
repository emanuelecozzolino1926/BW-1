//recupero i valori dei risultati salvati nell'URL
let params = new URLSearchParams(document.location.search);
let score = parseInt(params.get("score"), 10);
let total = parseInt(params.get("total"), 10);
let wrong = parseInt(params.get("wrong"), 10); 

//salvo i valori in un array
const yValues = [score, wrong, total]

const ctx = document.getElementById('donut') 

//Disegno del grafico a ciambella
const myChart = new Chart(ctx,
  { 
    type:"doughnut",
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor:['#00ffff', '#d20094',], 
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

//se le risposte esatte sono maggiori di quelle sbagliate compare un testo diverso all'interno del grafico
if(yValues[0] > yValues[1]){
  let insideText = document.querySelector('#wrapper')
  let parResult = document.createElement('div')
  parResult.classList.add('in-text-passed')
  parResult.innerHTML = `<h3>
                            <span>Congratulation!</span>
                            <span>You passed the exam.</span>
                          </h3>
                          <p>
                            <span>We'll send you the certificate in few minutes.</span>
                            <span>Check your email(including promotions / spam folder)</span>
                          </p>`
  insideText.appendChild(parResult)
} else {
  let insideText = document.querySelector('#wrapper')
  let parResult = document.createElement('div')
  parResult.classList.add('in-text-not-passed')
  parResult.innerHTML = `<h3>
                            <span>Sorry!</span>
                            <span>You didn't pass the exam.</span>
                          </h3>`
  insideText.appendChild(parResult)
  }
