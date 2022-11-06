'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Right Number'
console.log(document.querySelector('.message').textContent);
document.querySelector('.guess').value =23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20+1);

let score = 20;
let heighscore = 0;
const calMessage = function(message){
  document.querySelector('.message').textContent =message;
}
// document.querySelector('.again').addEventListener('click', function(){
//   location.reload();
// })
document.querySelector('.check').addEventListener('click', function(){ 
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('.score').value = document.querySelector('.score').value-1;
  if(!guess){
    // document.querySelector('.message').textContent = 'NO NUMBER !'
    calMessage('NO NUMBER')
  }else if(guess===secretNumber){
    // document.querySelector('.message').textContent = 'Correct Number';
    calMessage('Correct Number!')
    document.querySelector('.number').textContent =secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width ='30rem';
    if(score>heighscore){
      heighscore = score;
      document.querySelector('.highscore').textContent = heighscore;
    }
  }else if(guess !== secretNumber){
    if(score>1){
      // document.querySelector('.message').textContent = guess>secretNumber ? 'Too high' : 'Too low';
      calMessage(guess>secretNumber ? 'Too high' : 'Too low')
      score--;
      document.querySelector('.score').textContent =score;
    }else{
      // document.querySelector('.message').textContent ='You lost the game'
      calMessage('You lost the game!')
      document.querySelector('.score').textContent =0;
    }
  }
  // else if(guess >secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent = 'Too heigh';
  //     score--;
  //     document.querySelector('.score').textContent =score;
  //   }else{
  //     document.querySelector('.message').textContent ='You lost the game'
  //     document.querySelector('.score').textContent =0;
  //   }
  // }else if(guess<secretNumber){
  //   if(score>1){
  //     document.querySelector('.message').textContent = 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent =score;
  //   }else{
  //     document.querySelector('.message').textContent ='You lost the game'
  //     document.querySelector('.score').textContent =0;
  //   }
  // }
} 
)

document.querySelector('.again').addEventListener('click',function(){
 score = 20;
 secretNumber =Math.trunc(Math.random()*20+1);
//  document.querySelector('.message').textContent ='Start guessing...';
calMessage('Start guessing...')
document.querySelector('.score').textContent =score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value ='';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
})