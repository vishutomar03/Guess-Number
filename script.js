'use strict';

let random = Math.trunc(Math.random()*20) + 1; 
let highScore = 0, score = 20, check;
let message = document.querySelector('.message');
let restart = document.querySelector('.restart');
let body = document.querySelector('body');
let displayScore = document.querySelector('.score');
let inputNumber = document.querySelector('.guess');
let hScore = document.querySelector('.highscore');
let number = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', onClick);
restart.addEventListener('click', onClick1);

function onClick1(){
    // resetting everything 
    score = 20;
    random = Math.trunc(Math.random() * 20) + 1;

    message.textContent = 'Start guessing...';
    displayScore.textContent = score;
    number.textContent = '?';
    inputNumber.value = '';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    restart.innerHTML = null;
    restart.removeEventListener('click' , onClick1);

}

function onClick(){
    // Avoid all nunbers that are greater than 20 or less than 1
    if((Number)(inputNumber.value)>20 || (Number)(inputNumber.value)<=0){
        message.textContent = "Value must be between 1 and 20";
        return;

    }
    if(message.textContent === "Correct Answer"){
        return;
    }
        
    check = inputNumber;

    // Correct Number
    if(check.value==random){
        number.textContent = random;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        if(highScore<score){
            highScore = score;        
            hScore.textContent = highScore;
        }
        message.textContent = "Correct Answer";
        restart.innerHTML = '<button class = "btn again">Restart</button>';
        restart.addEventListener('click' , onClick1);

    }
    // Incorrect number
    else{
        if(check.value<random){
            message.textContent = "Too low!";
        }
        else{
            message.textContent = "Too high!";
        }
        score--;
        if(score<=0){
            message.textContent = "You Lost";
            if(score==0)
                displayScore.textContent = score;
            body.style.backgroundColor = 'rgb(201, 37, 37)';
            restart.innerHTML = '<button class = "btn again">Restart</button>';
            restart.addEventListener('click' , onClick1);
            return;
            
        }
        displayScore.textContent = score;
    }
}


