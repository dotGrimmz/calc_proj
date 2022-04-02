const CalculatorFunc = () => {
  let operation = "";
  let currentOperand = "";
  let previousOperand = "";

  const clear = () => {
    operation = "";
    currentOperand = "";
    previousOperand = "";
  };

  const deleteItem = () => {
    currentOperand = currentOperand.slice(0, -1);
  };

  const appendNumber = (number) => {
    if (currentOperand.includes(".") && number === ".") return;
    currentOperand = currentOperand + number.toString();
  };

  const chooseOperation = (operator) => {
    if (currentOperand === "") return;
    if (previousOperand !== "" || operation === "x2") {
      compute();
    }
    operation = operator;
    previousOperand = currentOperand;
    currentOperand = "";
  };

  const compute = () => {
    let computation;
    let prev = parseFloat(previousOperand);
    let current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    if (operation === "+") {
      computation = prev + current;
    }
    if (operation === "-") {
      computation = prev - current;
    }

    if (operation === "*") {
      computation = prev * current;
    }

    if (operation === "÷") {
      computation = prev / current;
    }

    if (operation === "x2") {
      computation = prev * prev;
    }

    currentOperand = computation;
    operation = undefined;
    previousOperand = "";
  };

  const updateDisplay = () => {
    currentOperandTextElement.innerHTML = getDisplayNumber(currentOperand);
    if (operation != null) {
      previousOperandTextElement.innerHTML = `${getDisplayNumber(
        previousOperand
      )} ${operation}`;
    } else {
      previousOperandTextElement.innerHTML = "";
    }
  };

  const getDisplayNumber = (number) => {
    let stringNumber = typeof number === "number" ? number.toString() : number;
    let integerDigits = stringNumber.split(".")[0];
    let decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  };

  return {
    clear,
    deleteItem,
    appendNumber,
    chooseOperation,
    compute,
    updateDisplay,
    currentOperand,
    previousOperand,
    operation,
  };
};

const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const allClearButton = document.querySelector("[data-all-clear]");

const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");

const calcExample = CalculatorFunc();
console.log(calcExample);

equalsButton.addEventListener("click", () => {
  calcExample.compute();
  calcExample.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calcExample.clear(previousOperandTextElement, currentOperandTextElement);
  calcExample.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calcExample.deleteItem();
  calcExample.updateDisplay();
});

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
