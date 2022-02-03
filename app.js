/*obj.fun(arguments):
1.Encapsulation - data are encapsulated insude an object. Data
procassing is done through the object function.
2.Inheritance. Any encapsulation may inherit common
encapsulation with common data. Example: Employee and 
child may inherit yjr encapsulation of Person. It allows avoid
repiating the common data.
3. Polymorphism

function(arg){
    arg.toString() -> the method to string will be called in
    accordance as the type
}*/

const circle = {radius: 20, square: function(){
    return 3.14 * (this.radius ** 2)
}, perimeter: () => 2 * 3.14 * this.radius,
toString: function(){
    return `radius of this circle is ${this.radius}`
}}; 
console.log(`square = ${circle.square()}, perimeter = ${circle.perimeter}`);
//circle.square will be converted to square (circle) where circle as argument value
//"this" id the hidden parameter in the function. 
// in any arrow function there is no "this"
function square(circle){
    return 3.14 * (circle.radius ** 2);
}
console.log(`circle: ${circle}`)
const circle1 = {radius: 20,  perimeter: function() 
    {2 * 3.14 * this.radius},
toString: function(){
    return `radius of this circle is ${this.radius}`
}}; 
//circle1.square(); error because the method square is not defined inside object circle
function Circle(radius){
    this.radius = radius;
}
Circle.prototype.square = function(){
    3.14 * (this.radius ** 2);
}
Circle.prototype.perimeter = function(){
    return 2 * 3.14 * this.radius
}
Circle.prototype.toString = function(){
    return `radius of this circle is ${this.radius}`
} 
const circle10 = new Circle(10);
/*************************************HW definition */
const d = new Deferred()
d.then(function(res){console.log('1 ', res); return 'a';});
d.then(function(res){console.log('2 ', res); return 'b';});
d.then(function(res){console.log('3 ', res); return 'c';});
d.resolve('hello');
//Output:
//1 hello
//2 a
//3 b
/******************************task 2 */
//const myArray = new MyArray(10);
//myArray.get(index) - result 10
//write method get getting an index value and returning common value (set in constructor)
//myArray.set(index.value);
//write method set that sets a given value at a given index
//myArray.setValue(value) - sets new value in all elements of myArray
//Example:
/*const myArray = new MyArray(10);
console.log(myArray.get(100)); //display out 10
myArray.set(100, 500) //sets 500 at index 100
console.log(myArray.get(200)); //display out 10
console.log(myArray.get(100)) // display out 500
myArray.setValue(300);
console.log(myArray.get(100)) //display out 300*/

/************************************************************************* */
Array.prototype.filter = function(callbackPredicate){
    const res = [];
    this.forEach((n, i, a) => callbackPredicate(n,i,a) && res.push(n));
    return res;
}
const ar = [1,2,4,5,100];
ar.filter(n => n % 2 === 0).forEach(n => console.log(n));

