

const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        let index = arr.indexOf(arg);

        if (index > -1 && arr[index] === arg) {
            arr.splice(index, 1);
        }
    }    

    return arr;    
};

// Do not edit below this line
module.exports = removeFromArray;
