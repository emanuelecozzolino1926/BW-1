//VARIABILI GLOBALI
let score = 0;
let questionNumber = 0;
let time;
let seconds;
let myChart;

//ARRAY DI OGGETTI DELLE DOMANDE E RISPOSTE
const questions = [
  {
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    question:
      "In the programming language Java, which keyword makes a variable not modifiable?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// CHARTJS PER IL TIMER
const clockCircle = document.getElementById("clock");

// FUNZIONE CREAZIONE GRAFICO A DOUGHNUT
const createChart = () => {
  myChart = new Chart(clockCircle, {
    type: "doughnut",
    data: {
      labels: ["Remaining", "Passed"],
      datasets: [
        {
          data: [30, 0],
          backgroundColor: ["#9a6a9e", "#00ffff"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      cutout: "80%",
      rotation: -360,
      circumference: 360,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
      },
    },
    plugins: [
      {
        // Plugin personalizzato per scrivere testo al centro
        id: "centerText",
        afterDraw(chart) {
          const {
            ctx,
            chartArea: { width, height },
          } = chart;
          ctx.save();
          ctx.fillStyle = "#fff";
          ctx.textAlign = "center";

          ctx.font = "12px Helvetica";
          ctx.fillText("SECONDS", width / 2, height / 2 - 30);

          ctx.font = "bold 40px Helvetica";
          ctx.fillText(seconds, width / 2, height / 2 + 10);

          ctx.font = "12px Helvetica";
          ctx.fillText("REMAINING", width / 2, height / 2 + 35);

          ctx.restore();
        },
      },
    ],
  });
};

//LOGICA TIMER
const startTimer = () => {
  clearInterval(time);
  seconds = 30;

  //RESET DEL CHART
  myChart.data.datasets[0].data = [30, 0];
  myChart.update();

  // TOGLIAMO UN SECONDO OGNI SECONDO
  time = setInterval(() => {
    seconds--;

    // AGGIORNIAMO ANCHE IL CHART
    myChart.data.datasets[0].data = [seconds, 30 - seconds];
    myChart.update();

    // SCADENZA TEMPO
    if (seconds <= 0) {
      clearInterval(time);
      setTimeout(() => {
        questionNumber++;
        //SE SCADE IL TEMPO PASSA ALLA PROSSIMA DOMANDA E LA DA ERRATA
        if (questionNumber < questions.length) {
          selectQuestion();
        } else {
          //UTILIZZIAMO PARAMS QUERY PER APRIRE UN ALTRA PAGINA CON LE VARIABILI DEL RISULTATO
          window.location.href = `results.html?score=${score}&total=${questions.length}&wrong=${questions.length - score}`;
        }
      }, 500);
    }
  }, 1000);
};

//INCOLLIAMO IN PAGINA LE DOMANDE
const selectQuestion = () => {
  const quizContainer = document.querySelector(".quiz");
  quizContainer.innerHTML = "";

  const current = questions[questionNumber];

  //INCREMENTIAMO IL NUMERO DI DOMANDE NEL CONTATORE SOTTO
  const counter = document.getElementById("question-counter");
  if (counter) {
    counter.innerHTML = `QUESTION ${questionNumber + 1} <span>/ ${questions.length}</span>`;
  }

  //MOSTRIAMO LA DOMANDA
  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("answer-title");
  questionTitle.innerText = current.question;
  quizContainer.appendChild(questionTitle);

  //MESCOLIAMO LE RISPOSTE
  const answers = [...current.incorrect_answers, current.correct_answer];
  answers.sort(() => Math.random() - 0.5);

  //CREIAMO I BOTTONI CON LE RISPOSTE
  answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.classList.add("btn-Base");
    btn.innerText = answer;

    //AL CLICK DELLA RISPOSTA BLOCCHIAMO IL TIMER
    btn.addEventListener("click", () => {
      clearInterval(time);

      //DOPO IL PRIMO CLICK GLI ALTRI NON SONO VALIDI
      const allBtns = quizContainer.querySelectorAll("button");
      allBtns.forEach((b) => {
        b.disabled = true;
        b.classList.remove("btn-Base");
      });

      //SE LA RISPOSTA E' GIUSTA
      if (answer === current.correct_answer) {
        score++;
        btn.classList.add("correct-btn");

        //TUTTI GLI ALTRI DIVENTANO ROSSI
        allBtns.forEach((b) => {
          if (b !== btn) {
            b.classList.add("wrong-btn");
          }
        });
      } else {
        // RISPOSTA SBAGLIATA
        btn.classList.add("wrong-btn");

        // TROVA E COLORA DI VERDE QUELLA GIUSTA
        const correctBtn = [...allBtns].find(
          (b) => b.innerText === current.correct_answer
        );
        if (correctBtn) {
          correctBtn.classList.add("correct-btn");
        }
      }

      //INTERVALLO TRA DOMANDE O PER IL RISULTATO
      setTimeout(() => {
        questionNumber++;
        if (questionNumber < questions.length) {
          selectQuestion();
        } else {
<<<<<<< HEAD
          window.location.href = `./results.html?score=${score}&total=${questions.length}&wrong=${questions.length - score}`;
=======
          window.location.href = `results.html?score=${score}&total=${questions.length}&wrong=${questions.length - score}`;
>>>>>>> emanuele
        }
      }, 1000);
    });

    quizContainer.appendChild(btn);
  });

  startTimer();
};

//AVVIO
window.onload = () => {
  createChart();
  selectQuestion();
};
