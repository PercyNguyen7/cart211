let goodNumber = 35000;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Last guess: ";
  }
  guesses.textContent += userGuess + " " + "people";

  if (userGuess === goodNumber) {
    lastResult.textContent = "Mhm you're quite the sharp one. ";
    // lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 1) {
    lastResult.textContent =
      "It's 35 000 people. You don't get a second chance just like most of them who never did.";
    setGameOver();
  }
  // else {
  //   lastResult.textContent = "Wrong!";
  //   lastResult.style.backgroundColor = "#476777";
  //   if (userGuess < goodNumber) {
  //     lowOrHi.textContent = "Too low!";
  //   } else if (userGuess > goodNumber) {
  //     lowOrHi.textContent = "Too high";
  //   }
  // }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  // resetButton = document.createElement("button");
  // resetButton.textContent = "Start new game";
  // document.body.appendChild(resetButton);
  // resetButton.addEventListener("click", resetGame);
}

// function resetGame() {
//   guessCount = 1;
//   const resetParas = document.querySelectorAll(".resultParas p");
//   for (let i = 0; i < resetParas.length; i++) {
//     resetParas[i].textContent = "";
//   }
//
//   resetButton.parentNode.removeChild(resetButton);
//   guessField.disabled = false;
//   guessSubmit.disabled = false;
//   guessField.value = "";
//   guessField.focus();
//   lastResult.style.backgroundColor = "white";
//   goodNumber = 35000;
// }

window.onload = function () {
  const FADEEFFECT = document.querySelector(".fade-on-scroll");

  window.addEventListener("scroll", scrollFade);

  function scrollFade() {
    if (window.scrollY >= 0 && window.scrollY <= 300) {
      FADEEFFECT.style.opacity = "0";
      FADEEFFECT.style.transform = "translateX(-100px)";
    } else {
      FADEEFFECT.style.opacity = "1";
      FADEEFFECT.style.transform = `translateX(0px)`;
      FADEEFFECT.style.transition = `1s ease-in-out`;
    }
  }
};
scrollFade();
