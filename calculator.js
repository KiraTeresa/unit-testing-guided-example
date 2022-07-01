function sum(a, b) {
  let newA = 0;
  let newB = 0;
  if (a) {
    newA = a;
  }
  if (b) {
    newB = b;
  }
  return newA + newB;
}

function subtract(a, b) {
  let newA = 0;
  let newB = 0;
  if (a) {
    newA = a;
  }
  if (b) {
    newB = b;
  }
  return newA - newB;
}

function divide(a, b) {
  if (!b) {
    throw new Error('Cannot divide by 0');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
