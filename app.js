//if logical expression contains both string and number, JS will convert string number
//if string doesn't contain a number a result of conversion will be NaN
//In any logical expression if there is NaN, then the result will be false
/*console.log(`"abc" > 23 is ${"abc" > 23}`);
console.log(`"abc" < 23 is ${"abc" < 23}`);
console.log(`"abc" != 23 is ${"abc" != 23}`);
/***************************************/ 
/*function stringProcessing(str){
    const strP = "" + str;
    console.log(`"${str}"[4] is ${str[4]}`);
    console.log(`length of "${str}" is ${str.length}`);
    console.log(`"${str}" includes "abc" is ${strP.includes("abc")}`);
    console.log(`substring of "${str}" beginning from index 2 to index 5 is ${strP.substring(2,5)}`);
    console.log(`index of substring "ll" in the "${str}" is ${strP.indexOf("ll")}; last index of letter l in the ${str} is ${strP.indexOf("ll")}; ${strP.lastIndexOf("ll")}`);
}
stringProcessing("abcd*lmn*ll(oo&&tt");
//Home Work 11
function encode(num, base){
    //base from 2 to 10 
    let res = "";
    do{
           const digit = Math.trunc(num % base); 
           const symb = getSymbol(digit);
           res = symb + res;
           num = Math.trunc(num/base);
      }while(num >= 1);
      return res;
}
function getSymbol(digit){
   return "" + digit;//it will work only for base <=10
}
console.log(encode(10,2))*/
//HW  write function
//
function encode(num, codingString){
    //getSymbol(digit, codingString)
    //base = length of codingString
    //algorythm the same as specifed above
    let res = "";
    do{
           
           const digit = Math.trunc(num % codingString); 
           const symb = getSymbol(digit, codingString);
           res = symb + res;
           num = Math.trunc(num/codingString);
      }while(num >= 1);
      return res;
}
function getSymbol(digit,codingString){
    return "" + digit + codingString;
}
console.log(encode(61,15));