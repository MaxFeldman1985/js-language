console.log("Hello World");
//Output for var: 3 3 3
// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     })
// }
// for (var i = 0; i < 3; i++) {

//             console.log(i);

//     }
//     console.log(i);
// const fun = function (a, b) {
//         return a + b;
// }
let a = 5;
// console.log(a ** 2);
// console.log(fun(10, 20));
//console.log(a(10, 20)); error
//console.log(fun ** 2); NaN
// console.log("12" + 12, '"12" + 12'); //JS defines that operator + exists for strings, that's why number 12 will be converted to string
// console.log("12" - 12); //JS defines that operator - doesn't exist for strings, that's why string "12" will be converted to number
// console.log("ab" - 12); //....JS will try covert "ab" to number; as a result of this there will be value NaN. 
//sometimes there is a need to explicit conversion from string to a number
//"+" unary is the simplest way for the explicit conversion of a string to a number
// console.log(`+"12" + 12 = ${+"12" + 12}`)
// Hw #definition
//1. using only two letters "a", "s" print out word ananas case insensitive AnaNAS, 
//2. write function calculate that can perform any arithmetic operation on two numbers (*, /, +, -);
//3. write any example for running the following expression fun(5)(10, 3)
/********************************************************************** */
/***************************** HW 10 solution ******************************* */
console.log('1. ', `a${+'a'}as`); //1
//2.
function calculate(op1, op2, compute) {
        return compute(op1, op2);
}
console.log('2. ', calculate(10, 20, function (a, b) {
        return a + b;
}))
//3.
function fun(index) {
        if (index == 5) {
                return function (a, b) {
                        return a + b;
                }
        } else {
                return function (a, b) {
                        return a - b
                }
        }
}
console.log('3. ', fun(5)(10, 3));