const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;   
};

const sum = function(n) {
  let total = 0;

	for (let i = 0; i < n.length; i++) {
    total += n[i];
  }
  return total;
};

const multiply = function(n) {
  let total = 1;

  for (let i = 0; i < n.length; i++) {
    total *= n[i];
  }

  return total;
};

const power = function(base, exponent) {
  let total = 1;

  for (let i = 0; i < exponent; i ++) {
    total *= base;
  }
  
  return total;
};

const factorial = function(n) {
	let total = 1;

  for (let i = 0; i < n; i ++) {
    total *= (n - i);
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
