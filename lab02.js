'use strict';

var user = prompt('Please introduce yourself.');

alert('Hi, ' + user + '. Please answer yes or no to the following questions.');

var correct = 0;

function questioneOneThroughFive() {

  // Question 1
  var q1 = prompt('Do you identify as an earthling?');
  q1 = q1.toLowerCase();

  if (q1 === 'yes' || q1 === 'y') {
   
    alert('I figured but I didn\'t want to assume.');
    correct++;
  } else if (q1 === 'no' || q1 === 'n') {

    alert('Oh, how unusual.');

  } else {

    alert('Please answer yes or no.');
  }

  // Question 2
  var q2 = prompt('Do you think humanity has a future?');
  q2 = q2.toLowerCase();

  if (q2 === 'yes' || q2 === 'y') {

    alert('Let\'s hope so.');
    correct++;

  } else if (q2 === 'no' || q2 === 'n') {

    alert('Yeah, same.');

  } else {
    
    alert('Please answer yes or no.');
  }

  // Question 3
  var q3 = prompt('Do you want to live on this planet anymore?');
  q3 = q3.toLowerCase();

  if (q3 === 'yes' || q3 === 'y') {
    
    alert('I guess it could be worse.');
    correct++;

  } else if (q3 === 'no' || q3 === 'n') {
    
    alert('2020 has been rough.');

  } else {
    
    alert('Please answer yes or no.');
  }

  // Question 4
  var q4 = prompt('Will you fly with Papa Elon to Mars?');
  q4 = q4.toLowerCase();

  if (q4 === 'yes' || q4 === 'y') {
    
    alert('See you there.');
    correct++;

  } else if (q4 === 'no' || q4 === 'n') {

    alert('I feel ya, even flying international is exhausting.');

  } else {

    alert('Please answer yes or no.');
  }

  // Question 5
  var q5 = prompt('Or are cloud cities on Venus more your style?');
  q5 = q5.toLowerCase();

  if (q5 === 'yes' || q5 === 'y') {
  
    alert('Balloon cities are a fun concept, ' + user + '.');
    correct++;

  } else if (q5 === 'no' || q5 === 'n') {

    alert('I suppose sulphur clouds would give anyone pause, ' + user + '.');

  } else {
    
    alert('Please answer yes or no, ' + user + '.');
  }
}
questioneOneThroughFive();

// Question 6
function questionSix() {
  var num = 38;
  var q6;
  var i;

  for (i = 0; i < 4; i++) {

    q6 = prompt("Let's play a game. Please guess a number between 1 and 50 in four attempts.");
    var remain = 3 - i;


    if (q6 == num) {
      alert("Winner winner chicken dinner!");
      correct++;
      break;
    }

    else if (q6 < num && q6 >= 1) {
      alert("Guessed too low. You have " + remain + " attempts remaining.");
    }

    else if (q6 > num && q6 <= 50) {
      alert("Guessed too high. You have " + remain + " attempts remaining.");
    }

    else {
      i--;
      var plus1 = remain + 1;
      alert("Please enter a number between 1 and 50. You have " + plus1 + " attempts remaining.");

    }
  }

  if (i === 4) {
    alert("Better luck next time! The answer was 38.");
  }

  else {
    alert("Congratulations!");
  }
}
questionSix();

// Question 7

function questionSeven() {
  var stims = ["caffeine", "ephedrine", "nicotine"];


  for (var k = 6; k > 0; k--) {

    var q7 = prompt("Can you guess all the chemical stimulants I use? You have " + k + " attempt(s) remaining.").toLowerCase();


    if (stims.includes(q7)) {
      correct++;
      break;
    }

  }

  alert(`Good guess. The full list is ${stims[0]}, ${stims[1]}, and ${stims[2]}. Out of all the questions you got ${correct}/7 right!`)
}
questionSeven();