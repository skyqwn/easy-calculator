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

function add() {
  const enteredNumber = getUserNumberInput(); //input.value;
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
  userInput.value = "";
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  // const calcdescription = `${currentResult} - ${enteredNumber}`; // 템플릿 리터럴에서는 모든걸 String 값으로 받는다.
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
  userInput.value = "";
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
  userInput.value = "";
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
  userInput.value = "";
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
