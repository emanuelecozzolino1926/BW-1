//Disegno un cerchio da usare come sfondo

const circle = function () {
    const canvasBottom = document.getElementById('donut-bottom')
    const ctxBottom = canvasBottom.getContext('2d')

    canvasBottom.widght = 400
    canvasBottom.height = 400

    const radius = 100
    const angle = Math.PI / 180

    ctxBottom.beginPath()
    ctxBottom.strokeStyle = '#c2128d'
    ctxBottom.lineWidth = 20;
    ctxBottom.arc(150, 150, radius, angle * 0, angle * 360, false )
    ctxBottom.stroke()    
}

circle()

//Disegno un cerchio che indicherà la percentuale delle risposte
    const canvasTop = document.getElementById('donut-top')
    const ctxTop = canvasTop.getContext('2d')

    canvasTop.widght = 400
    canvasTop.height = 400

    const radius = 100
    const angle = Math.PI / 180

    ctxTop.beginPath()
    ctxTop.strokeStyle = '#00ffff'
    ctxTop.lineWidth = 20;
    ctxTop.arc(150, 150, radius, angle * 0, angle * 270, false )
    ctxTop.stroke()