
// let countEl = document.getElementById("count-el")

// function reset() {
//   let resetStr = count
//   resetBtn.textContent = 0
//   count = 0
// }

//HOME
let homeScore = document.getElementById("home-score")

let homescore = 0

function incrementhomeone() {
  homescore += 1
  homeScore.textContent = homescore
}

function incrementhometwo() {
  homescore += 2
  homeScore.textContent = homescore
}

function incrementhomethree() {
  homescore += 3
  homeScore.textContent = homescore
}

// GUEST
let guestScore = document.getElementById("guest-score") 

let guestscore = 0

function incrementguestone() {
  guestscore += 1
  guestScore.textContent = guestscore
}

function incrementguesttwo() {
  guestscore += 2
  guestScore.textContent = guestscore
}

function incrementguestthree() {
  guestscore += 3
  guestScore.textContent = guestscore
}

// RESET

function reset() {
  homescore = 0
  guestscore = 0
  homeScore.textContent = homescore
  guestScore.textContent = guestscore
}



