let btn1 = document.querySelector('#btn1'); // 
let btn2 = document.querySelector('#btn2'); // 
let btn3 = document.querySelector('#btn3'); // 
let btn4 = document.querySelector('#btn4'); // 
let btn5 = document.querySelector('#btn5'); // 
let btn6 = document.querySelector('#btn6'); // 
let btn7 = document.querySelector('#btn7'); // 
let btn8 = document.querySelector('#btn8'); // 
let btn9 = document.querySelector('#btn9'); // 
let btn10 = document.querySelector('#btn10'); // 
let btn11 = document.querySelector('#btn11'); // 
let btn12 = document.querySelector('#btn12'); // 


btn1.addEventListener('click', kick); 
btn2.addEventListener('click', clap); 
btn3.addEventListener('click', hhc); 
btn4.addEventListener('click', hhc2); 
btn5.addEventListener('click', hho); 
btn6.addEventListener('click', kick2); 
btn7.addEventListener('click', rim); 
btn8.addEventListener('click', snare); 
btn9.addEventListener('click', snare2); 
btn10.addEventListener('click', tomhi); 
btn11.addEventListener('click', tomlow); 
btn12.addEventListener('click', tommid); 



function kick(){
  let audio = new Audio("snds/kick1.wav");
  audio.play();
}

function clap() {
  let audio = new Audio("snds/clap.wav");
  audio.play();
}

function hhc() {
  let audio = new Audio("snds/hihatclosed.wav");
  audio.play();
}

function hhc2() {
  let audio = new Audio("snds/hihatclosed2.wav");
  audio.play();
}

function hho() {
  let audio = new Audio("snds/hihatopen.wav");
  audio.play();
}

function kick2() {
  let audio = new Audio("snds/kick2.wav");
  audio.play();
}

function rim() {
  let audio = new Audio("snds/rim.wav");
  audio.play();
}

function snare() {
  let audio = new Audio("snds/snare.wav");
  audio.play();
}

function snare2() {
  let audio = new Audio("snds/snare2.wav");
  audio.play();
}

function tomhi() {
  let audio = new Audio("snds/tomhi.wav");
  audio.play();
}

function tomlow() {
  let audio = new Audio("snds/tomlow.wav");
  audio.play();
}

function tommid() {
  let audio = new Audio("snds/tommid.wav");
  audio.play();
}