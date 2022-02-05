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

const persons = [
    new Child(100, 'Gavrik', 'Shalom'),
    new Child(101, 'Olya', 'BokerOr'),
    new Child(102, 'Klaus' ,'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Terens', 1000, 10, 100)
];

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
console.log(`${persons}`);

function getStatObj(ar){
    return ar.reduce((res,cur) => {
    res[cur] = res[cur] === undefined ? 1 : res[cur] + 1;
return res;
},{})
}

function countOfPersonType(persons, type){
    //return count of persons of the given type
    //countOfPersonType(persons, 'WageEmployee') ---> 1
}
function computeSalaryBudget(persons){
    //return total salary of all employee objects in the given array
    //Example:
    //computeSalaryBudget(persons) --->3000
}
function countChildrenKindergarten(persons, kindergarten){
    // returns number of children in the given kindergarten
    //Example:
    //countChildrenKindergarten(persons, 'Shalom') ---> 1
}