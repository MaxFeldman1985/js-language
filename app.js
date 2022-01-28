/*************Objects */
/*const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person2 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
const person3 = person1;
console.log(`person1 == person2 is ${person1 == person2}`);
console.log(`"123" == 123 is ${"123" == 123}`);
console.log(`"123" === 123 is ${"123" === 123}`);
console.log(`person1 == person3 is ${person1 == person3}`);
console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) == JSON.stringify(person2)}`);
console.log(JSON.stringify(person1));
console.log(person1.toString());
console.log(`name of person1 is ${person1.name}`);
console.log(`person1 lives in city ${person1.address.city}`);
Object.keys(person1).forEach(k => console.log(k)); // array of the object keys
Object.values(person1).forEach(v => console.log(v));//array of the object values
Object.entries(person1).forEach(e => console.log(e)); //array of arrays
function createrAddress(city, street) {
    return {city, street}
}
function createPerson(id, name, address) {
    return {id, name, address};
}
const persons = [
    createPerson(123,"Vasya", createrAddress("Rehovot", "Parshani")),
    createPerson(124,"Olya", createrAddress("Rehovot", "Plaut")),
    createPerson(125,"Tolya", createrAddress("Tel-Aviv", "Dizengoff")),
]
/*****************************HW 14 definition task3 */
//TODO applying methods of arrays you should find the persons living in Rehovot and display them
/**************************************HW 14 definition task 4 */
//TODO move the persons that don't live in Rehovot at begining of the array persons 

/*function personsRehovot(persons,city)
{
    return persons.filter(p => p.address.city === city);
}
console.log(personsRehovot(persons, 'Rehovot'));
/*function movePersonsNoCityAtBegining(persons, city){
    const personsRes = getPersonsCity(persons, city);
    personsRes.unshift(...persons.filter(p => p.address.city !== city));
    return personsRes;
}
console.log(movePersonsNoCityAtBegining(persons, 'Rehovot'));*/

/*****************************cw 15*********** */
//input : ["lmn", "Yaichko" , "d", "lmn", "a" ,"lmn", "a","d"]
//output: lmn -> 3
//          a -> 2
//          d -> 2
//    Yaichko -> 1
function displayOccurences(ar){
    
    const res = {};
    for(let i = 0; i < ar.length; i++){
        if(res[ar[i]] === undefined){
            //string as content of array[i] occures first time
            res[ar[i]] = 1;
        }else{
            res[ar[i]] = res[ar[i]] + 1;
        }
    }

    //console.log(res); -> intermedate debug log
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))

}
const ar = ["lmn", "Yaichko" , "d", "lmn", "a" ,"lmn", "a","d"];
displayOccurences(ar);
/****************************************HW #15 task 1 */
//refactoring of displayOccurences 
//lines from 57 to 65 should be a separated function
//that separated function should apply standard methods like reduce

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
function displayOccurences(ar){
    const res = {};
   /* for(let i = 0; i < ar.length; i++){
        if(res[ar[i]] === undefined){
            //string as content of array[i] occures first time
            res[ar[i]] = 1;
        }else{
            res[ar[i]] = res[ar[i]] + 1;
        }
    }*/
    res = ar.reduce(ar,(max,cur) => cur === undefined ?  )
    Object.entries(res).sort((e1, e2) => {
        const res = e2[1] - e1[1];
        return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e => console.log(`${e[0]} -> ${e[1]}`))

}
const ar = ["lmn", "Yaichko" , "d", "lmn", "a" ,"lmn", "a","d"];
displayOccurences(ar);