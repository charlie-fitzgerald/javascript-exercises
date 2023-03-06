const convertToCelsius = function(fTemp) {
  //subtract 32 and multiply by .5556 (or 5/9).
  let temp = (fTemp - 32) * (5/9);

  if (temp === 0) {
    return 0;
  } else {
    return Number(temp.toFixed(1));
  }
};

const convertToFahrenheit = function(cTemp) {
  //multiply by 1.8 (or 9/5) and add 32
  let temp = (cTemp * (9/5)) + 32;

  if (temp === 0) {
    return 0;
  } else {
    return Number(temp.toFixed(1));
  } 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
