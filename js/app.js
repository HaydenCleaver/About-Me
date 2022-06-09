'use strict';

let user = prompt('Please enter your name: ');
alert('Welcome ' + user + '!');

let topThree = ['big sur', 'grandfather mountain', 'aiea trail'];
let correct = 0;
let numAnswer = Math.floor(Math.random() * 10);

function fiveQuestions() {

  let question = prompt('Was I born in Baltimore?');
  let result = question.toLowerCase();

  if (result === 'yes' || result === 'y') {
    // console.log('That\'s correct!');
    alert('That\'s correct!');
    correct++;

  } else {
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Is my favorite season summer?');
  result = question.toLowerCase();

  if (result === 'no' || result === 'n') {
    // console.log('That\'s correct!');
    alert('That\'s correct!');
    correct++;

  } else {
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I like to kayak?');
  result = question.toLowerCase();

  if (result === 'yes' || result === 'y') {
    // console.log('That\'s correct!');
    alert('That\'s correct!');
    correct++;

  } else {
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I have a college degree?');
  result = question.toLowerCase();

  if (result === 'no' || result === 'n') {
    // console.log('That\'s correct!');
    alert('That\'s correct!');
    correct++;

  } else {
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I want to move to a different country?');
  result = question.toLowerCase();

  if (result === 'yes' || result === 'y') {
    //console.log('That\'s correct!');
    alert('That\'s correct!');
    correct++;

  } else {
    //console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  for (let i = 0; i < 4; i++) {

    question = prompt('Guess a number 0-10. You get 4 chances.');
    result = Number(question);

    if (result === numAnswer) {
      alert('That is correct!');
      correct++;
      break;
    }

    else if (result < numAnswer) {
      alert('Too low! You have ' + (4 - (i + 1)) + ' chances left.');
    }

    else if (result > numAnswer) {
      alert('Too high! You have ' + (4 - (i + 1)) + ' chances left.');
    }

    else {
      alert('Invalid answer. You have ' + (4 - (i + 1)) + ' chances left.');
    }
  }

  for (let i = 0; i < 6; i++) {
    question = prompt('What is one of my top three favorite trails?');
    result = question.toLowerCase();

    for (let n = 0; n < topThree.length; n++) {
      if (result === topThree[n]) {
        alert('That is correct!');
        alert('These are all of the correct answers: ' + topThree);
        correct++;

        if (correct === 7) {
          alert('You got all 7 correct.  Good job ' + user + '!');
          correct = 0;
          return;
        }

        else {
          alert('You got ' + correct + ' answers correct. Try to get all 7!');
          alert('Thanks for playing my game ' + user + '!');
          correct = 0;
          return;
        }
      }

      // else {
      //   alert('That is incorrect! You have ' + (6-(i+1)) + ' guesses left.');
      //   // break;

      // }

    }
    alert('That is incorrect! You have ' + (6 - (i + 1)) + ' guesses left.');
  }

}
