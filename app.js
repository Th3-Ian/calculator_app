const buttonNum = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll('.operators');
const subSym = document.querySelector('#sub_sym');
const divSym = document.querySelector('#div_sym');
const multiSym = document.querySelector('#multi_sym');
const display = document.querySelector('#display');
const equalSymbol = document.querySelector('#equal_sym');
const clearSymbol = document.querySelector("#clear_but");


let number_1 = "num";
let number_2 = "num";
let current_op = null;

clearSymbol.addEventListener('click', clear)

buttonNum.forEach((button) => button.addEventListener('click', () => updateDisplay(button.textContent)));

operators.forEach((button) => button.addEventListener('click', () => updateOperations(button.textContent)));

equalSymbol.addEventListener('click', updateNum2);

function updateDisplay(num) {
  if(display.textContent != 0) {
    display.append(num);
  } else {
    display.textContent = num;
  }
}

function clear() {
  display.textContent = 0;
  number_1 = "";
  number_2 = "";
  current_op = null;
}

function resetNum() {
  display.textContent = "0";
}

function updateOperations(button) {
  number_1 = display.textContent;
  console.log(number_1);
  current_op = button;
  console.log(current_op);
  resetNum()
}

function updateNum2() {
  number_2 = display.textContent;
  console.log(number_2);
  console.log(number_1, current_op);
  operate(number_1, number_2, current_op)
}

function add(a, b) {
  var sum = Number(a) + Number(b);
  display.textContent = sum;
}

function subtract(a, b) {
  var sum = Number(a) - Number(b);
  display.textContent = sum;
}

function divide(a, b) {
  var sum = Number(a) / Number(b);
  display.textContent = sum;
}

function multiply(a, b) {
  var sum = Number(a) * Number(b);
  display.textContent = sum;
}

function operate(num_1, num_2, sym) {
  if(sym === '+') {
    add(num_1, num_2);
  } else if(sym === '-') {
    subtract(num_1, num_2);
  } else if(sym === '/') {
    divide(num_1, num_2);
  } else if(sym === 'x') {
    multiply(num_1, num_2);
  }
}

