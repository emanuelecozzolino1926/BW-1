//  targettiamo le stelle
const starsClick = document.getElementById("stars")
starsClick.addEventListener("mouseover", function () {
  console.log("vediamo se funziona")
  starsClick.addEventListener("click", function () {
    console.log("stella molestata")
  })
})

//  targettiamo il bottone
const buttonClick = document.getElementById("buttonMoreInfo")
buttonClick.addEventListener("mouseover", function () {
  console.log("aridaje")
  buttonClick.addEventListener("click", function (e) {
    console.log("clic andato")
    e.preventDefault()
  })
})

//  rendiamo lunimosa una stella cambiando src dell'immagine
let stelle = document.querySelectorAll(".stella")

stelle.forEach(function (stella) {
  stella.addEventListener("click", function (e) {
    for (let i = 0; i < stelle.length; i++) {
      stelle[i].src = "./assets/images/star_dark.svg"
    }

    // questa funzione di SOPRA (il for each) ha controllato la stella. se la stella è nera, la fa accesa e viceversa.
    for (let i = 0; i <= e.target.getAttribute("id"); i++) {
      const stella = stelle[i]
      console.log(stella)
      if (stella.src.includes("star_dark.svg")) {
        stella.src = "./assets/images/star.svg"
      } else {
        stella.src = "./assets/images/star_dark.svg"
      }
    }
    console.log(e.target.getAttribute("id"))
  })
})
