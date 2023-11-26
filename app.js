
// TÜM ÖGELERE ULAŞILDI

const computerChoiceDisplay = document.getElementById('computer-choice');
// console.log(computerChoice);

const userChoiceDisplay = document.getElementById('user-choice');
// console.log(userChoice);

const resultDisplay = document.getElementById('result');
// console.log(resultDisplay);

const possibleChoice = document.querySelectorAll('button');
// console.log(possibleChoice);

let userChoice;

let computerChoice1;

let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 computerChoice();
 finishResult()

}))

function computerChoice() {
 const randomNumber = Math.floor(Math.random() * possibleChoice.length) + 1;
 // console.log(randomNumber);
 if (randomNumber === 1) {
  computerChoice1 = "ROCK"
 }
 if (randomNumber === 2) {
  computerChoice1 = "SCISSORS"
 }
 if (randomNumber === 3) {
  computerChoice1 = "PAPER"
 }
 computerChoiceDisplay.innerHTML = computerChoice1
}

function finishResult() {
 if (computerChoice1 === userChoice) {
  result = "DRAW 😐"
 }

 if (computerChoice1 === "ROCK" && userChoice === "PAPER") {
  result = "YOU WİN 😎"
 }

 if (computerChoice1 === "ROCK" && userChoice === "SCISSORS") {
  result = "YOU LOSE 😭"
 }

 if (computerChoice1 === "PAPER" && userChoice === "SCISSORS") {
  result = "YOU  WİN 😎"
 }

 if (computerChoice1 === "PAPER" && userChoice === "ROCK") {
  result = "YOU LOSE 😭"
 }

 if (computerChoice1 === "SCISSORS" && userChoice === "ROCK") {
  result = "YOU WİN 😎"
 }

 if (computerChoice1 === "SCISSORS" && userChoice === "PAPER") {
  result = "YOU LOSE 😭"
 }
 resultDisplay.innerHTML = result
}








