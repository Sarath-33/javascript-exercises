// const removeFromArray = function (arr, element) {
//     const newArray = [];
//     arr.forEach(item => {
//         if (!element.includes(item)) {
//             newArray.push(item)
//         }
//     });
//     return newArray;
// };
const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};
console.log(removeFromArray([1,2,3,4],3));

// Do not edit below this line
module.exports = removeFromArray;
