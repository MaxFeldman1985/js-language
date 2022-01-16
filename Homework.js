function encode(num, codingString){
    
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