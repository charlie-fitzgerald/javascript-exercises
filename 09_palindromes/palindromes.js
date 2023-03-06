const palindromes = function (str) {
    let re = /[^A-Za-z0–9]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');

    let reverseStr = lowRegStr.split('').reverse().join('');

    return lowRegStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
