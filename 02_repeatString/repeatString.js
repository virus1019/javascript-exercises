const repeatString = function(word, number) {
    if (number < 0) return "ERROR";
    let a = '';
    for (i = 0; i < number; i++){
        a += word;
    }
    return a;
};

// Do not edit below this line
module.exports = repeatString;
