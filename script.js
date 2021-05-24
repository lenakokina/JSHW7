function getOperator(str) {
  let answer = '';
  do {
    answer = prompt('Введите оператор для калькуляции: (+ - * /)');
  }
  while (!isOperatorValid(answer));
  return answer;
}

function isOperatorValid(answer) {
  return answer === '+' ||
         answer === '-' ||
         answer === '*' || 
         answer === '/';
}

function getOperands(str) {
  let operands;
  let value;

  do {
    value = prompt('Введите числа для калькуляции через запятую');
  }

  while (!isOperandsValid(value));

  let arr = value.split(',');
  operands = arr.filter(function(num) {
    return !isNaN(+num) && num % 2 !== 0;
  });

  return operands.map(i => +i);
}

function isOperandsValid(value) {
  return value !== '' && value !== null;
}
 
function getCalculation(operator, operands) {
  let calculation;

  switch(operator) {
    case '+':
    calculation = operands.reduce((acc, num) => acc + num);
    break;
    case '-':
    calculation = operands.reduce((acc, num) => acc - num);
    break;
    case '*':
    calculation = operands.reduce((acc, num) => acc * num);
    break;
    case '/':
    calculation = operands.reduce((acc, num) => acc / num);
    break;
  }
  return calculation;
}


const validOperator = getOperator();
const validOperands = getOperands();
const result = getCalculation(validOperator, validOperands);
alert(` ${validOperands.join(validOperator)} = ${result}`);
