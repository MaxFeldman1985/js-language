//if logical expression contains both string and number, JS will convert string number
//if string doesn't contain a number a result of conversion will be NaN
//In any logical expression if there is NaN, then the result will be false
console.log(`"abc" > 23 is ${"abc" > 23}`);
console.log(`"abc" < 23 is ${"abc" < 23}`);
console.log(`"abc" != 23 is ${"abc" != 23}`);
/***************************************/ 
function stringProcessing(str){
    const strP = "" + str;
    console.log(`${str}[4] is ${str[4]}`);
    console.log(`length of ${str} is ${str.length}`);
    console.log
}


