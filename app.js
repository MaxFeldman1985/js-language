function getRandomNumber(min,max){
    //TODO
    //min - minimal value
    //max - maximum value
    //Example: getRandomNumber(0,1) -> return number 0 or 1
    //if min > max, then you should swap values from min to max
    //swap should be without editional variable in one line code
    min <= max || ([min,max] = [max,min]);
    return Math.floor(Math.random()*((max + 1)-min) + min);
}
console.log(getRandomNumber(11, 1));
//write the fubction concatiate(prefix){...}
// that by using the following code 
//const concatApp = concatinate('App - ');
//const concatMessage = concatApp('Test status: Done");
//console.log(concatMassage);
//there should be displayed out App - Test status: Done 

function concatinate(prefix){
   //const res = ' ' + prefix;
   //return function (f){return res + f};
   return s => prefix + s;
}
const concatApp = concatinate('App - ');
const concatMessage = concatApp('Test status: Done');
console.log(concatMessage);