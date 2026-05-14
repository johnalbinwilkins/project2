/*
 * Global variables used by our calculator.
 */

const displaySize = 9;
const overflowErrorMessage = "overflow";

const state = {
  currentTerm: "",
  currentSign: "",
  currentOperator: "",
  previousTerm: "",
  previousSign: "",
  previousOperator: "",
};

const debug = true;

// Initialize the calculator.
updateDisplay();

/*
 * Add a click event handler for all the buttons.
 */

// Define a press1 function that adds 1 to the current term.
function press1() {
  addToTerm(1);
}

// Define a press2 function that adds 2 to the current term.
function press2() {
  addToTerm(2);
}

// Define a press3 function that adds 3 to the current term.
function press3() {
  addToTerm(3);
}

// Define a press4 function that adds 4 to the current term.
function press4() {
  addToTerm(4);
}

// Define a press5 function that adds 5 to the current term.
function press5() {
  addToTerm(5);
}

// Define a press6 function that adds 6 to the current term.
function press6() {
  addToTerm(6);
}

// Define a press7 function that adds 7 to the current term.
function press7() {
  addToTerm(7);
}

// Define a press8 function that adds 8 to the current term.
function press8() {
  addToTerm(8);
}

// Define a press9 function that adds 9 to the current term.
function press9() {
  addToTerm(9);
}

// Define a press0 function that adds 0 to the current term.
function press0() {
  addToTerm(0);
}

// Define a pressDecimal function that adds . to the current term.
// function pressDecimal() {
  // // Stating a term with a decimal should display: "0."
  // if (state.currentTerm === "") {
  //   addToTerm("0.");
  // }
  // // Only add one decimal to the term.
  // else
  //   if (state.currentTerm.includes(".") === false) {
  //   addToTerm(".");
  // }
// }

// Define an addToTerm function takes a "number" parameter and adds it to the current term.
function addToTerm(number) {
  // if (state.currentTerm === overflowErrorMessage) {
  //   // Error: the display needs to be cleared first.
  //   return;
  // }

  // Don't allow numbers that are too long.
  // if (currentTerm.length < displaySize) {
  state.currentTerm = state.currentTerm + number;
  // }
}

// Define a pressSign function that toggles the current sign.
// function pressSign() {
//   // // Don't allow a negative sign on zero.
//   // if (state.currentTerm === "") {
//   //   state.currentSign = "";
//   // }
//   // // Toggle the sign.
//   // else
//   if (state.currentSign === "") {
//     state.currentSign = "-";
//   } else {
//     state.currentSign = "";
//   }
// }

// function pressDivide() {}

// function pressMultiply() {}

// function pressSubtract() {
//   handleOperator("subtract");
// }

// function pressAdd() {
//   handleOperator("add");
// }

// function pressEqual() {
//   handleOperator("equal");
// }

function handleOperator(operator) {
  // If this is the first number entered, save it.
  if (state.previousTerm === "") {
    state.previousTerm = state.currentTerm;
    state.previousSign = state.currentSign;
    state.previousOperator = operator;
  }
  // If we enter two operators in a row, replace the first operator.
  else if (state.currentOperator !== "") {
    state.currentOperator = operator;
  }
  // If this is the second number entered, do the previously saved operation.
  else {
    if (state.currentOperator === "add") {
      state.previousTerm = state.previousTerm + newTerm;
    } else if (state.currentOperator === "subtract") {
      state.previousTerm = state.previousTerm - newTerm;
    }
  }

  if (operator === "equal") {
    state.previousTerm = "";
    state.previousSign = "";
    operator = "";
  }

  // Save the operator.
  state.currentOperator = operator;
  // Prepare for another number.
}

// Optional: Define a pressDelete function that removes the last character from the current term.
function pressDelete() {
  state.currentTerm = state.currentTerm.slice(0, -1);
}

function pressClear() {
  state.currentTerm = "";
  state.currentSign = "";
  state.currentOperator = "";
  state.previousTerm = "";
  state.previousSign = "";
}

/**
 * Updates the display using the current state variables.
 */
