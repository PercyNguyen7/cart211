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
    lastResult.textContent =
      "Mhm you're quite the sharp one. To inform yourself is already one way of helping the homeless. ";
    // lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 1) {
    lastResult.textContent =
      "The answer is approximately 35 000 people. You don't get a second chance like most of them who never did. 35 000 souls in the harsh winter.";
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
// FAILED ATTEMPT
// window.onload = function () {
//   const FADEEFFECT = document.querySelector(".fade-on-scroll");
//
//   window.addEventListener("scroll", scrollFade);
//
//   function scrollFade() {
//     if (window.scrollY >= 100) {
//       FADEEFFECT.style.opacity = "0";
//       FADEEFFECT.style.transform = "translateX(-100px)";
//     } else {
//       FADEEFFECT.style.opacity = "1";
//       FADEEFFECT.style.transform = `translateX(0px)`;
//       FADEEFFECT.style.transition = `1s ease-in-out`;
//     }
//   }
// };
// scrollFade();

// NEW ATTEMPT
// function scrollAppear() {
//   const introText = document.querySelector(".fade-in");
//   const introPosition = introText.getBoundingClientRect().top;
//   const screenPosition = window.innerHeight;
//
//   if (introPosition < screenPosition / 2) {
//     introText.classList.add("fade-out");
//   }
// }
// window.addEventListener("scroll", scrollAppear);
// LATEST ATTEMPT
// Detect request animation frame
// var scroll =
//   window.requestAnimationFrame ||
//   // IE Fallback
//   function (callback) {
//     window.setTimeout(callback, 1000 / 60);
//   };
// var elementsToShow = document.querySelectorAll(".show-on-scroll");
//
// function loop() {
//   elementsToShow.forEach(function (element) {
//     if (isElementInViewport(element)) {
//       element.classList.add("fade-out");
//     } else {
//       element.classList.remove("fade-out");
//     }
//   });
//
//   scroll(loop);
// }
//
// // Call the loop for the first time
// loop();
//
// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// }
