const repeatString = function(words, times) {
    if(times < 0) return
    let string = '';
    for(let i = 0; i < times; i++){
        string += words
    }
    return string
};
console.log(repeatString('bob', 2));


// Do not edit below this line
module.exports = repeatString;
