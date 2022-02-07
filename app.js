/* Functional object is a function. Any function
belongs to prototype of Function.prototype
const f = function(){.....}*/
class Person{
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    toString(){
        return `id: ${this.#id}; name: ${this.#name};`;
    }
}
const person = new Person(123, 'Valodya');
console.log(`person1 is ${person}`);

    
  class Employee extends Person {
    #salary;
    constructor(id,name,salary){
        super(id,name); //call the constructor of the class Person
        this.#salary = salary;
    }
        computeSalary(){
        return this.#salary;
           }
    toString(){
        return super.toString() + ` salary: ${this.computeSalary()}`;
    }
}
const person2 = new Employee(124, "Sasha Banks", 500000);
console.log(`person2 is ${person2}`)
console.log(typeof(person2))
console.log(person2.constructor.name)// only this way JS allow getting constructor name
class Child extends Person{
    #kindergarten
    constructor(id, name, kindergarten){
        super(id, name);
        this.#kindergarten = kindergarten;
    }
    getKindergarten(){
        return this.#kindergarten;
    }
    toString(){
        return `${super.toString()} kindergarten: ${this.#kindergarten}`;
    }
}
const person3 = new Child(125, 'Yakov', 'Shalom')
console.log(`person 3 is ${person3}`)

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage){
        super(id, name, salary)
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary(){
        return super.computeSalary() + this.#hours * this.#wage
    }
    
}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
console.log(`person4 is ${person4}`)

 