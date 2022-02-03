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
console.log(`my person is ${person}`);
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
        return super.toString() + ` salary: ${this.#salary}`;
    }
}
const person2 = new Employee(124, "Sasha Banks", 500000);
console.log(`person2 is ${person2}`)