function updateDisplay() {
  if (debug) console.log("Starting updateDisplay()…", { state: { ...state } });

  const display = document.getElementById("calc-display");
  let overflowed = false;
  let sign = state.currentSign;
  let number = state.currentTerm;

  if (number === "") {
    number = "0";
    sign = "";
  } else {
    if (display.textContent === overflowErrorMessage) {
      overflowed = true;
    } else {
      // Ensure the number is a string.
      number = "" + number;
    }
  }

  // Is the number too big to fit in the display?
  if (number.length > displaySize || overflowed) {
    // Find an optional decimal.
    const decimalPosition = number.indexOf(".");

    // If the integer part of the number is too long…
    if (decimalPosition === -1 || decimalPosition > displaySize) {
      // Set an error state.
      state.currentTerm = overflowErrorMessage;
      state.currentSign = "";
      state.currentOperator = "";
      state.previousTerm = "";
      state.previousSign = "";
      state.previousOperator = "";

      // Display the error.
      number = overflowErrorMessage;
      sign = "";
    }
    // Else trim the number to fit.
    else {
      number = number.slice(0, displaySize);

      // Trim extra characters if the number has a decimal part.
      if (decimalPosition !== -1) {
        // Trim trailing zeros.
        while (number.at(-1) === "0") {
          number = number.slice(0, -1);
        }
        // Trim a trailing decimal.
        if (number.at(-1) === ".") {
          number = number.slice(0, -1);
        }
      }
    }
  }

  display.textContent = sign + number;

  if (debug) {
    document.getElementById("calc-currentTerm").textContent = state.currentTerm;
    document.getElementById("calc-currentSign").textContent = state.currentSign;
    document.getElementById("calc-currentOperator").textContent =
      state.currentOperator;
    document.getElementById("calc-previousTerm").textContent =
      state.previousTerm;
    document.getElementById("calc-previousSign").textContent =
      state.previousSign;
    document.getElementById("calc-previousOperator").textContent =
      state.previousOperator;
  }
}

/*
 * Set up the event handlers if the needed functions exist.
 */
if (typeof press1 !== "undefined")
  document.getElementById("calc-1")?.addEventListener("click", press1);
else document.getElementById("calc-1").disabled = true;
if (typeof press2 !== "undefined")
  document.getElementById("calc-2")?.addEventListener("click", press2);
else document.getElementById("calc-2").disabled = true;
if (typeof press3 !== "undefined")
  document.getElementById("calc-3")?.addEventListener("click", press3);
else document.getElementById("calc-3").disabled = true;
if (typeof press4 !== "undefined")
  document.getElementById("calc-4")?.addEventListener("click", press4);
else document.getElementById("calc-4").disabled = true;
if (typeof press5 !== "undefined")
  document.getElementById("calc-5")?.addEventListener("click", press5);
else document.getElementById("calc-5").disabled = true;
if (typeof press6 !== "undefined")
  document.getElementById("calc-6")?.addEventListener("click", press6);
else document.getElementById("calc-6").disabled = true;
if (typeof press7 !== "undefined")
  document.getElementById("calc-7")?.addEventListener("click", press7);
else document.getElementById("calc-7").disabled = true;
if (typeof press8 !== "undefined")
  document.getElementById("calc-8")?.addEventListener("click", press8);
else document.getElementById("calc-8").disabled = true;
if (typeof press9 !== "undefined")
  document.getElementById("calc-9")?.addEventListener("click", press9);
else document.getElementById("calc-9").disabled = true;
if (typeof press0 !== "undefined")
  document.getElementById("calc-0")?.addEventListener("click", press0);
else document.getElementById("calc-0").disabled = true;
if (typeof pressSign !== "undefined")
  document.getElementById("calc-sign")?.addEventListener("click", pressSign);
else document.getElementById("calc-sign").disabled = true;
if (typeof pressDecimal !== "undefined")
  document
    .getElementById("calc-decimal")
    ?.addEventListener("click", pressDecimal);
else document.getElementById("calc-decimal").disabled = true;
if (typeof pressDivide !== "undefined")
  document
    .getElementById("calc-divide")
    ?.addEventListener("click", pressDivide);
else document.getElementById("calc-divide").disabled = true;
if (typeof pressMultiply !== "undefined")
  document
    .getElementById("calc-multiply")
    ?.addEventListener("click", pressMultiply);
else document.getElementById("calc-multiply").disabled = true;
if (typeof pressSubtract !== "undefined")
  document
    .getElementById("calc-subtract")
    ?.addEventListener("click", pressSubtract);
else document.getElementById("calc-subtract").disabled = true;
if (typeof pressAdd !== "undefined")
  document.getElementById("calc-add")?.addEventListener("click", pressAdd);
else document.getElementById("calc-add").disabled = true;
if (typeof pressEqual !== "undefined")
  document.getElementById("calc-equal")?.addEventListener("click", pressEqual);
else document.getElementById("calc-equal").disabled = true;
if (typeof pressDelete !== "undefined")
  document.getElementById("calc-del")?.addEventListener("click", pressDelete);
else document.getElementById("calc-del").disabled = true;
if (typeof pressClear !== "undefined")
  document.getElementById("calc-clear")?.addEventListener("click", pressClear);
else document.getElementById("calc-clear").disabled = true;

/*
 * Automatically update the display after a button's click event handler is run.
 */
document.getElementById("calc")?.addEventListener("click", function (event) {
  if (event.target?.tagName === "BUTTON") updateDisplay();
});

/*
 * Turn on debug output if needed.
 */
if (debug) {
  document.querySelector(".calc-debug").style.display = "block";
}
