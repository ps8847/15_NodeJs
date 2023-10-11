// 1. when only one function
// const add = (a, b) => {
//     return a + b;
// }

// module.exports = add;


// 2. for more than 1 function 

const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul };