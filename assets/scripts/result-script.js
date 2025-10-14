
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
let risposteEsatte = 1

let xValues = ['correct', 'wrong',]
let yValues = [4,6]

const stackedText = {
  id: 'stackedText',
  afterDatasetsDraw(chart, args, options){
    const { ctx, chartArea: {top, bottom, left, right, width, height} } = 
    chart;
   
    ctx.save()
    ctx.font = 'bolder 40px Arial'
    ctx.fillStyle ='white'
    ctx.textAlign = 'center'
    ctx.fillText('PROVA', 10, 10) 

    ctx.fillStyle = 'black'
    ctx.fillRect(width / 2, top, 1, bottom)
    ctx.fillRect(left, height / 2 + top, right, 1)
    // (xStart, yStart, width, height)

  } 
}

const myChart = new Chart(document.getElementById("donut"),
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
      plugins: [stackedText]
    }
  }
)