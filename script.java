const numBtn = document.querySelectorAll('.num-btn');
const decimal = document.querySelector('.decimal');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const result = document.getElementById('result');

let expression = '';
let currentNum = '';
let prevNum = '';
let resultNum = '';
let currentOperator = '';

numBtn.forEach(button =>