let score = 0
let questionNumber = 0

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const selectQuestion = () => {
  const quizContainer = document.querySelector(".quiz")
  const quizAnswer = document.createElement("h1")

  quizAnswer.classList.add("answer-title")
  quizAnswer.innerText = questions[questionNumber].question
  quizContainer.appendChild(quizAnswer)
}

const timer = document.getElementById("timer")

let seconds = 30
timer.textContent = seconds

const time = setInterval(() => {
  seconds--
  timer.innerText = seconds

  if (seconds <= 0) {
    clearInterval(time)
    timer.innerText = "Tempo scaduto"
  }
}, 1000)

window.onload = () => {
  selectQuestion()
}

/*RESULTS*/

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