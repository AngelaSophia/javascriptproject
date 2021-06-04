// Classes using functions
// When creating a class using a function you start with this keyword and a new keyword

function Mango(types){
    this.types=types;
    this.color="green";
    this.getInfo=getMangoInfo;

}
function getMangoInfo(){
    return this.color + '  ' + this.types +  'mango';
  
}

// LIST ARE SPECIAL TYPE OF VARIABLE THAT STORES DIFFERENT ELEMENTS
var numbers=["one","two","three","four"];
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[3]);

console.log(numbers.slice());
console.log(numbers);


var fruits;
fruits=["Banana","Mango","Apples","Oranges"];
console.log(fruits.length);
console.log(fruits.push("Lemon"));
console.log(fruits.length);


console.log(typeof fruits);
// ARRAY USING CONST

const cars=["Saab","BMW","Volvo"];
console.log(cars.length);
cars[0]="Toyota";
console.log(cars);
console.log(cars.shift());
console.log(cars.pop());
console.log(cars);



