//Disegno un cerchio da usare come sfondo
// const circle = function () {
//     const canvasBottom = document.getElementById('donut-bottom')
//     const ctxBottom = canvasBottom.getContext('2d')

//     canvasBottom.widght = 400
//     canvasBottom.height = 400

//     const radius = 150
//     const angle = Math.PI / 180

//     ctxBottom.beginPath()
//     ctxBottom.strokeStyle = '#c2128d'
//     ctxBottom.lineWidth = 40;
//     ctxBottom.arc(200, 200, radius, angle * 0, angle * 360, false )
//     // ctxBottom.scale(2,2)
//     ctxBottom.stroke()    
//   }
  
//   circle()
  
  //Disegno un cerchio che indicherà la percentuale delle risposte
//   const percentCircle = function () {
//     const canvasTop = document.getElementById('donut-top')
//     const ctxTop = canvasTop.getContext('2d')
    
//     canvasTop.widght = 400
//     canvasTop.height = 400
    
//     const radius = 150
//     const angle = Math.PI / 180
    
//     ctxTop.beginPath()
//     ctxTop.strokeStyle = '#00ffff'
//     ctxTop.lineWidth = 40;
//     ctxTop.arc(200, 200, radius, angle * 0, angle * 270, false )
//     // ctxTop.scale(2,2)
//     ctxTop.stroke()
// }

// percentCircle()
let risposteEsatte = 100

let xValues = []
let yValues = [risposteEsatte]
const myChart = new Chart("canvasBottom",
  {
    type:"doughnut",
    data: {
      datasets: [{
        borderWidth: 0,
        backgroundColor: '#c2128d',
        data: yValues,
        }
      ]
    },
    options: {
      title: {
        display: true,
      }
    }
  }

)