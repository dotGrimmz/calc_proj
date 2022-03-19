class Calculator {
  operation = "";
  currentOperand = "";
  previousOperand = "";

  constructor(previousOperandTextEle, currentOperandTextEle) {
    this.previousOperandTextEle = previousOperandTextEle;
    this.currentOperandTextEle = currentOperandTextEle;
    //this will reset the operator
    this.clear();
  }

  clear() {
    // This will be tied to the AC button to clear the calculator
    this.previousOperandTextEle = "";
    this.currentOperandTextEle = "";
  }

  delete() {
    // this needs to slice off the last number from the current operand string
    // slice method = w3 schools
  }

  appendNumber(number) {
    // Attempt logic to handle if a user presses "." twice in a row.
    // there is an if conditional that should prevent the
    // concatenation of current operand if the previous string is a . already
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // adding a number to the number string
  }

  chooseOperation() {
    // selecting the operation needed to compute the problem
  }

  compute() {
    // will render the solution if all necessary variables are present
  }
}

const calcExample = new Calculator();

// start at zero's
console.log(calcExample);

// Simulates a user adding numbers to the first number of an operation
calcExample.appendNumber(1);
calcExample.appendNumber(2);
calcExample.appendNumber(5);

// Edge case for double decimal period on adding to current operand
calcExample.appendNumber(".");
calcExample.appendNumber(5);

// calcExample.appendNumber(".");

// Write the method for Delete number
// calcExample.delete();

// Handle chooseOperation
// assign the paramter operator to the operation property on the instance;
// assign currentOperand to previousOperand
// reset currentOperand to an empty string

console.log(calcExample);

// common methods needed to perform our operations:
// parseFloat
// toString
// includes
// split

//
