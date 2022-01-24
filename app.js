const ar = [-10, 50, -7, 80,40];
ar.push(70);
//str - "-10#50#-12#80#40#70#"
/*******solution based on substring */
//let str = '';
//ar.forEach(function(n){
//    str += n + '#';
//})
//str = str.substring(0, str.length - 1);
/*const lastSharpIndex = str.lastIndexOf('#');
const str1 = str.substring(0, str.lastIndexOf('#'));
const str2 = str.substring(lastSharpIndex + 1);
str = str1 + str2;*/
/*******solution based on forEach from second number */
/*const ar1 = ar.slice(1);
let str = '' + ar[0];
ar1.forEach(n=> str += '#' + n);
console.log(str);*/
/****************printing out sequense nymber of element, element and length of arry  */
//1 of 5 - -10; ...
ar.forEach((n, i, a) => console.log(`${i+1} of ${a.length} - ${n}`));
/****************HW#13 task1 defenition */
//write function myForEach(array, callback-function);
//array - being interated array
//callback-function - function that will be called for each element of array
//callback-function should take arguments: current element, curent index, being interated array
// example of standart forEach: ar1.forEach(n=> str += '#' + n);
//example of myForEach: myForEach(array, n=> str += '#' + n);

/*********************************************** */
//method "map"
//use case of applying method map: you eant to create new array with element that are recived as ewsult
const ar2 = ar.map(n => n * 2);
console.log(ar2);
const ar3 = ar.map(n => "")