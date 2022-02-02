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
}, perimeter: () => 2 * 3.14 * this.radius};
console.log(`square = ${circle.square()}, perimeter = ${circle.perimeter}`);
//circle.square will be converted to square (circle) where circle as argument value
//"this" id the hidden parameter in the function. 
// in any arrow function there is no "this"