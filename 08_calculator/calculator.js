const add = function(...nums) {
	return nums.reduce((sum, e) => sum + e)
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.reduce((sum, e) => sum + e); 
  }
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(element => {
    total *= element;
  });

  return total;
}

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }	else {
    return (factorial(num - 1)) * num;
  }
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
