const sumAll = function(firstNum, secondNum) {
    if (Number.isInteger(firstNum) === false || Number.isInteger(secondNum) === false || firstNum < 0 || secondNum < 0)
    {
        return 'ERROR';
    }

    if (firstNum > secondNum){
        let tmp = firstNum;
        firstNum = secondNum;
        secondNum = tmp;
    }

    total = Math.abs(firstNum - secondNum);
    let sum = firstNum;
    let addedNum = firstNum;

    for (i = 0; i < total; i++){
        addedNum += 1;
        sum += addedNum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
