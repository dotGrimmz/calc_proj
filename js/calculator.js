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
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return;
    this.currentOperand = this.currentOperand + number.toString();
    console.log(this);
  }

  chooseOperation(operator) {
    if (this.currentOperand === "") return;
    // assign the paramter operator to the operation property on the instance;
    this.operation = operator;
    // assign currentOperand to previousOperand
    this.previousOperand = this.currentOperand;
    // reset currentOperand to an empty string
    this.currentOperand = "";
    console.log(this);
  }

  // Needs to take a paramter
  compute() {
    // create an if statement for each operation and consider more to add that are not listed
    // on the calculator template
    let result;
    if (this.operation === "+") {
      result = this.currentOperand + this.previousOperand;

      // this.currentOperand are strings and may need to be parsed to numbers in order to compute
    }

    return result;
  }

  updateDisplay() {
    this.currentOperandTextEle.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextEle.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    }
    this.previousOperandTextEle.innerText = "";
  }

  getDisplayNumber(numberStr) {
    const integerDigits = parseFloat(numberStr.split(".")[0]);
    const decimalDigits = numberStr.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    }
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0,
    });
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    }
    return integerDisplay;
  }
}

const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const previousOperandTextElement = document.querySelector(
  ".data-previous-operand"
);
const currentOperandTextElement = document.querySelector(
  ".data-current-operand"
);

const calcExample = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// start at zero's
console.log(calcExample);
// Create variables for the operation buttons and assign click event listeners to them which then call the
// calExample.chooseOperation method

// Handle chooseOperation
// assign the paramter operator to the operation property on the instance;
// assign currentOperand to previousOperand
// reset currentOperand to an empty string

for (i = 0; i <= numButtons.length - 1; i++) {
  numButtons[i].addEventListener("click", (event) => {
    calcExample.appendNumber(event.target.innerText);
    calcExample.updateDisplay();
  });
}

for (i = 0; i <= operatorButtons.length - 1; i++) {
  operatorButtons[i].addEventListener("click", (event) => {
    calcExample.chooseOperation(event.target.innerText);
    calcExample.updateDisplay();
  });
}

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calcExample.appendNumber(button.innerText)
//     calcExample.updateDisplay()
//   })
// })
