  /*************************************HW definition */
function Deferred(){
    this.functions = []
};

  Deferred.prototype.then = function(thenFn){
    this.functions.push(thenFn);
}
  Deferred.prototype.resolve = function(res){
    this.functions.forEach(fn => res = fn(res));
}
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


function MyArray(initialValue){
    this.value = initialValue;
    this.array = [];
}
MyArray.prototype.setValue = function(value){
    this.value = value;
    this.array = [];
}
MyArray.prototype.set = function(index,value){
    this.array[index] = value;
}
MyArray.prototype.get = function(index){
    return this.array[index] ?? this.value;// if this.array [index] eather undefined or null returns this.value
}

const myArray = new MyArray(10);
console.log(myArray.get(100)); //display out 10
myArray.set(100, 500) //sets 500 at index 100
console.log(myArray.get(200)); //display out 10
console.log(myArray.get(100)) // display out 500
myArray.setValue(300);
console.log(myArray.get(100)) //display out 300
myArray.set(20,0);
console.log(myArray)