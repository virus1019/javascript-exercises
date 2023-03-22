const reverseString = function(word) {
    let reversedWord = []; let jointReversedWord = [];
    let strLen = word.length;
    let strArray = [];

    for (i = 0; i < strLen; i++){
        strArray[i] = word[i];
    }
    
    reversedWord = strArray.reverse();
    jointReversedWord = reversedWord.join('');
    return jointReversedWord;
    };

// Do not edit below this line
module.exports = reverseString;
