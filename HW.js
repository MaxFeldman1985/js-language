  
  /****************************************HW #15 task 1 */
//refactoring of displayOccurences 
//lines from 57 to 65 should be a separated function
//that separated function should apply standard methods like reduce
  //function displayOccurences(ar) {
    //const res = {};
    /*for(let i = 0; i < ar.length; i++){
         if(res[ar[i]] === undefined){
             //string as content of array[i] occures first time
             res[ar[i]] = 1;
         }else{
             res[ar[i]] = res[ar[i]] + 1;
         }
     }*/
    /* const res = ar.reduce((acc,cur)=>acc[cur] ? ++acc[cur] : acc[cur] = 1, 0);
    
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`));

}
const ar = ["lmn", "Yaichko" , "d", "lmn", "a" ,"lmn", "a","d"];
displayOccurences(ar);
  
  /**********************************************task 2 */
//write useful function countBy(ar,callbackFunction) that returns object with
// keys as grouping  criteria and values as the occurrence counts
// keys should be sorted (optional)
//where array - any array, callbackFunction - function returning grouping criteria
// examples:
//const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(arr, element => Math.floor(element))
//result: statistics -> {"6": 3, "7": 1}
//example 2:
// const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(arr, element => element.lenhth)
//result: statistics -> {"4": 3, "2": 1}
//example 3
//const arr = [{age: 25, id: 123, name:'Artur'},{age: 22, id: 123, name:'Artur'},
//{age: 35, id: 123, name:'Artur'},{age: 25, id: 123, name:'Artur'}]
//const statistics = countBy(arr, element -> element.age)
//result statistics -> {"25: 2, "35":1, "22":1}
  
function countBy (ar,callbackFunctionC){
const occurrences = ar.reduce(callbackFunctionC(acc, curr), {
    return: acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
  
  console.log(occurrences);
}
const arr1 = [6.4, 7.3, 6.5, 6.9];
countBy(arr1);