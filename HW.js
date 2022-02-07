/******************************************************HW 17 definition */
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

const persons = [
    new Child(100, 'Gavrik', 'Shalom'),
    new Child(101, 'Olya', 'BokerOr'),
    new Child(102, 'Klaus' ,'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Terens', 1000, 10, 100)
];


function countOfPersonType(persons, type){
return persons.filter(n => n.constructor.name === type).length;
}
console.log(countOfPersonType(persons, 'WageEmployee'))
    //return count of person s of the given type
    //countOfPersonType(persons, 'WageEmployee') ---> 1

function computeSalaryBudget(persons){
    //return total salary of all employee objects in the given array
    //Example:
    //computeSalaryBudget(persons) --->3000
    const allEmployee = persons.filter(p => !!p.computeSalary);
    return allEmployee.reduce((res, cur) => res + cur.computeSalary(), 0);
}
console.log(computeSalaryBudget(persons));
function countChildrenKindergarten(persons, kindergarten){
    // returns number of children in the given kindergarten
    //Example:
    //countChildrenKindergarten(persons, 'Shalom') ---> 1
    const allChildren = persons.filter(n => n.constructor.name === type);
    return allChildren.reduce((res,cur) => cur.getKindergarten() === kindergarten ? res + 1, 0)
}
const type = "WageEmployee";
const kindergarten = "Shalom";
console.log(`function countChildrenKindergarten ${kindergarten} expected ${expected}`)
function testOutput(fun, expected){
    console.log(`function ${fun.name}; expected result: ${expected} ; actual result: ${fun} `)
}