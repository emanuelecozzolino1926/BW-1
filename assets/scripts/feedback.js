const starsClick = document.getElementById("stars");
starsClick.addEventListener("mouseover", function () {
  console.log("vediamo se funge", starsClick);
  starsClick.addEventListener("click", function () {
    console.log("Stella cliccata e mantenuta");
  });
});

const buttonClick = document.getElementById("buttonMoreInfo");
buttonClick.addEventListener("mouseover", function () {
  console.log("prova, prova");
  buttonClick.addEventListener("click", function () {
    console.log("click andato");
  });
});

// funzione per accedenre la stessa e accendere le altre stelle nel caso di click

let stelle = document.querySelectorAll(".stella");

stelle.forEach(function (stella) {
  stella.addEventListener("click", function (e) {
    for (let i = 0; i < stelle.length; i++) {
      stelle[i].src = "./assets/img/star_dark.svg";
    }

    // questa funzione di SOPRA (il for each) ha controllato la stella. se la stella è nera, la fa accesa e viceversa.
    for (let i = 0; i <= e.target.getAttribute("id"); i++) {
      const stella = stelle[i];
      console.log(stella);
      if (stella.src.includes("star_dark.svg")) {
        stella.src = "./assets/img/star.svg";
      } else {
        stella.src = "./assets/img/star_dark.svg";
      }
    }
    console.log(e.target.getAttribute("id"));
  });
});

// stelle.forEach(function (stella) {
//   stella.addEventListener("click", function (e) {
//     if (stella.src.includes("star_dark.svg")) {
//       stella.src = "./assets/img/star.svg";
//     } else {
//       stella.src = "./assets/img/star_dark.svg";
//     }
//     // questa funzione di SOPRA (il for each) ha controllato la stella. se la stella è nera, la fa accesa e viceversa.
//     for (let i = 0; i < e.target.getAttribute("id"); i++) {
//       const stella = stelle[i];
//       console.log(stella);
//       if (stella.src.includes("star_dark.svg")) {
//         stella.src = "./assets/img/star.svg";
//       } else {
//         stella.src = "./assets/img/star_dark.svg";
//       }
//     }
//     console.log(e.target.getAttribute("id"));
//   });
// });
