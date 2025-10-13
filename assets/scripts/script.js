//Disegno un cerchio da usare come sfondo

// const circle = function {
    const canvas = document.getElementById('donut')
    const ctx = canvas.getContext('2d')

    canvas.widght = 400
    canvas.height = 400

    const radius = 100
    const angle = Math.PI / 180

    ctx.beginPath()
    ctx.strokeStyle = '#c2128d'
    ctx.lineWidth = 20;
    ctx.arc(150, 150, radius, angle * 0, angle * 360, false )
    ctx.stroke()
// }
// circle()

//Disegno un cerchio che indicherà la percentuale delle risposte
//  const canvas = document.getElementById('donut')
//     const ctx = canvas.getContext('2d')

//     canvas.widght = 400
//     canvas.height = 400

//     const radius = 100
//     const angle = Math.PI / 180

//     ctx.beginPath()
//     ctx.strokeStyle = '#00ffff'
//     ctx.lineWidth = 20;
//     ctx.arc(150, 150, radius, angle * 0, angle * 270, false )
//     ctx.stroke()