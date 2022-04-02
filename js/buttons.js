export default Buttons = () => {
  const numButtons = document.querySelectorAll("[data-number]");
  const operatorButtons = document.querySelectorAll("[data-operation]");
  const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
  );
  const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
  );

  const equalsButton = document.querySelector("[data-equals]");
  const deleteButton = document.querySelector("[data-delete]");

  return {
    numButtons,
    operatorButtons,
    previousOperandTextElement,
    currentOperandTextElement,
    equalsButton,
    deleteButton,
  };
};
