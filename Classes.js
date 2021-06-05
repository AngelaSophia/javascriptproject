//This is a constroctor function
//When creating a constrocto using a function you start with this keyword and a new keyword

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

//console.log(numbers.slice());
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

function student(name){ //used to check if the paramater passed is an array or note.
    return Array.isArray(name);
    
}
console.log(student(["Ayugi","Sophia","Angela"]));

const numbers=[2,5,8,9,7];
const square=numbers.map(x => x*2);
console.log(square);

const digits=[2,4,6,7,9];
const result=digits.map(n => n*n);  // MAP is used to call specific function in Element. 
console.log(result);

let sophia={name:'Ayugi Angela'},
     laura={name:'Betty Laura'},
     brawlian={name:'Annemie Brawlian'};
let userRoles=new Map();
console.log(typeof(userRoles));
//console.log(userRoles instanceof Map);
 console.log(userRoles.set(laura, 'kid'));  
 
 //creating a new map object
 let canditaes=new Map([
     [sophia,'admin'],
     [laura,'kid'],
     [brawlian,'first']
 ]);
 console.log(canditaes.get(sophia));
 console.log(canditaes.get(laura));
 console.log(canditaes.get(brawlian));
 console.log(canditaes.size);
 console.log(typeof canditaes);
 







