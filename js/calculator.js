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
    // console.log(this.currentOperand);
  }

  chooseOperation() {
    if (this.currentOperand === "") return;
    // selecting the operation needed to compute the problem
  }

  compute() {
    // will render the solution if all necessary variables are present
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

const calcExample = new Calculator();

// start at zero's
console.log(calcExample);

const numButtons = document.querySelectorAll("[data-number]");

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

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calcExample.appendNumber(button.innerText)
//     calcExample.updateDisplay()
//   })
// })
