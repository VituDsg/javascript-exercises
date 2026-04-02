const fibonacci = function(value) {
    let total = 0;
    
    let currentNumber = 1
    let previousNumber = 0

    if(value < 0) {
        return "OOPS";
    }

    for (let i = 0; i < value; i++) {
        previousNumber = currentNumber;
        currentNumber = total;

        total = currentNumber + previousNumber;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
