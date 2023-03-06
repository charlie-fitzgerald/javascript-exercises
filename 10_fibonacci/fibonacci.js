const fibonacci = function(memberNum) {
    //calculate fibonacci sequence up to sequence member number given
    let fibArray = [1, 1];

    let num = parseInt(memberNum);

    if (num < 1) {
        return 'OOPS';
    }

    for (let i = 0; i < num; i++) {
        let newFibNum = fibArray[fibArray.length -1] + fibArray[fibArray.length -2];
        fibArray.push(newFibNum);
    }


    //return the number from the sequence
    return fibArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
