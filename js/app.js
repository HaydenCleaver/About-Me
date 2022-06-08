'use strict';

let user = prompt('Please enter your name: ');
alert('Welcome ' + user + '!');

function fiveQuestions(){

  let question = prompt('Was I born in Baltimore?');
  let result = question.toLowerCase();

  if ( result === 'yes' || result === 'y'){
    // console.log('That\'s correct!');
    alert('That\'s correct!');
  } else{
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Is my favorite season summer?');
  result = question.toLowerCase();

  if ( result === 'no' || result === 'n'){
    // console.log('That\'s correct!');
    alert('That\'s correct!');

  } else{
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I like to kayak?');
  result = question.toLowerCase();

  if ( result === 'yes' || result === 'y'){
    // console.log('That\'s correct!');
    alert('That\'s correct!');

  } else{
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I have a college degree?');
  result = question.toLowerCase();

  if ( result === 'no' || result === 'n'){
    // console.log('That\'s correct!');
    alert('That\'s correct!');

  } else{
    // console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
  }

  question = prompt('Do I want to move to a different country?');
  result = question.toLowerCase();

  if ( result === 'yes' || result === 'y'){
    //console.log('That\'s correct!');
    alert('That\'s correct!');
    alert('Thanks for playing my game ' + user + '!');

  } else{
    //console.log('That\'s incorrect!');
    alert('That\'s incorrect!');
    alert('Thanks for playing my game ' + user + '!');
  }

}
