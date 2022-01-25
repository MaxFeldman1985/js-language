/*************Objects */
const person1 = {id: 123, name: 'Moshe', address: {city: 'Lod', street: 'Sokolov'}};
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

function personsRehovot(ar,callback){
    
}