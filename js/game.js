// constants

const answerOne = "HTML";
const answerTwo = "CSS";
const answerThree = "DOM";
const answerFour = "strings";
const incorrectAttemptLimit = 2;

// user will modify these values
let playerReady = false;
let question = "";
let incorrectAttempt = 0;

//confirm returns a boolean - True or false
playerReady = confirm("Are you ready to play grimmz game");

// First Happy Case
if (playerReady) {
  question = prompt("What is the acronym for Hypertext Markup Lang?");
  if (question === answerOne) {
    alert(`Correct ${answerOne} is the right answer! Good Job`);
    question = prompt("What does Cascading Style Sheets Stand for ?");
  } else if (question !== answerOne) {
    incorrectAttempt++;
    alert(
      `Sorry that was incorrect, number of incorrect attempts: ${incorrectAttempt}`
    );
    question = prompt("What does Cascading Style Sheets Stand for ?");
  }

  // Third Happy Case
  if (question === answerTwo) {
    alert("Correct" + " " + answerTwo + " " + "is the right answer! Good Job");
    question = prompt("What does Document Object Model stand for?");
  } else if (question !== answerTwo && incorrectAttempt <= 1) {
    incorrectAttempt++;
    alert(
      `Sorry that was incorrect, number of incorrect attempts: ${incorrectAttempt}`
    );
    question = prompt("What does Document Object Model stand for?");
  }

  // Fourth Happy Case
  if (question === answerThree) {
    alert(
      "Correct" + " " + answerThree + " " + "is the right answer! Good Job"
    );
    let playerContinue = confirm(
      "You've made it to the last question.. do you want to continue"
    );
    if (playerContinue) {
      question = prompt("What does Object Oriented Programming stand for?");
    }
  } else if (question !== answerThree && incorrectAttempt <= 2) {
    incorrectAttempt++;
    alert(
      `Sorry that was incorrect, number of incorrect attempts: ${incorrectAttempt}`
    );
  }

  if (question === answerFour) {
    alert("Correct" + " " + answerFour + " " + "is the right answer! Good Job");
    question = prompt("What is a switch statement best for comparing?");
  } else if (
    question !== answerFour &&
    incorrectAttempt > incorrectAttemptLimit
  ) {
    alert("you have answered too many questions incorrect please try again");
  } else if (
    question !== answerFour &&
    incorrectAttempt < incorrectAttemptLimit
  ) {
    incorrectAttempt++;
    if (incorrectAttempt < incorrectAttemptLimit) {
      alert("sorry you failed out this time");
    }
  }

  // Fifth and Final Happy case

  // if (question === answerFour) {
  //   alert("Congrats you got all of the questions CORRECT!");
  // }
} else {
  console.log("Player does not want to play.. too bad soo sad =[");
}

// Second Happy Case
