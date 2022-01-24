const arr = [-15,8,22,85,1,56,13,-4];
let str = '';
function  mapper(n,i,a) {
    return `<li>${i + 1} of ${a.length} - ${n}</li>`;
}
function myForEach(ar,callback) {
    for (let i = 0; i < ar.length; i++){
        callback(ar[i], i , ar);
    }
}


function  myMap(ar,callback) {
    const res = [];
    function forEachCall(n, i, a) {
       res.push(callback(n, i, a));
    }
    myForEach(ar, forEachCall);
    return res;
    }

myForEach(arr, n => console.log(n));
const array = myMap(arr, mapper);
console.log(array);
/***********************************************************cw 14 */
const ar20 = [13,17,20,23,2,40];
const arEvenOdd = ar20.filter((n, i, a) =>a.length % 2 == 0 ? n % 2 == 0 : n % 2 ==1);
console.log(arEvenOdd);
/************************************HW 14 definition task 1 */
// TODO write myFilter(array, callback) based on myForEach
//callback - function with three possible parametrs: cur.element, cur.index, reference of array
/************************************************************ */
const res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur)=>cur > max ? cur : max, ar20[0]);
console.log(max);
console.log(res1);
//reduce with no second argument
res1 = ar20.reduce((res, cur) => res + cur);
// TODO write myReduce(array, callback, initialResult) based on myForEach
//callback - function with three possible parametrs: cur.element, cur.index, reference of array
//if the user call doesn't contain a second argument, then the first element of the array will be 
//considered as initial result