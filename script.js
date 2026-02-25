// Calculator operations

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function binaryOperate(a, b, operator) {
  switch (operator) {
    case '*':
      return new String(multiply(a, b));
    case '/':
      if (b === 0) return "Can't divide to 0";
      return new String(divide(a, b));
    case '+':
      return new String(add(a, b));
    case '-':
      return new String(subtract(a, b));
  }
}

function unaryOperate(a, operator) {
  switch (operator) {
    case 'point':
      return new String(`${a}.`);
    case 'sqrt':
      return new String(Math.sqrt(a));
    case 'unary-sign':
      return new String(-a);
  }
}
