const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcdescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; // 템플릿 리터럴에서는 모든걸 String 값으로 받는다.
  outputResult(currentResult, calcdescription);
}

// function add2() {
//   const enteredNumber = getUserNumberInput();
//   const calcDescription = `${currentResult} + ${enteredNumber}`;
//   currentResult = currentResult + enteredNumber;
//   outputResult(currentResult, calcDescription);
// }

// function add2() {
//   const enteredNumber = getUserNumberInput(); //input.value;
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   createAndWriteOutput("+", initialResult, enteredNumber);
//   const logEntry = {
//     operation: "ADD",
//     prevResult: initialResult,
//     number: enteredNumber,
//     restul: currentResult,
//   };
//   logEntries.push(logEntry);
//   userInput.value = "";
// }

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    restul: newResult,
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput(); //input.value;
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);

  userInput.value = "";
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
