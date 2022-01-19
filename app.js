/***************************Arrays */
const ar = [2, 100, 9, 80];
/*ar.sort(function (a, b){
    return a - b;
});
ar.sort((a,b) => a - b)
console.log(`ar is ${ar.toString()}`);
/***********HomeWork 12 defenition*/
const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27]//четные в порядке возрастания, затем нечетные в порядке убывания
//expexted [-10,4,28,40,27,25,17,15,13]
//tsk: write a comporator (a comporator returns < 0 if first less then second, >0 if first greater them second, == if first = second)
/************************************************/
//adding element/s at end of an array
ar[ar.length] = 200;
console.log(ar);
ar.push(300, 25);
console.log(ar);
const ar1 = [-8, 30, -57];
//ar.push(ar1); there will be added array but not separated numbers
// if you want to add separated numbers you should apply a spread operator ...
ar.push(...ar1);
console.log(ar);
//for adding elements at begening of an array there is method "unshift"
//everything has been said about "push" will work "unshift" only unlike "push" unshift method adds elements at beginning
const ar2 = [27,35];
ar.unshift(...ar2);
console.log(ar);
//abc123drtyugr
//method splice for inserting or replacing any elements in any place
//first argument - index for inserting or replacing
//second argument - number of the deleted elements (if 0 than splice will be applied for enserting)
//third argument designates sequence of being inserted element like push/unshift
ar.splice(2,0,1,2);
console.log(ar);
//removing(deliting)
let el = ar.pop();// remove the last element and return it
//el = -57; -57 will be removed from array ar
el = ar.shift();//removes the first element and return it
//el = 27; 27 will be removed from array
console.log(el, ar);
ar.splice(3, 5); //remove 5 elements beginning from the one at index 3
console.log(ar);
//includes, indexOf
//two demensional arrays
const matrix1 = [[1, 2, 3],[4, 5, 6], [7, 8, 9], [3, 4, 5]];
const matrix2 = [[100,20], [50, -5], [34,28]];
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++){
        let row = '';
      for(let j = 0; j < matrix[i].length; j++){
          row = row + matrix[i][j] + '  ';
      }
      console.log(row);
}
}
displayMatrix(matrix1);
/***************HM12 definition */
//write function
function matrixTransp(matrix){
    //returns matrix with columns that are rows of the source matrix and
    //rows that are columns of the source matrix
    //example: source matrix [[1,2], [3,4], [5,6]]
    // result matrix [[1,3,5], [2,4,6]] 
}
