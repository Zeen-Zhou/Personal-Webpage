const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const finalScore = document.getElementById("finalscore");
const settingsForm = document.getElementById("settings-form");

// List of words for game
const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "pizza",
  "sleep",
  "superman",
  "batmab",
  "place",
  "light",
  "feeble",
  "admit",
  "drag",
  "loving",
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Focus on text on start

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Settings select
let difficulty = "easy";

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
});

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.textContent = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.textContent = score;
}

// Game over, show end screen
function gameOver() {
  endgameEl.style.display = "flex";
  finalScore.textContent = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.textContent = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = "";

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 4;
    }

    updateTime();
  }
});
