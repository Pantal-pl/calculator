import { ButtonAnimation } from "./classes/buttonAnimation.mjs";

class App {
  addButtonAnimation() {
    const app = new ButtonAnimation();
    app.addButtonAnimation();
    app.addTrigonometryEv();
  }
}
const app = new App();
app.addButtonAnimation();

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  calculate() {
    let calculation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) {
      switch (this.operation) {
        case "x²":
          calculation = prev * prev;
          break;
        case "√":
          prev < 0
            ? (calculation = 0)
            : (calculation = Math.sqrt(prev).toFixed(8));
          break;
        case "log":
          calculation = Math.log(prev).toFixed(8);
          break;
        case "sin":
          calculation = Math.sin(prev);
          break;
        case "cos":
          calculation = Math.cos(prev);
          break;
        case "tan":
          calculation = Math.tan(prev);
          break;
        case "+/-":
          console.log(prev);
          prev < 0 ? (calculation = Math.abs(prev)) : (calculation = prev * -1);
          break;
        default:
          return;
      }
      this.currentOperand = calculation;
      this.operation = undefined;
      this.previousOperand = "";
      return;
    }
    switch (this.operation) {
      case "+":
        calculation = prev + current;
        break;
      case "-":
        calculation = prev - current;
        break;
      case "x":
        calculation = prev * current;
        break;
      case "/":
        if (current === 0) return;
        calculation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = calculation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
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
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandText.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandText.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operation");
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#delete");
const allClearButton = document.querySelector("#all-clear");
const previousOperandText = document.querySelector(".result-previous");
const currentOperandText = document.querySelector(".result-current");
const powerButton = document.querySelector("#power");
const sqrtButton = document.querySelector("#sqrt");
const logButton = document.querySelector("#log");
const sinButton = document.querySelector("#sin");
const cosButton = document.querySelector("#cos");
const tanButton = document.querySelector("#tan");
const absoluteButton = document.querySelector("#absolute");
const calculate = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate.appendNumber(button.innerText);
    calculate.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculate.chooseOperation(button.innerText);
    calculate.updateDisplay();
  });
});

allClearButton.addEventListener("click", (button) => {
  calculate.clear();
  calculate.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculate.delete();
  calculate.updateDisplay();
});

equalsButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

powerButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

sqrtButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

logButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});
sinButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

cosButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

tanButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});

absoluteButton.addEventListener("click", (button) => {
  calculate.calculate();
  calculate.updateDisplay();
});
