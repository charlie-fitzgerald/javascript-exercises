const sumAll = function(num1, num2) {
    let sum = 0;
    let startNum;
    let endNum;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
   
    if (num1 === num2) {
        sum = num1;
    } else if (num1 < num2) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }

    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
