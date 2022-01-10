console.log("Hello World");
/*output for var: 3 3 3
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    })
}
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    })
}*/
// console.log(i);
const fun = function(a, b) {
    return a + b;
}
let a = 5;
/*console.log(a ** 2);
console.log(fun(10, 20));
console.log(a(10,20));
console.log(fun ** 2); NaN*/
console.log("12" + 12, '"12" + 12'); //JS defines that operatior + exists for strings, that's why number 12 will be converted to string
console.log("12" - 12); // JS defines that operators -,*,/ doesn't exist for strings, thart's why strings "12" will be converted to number
console.log("ab" - 12); // ......., NaN
//sometimes there is a need to explecit conversion from string to number
//"+" unary is simplest way for the explicit
console.log(`+"12" + 12 = ${+"12" + 12}`);
// HW #10
// 1.Just used only "a" and "s" i need print "ananas"
// 2.function calculate that can perform any arithmetic operations on two numbers (+,-,*,/);
// 3.write any example for running the following expression fun(5)(10,3);