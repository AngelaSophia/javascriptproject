


var sum =10+10;
console.log(sum);
var myVar=45;
myVar++;
console.log(myVar);
var remainder;
remainder=11%3;
console.log(remainder );
// escaping strings
var myStr="my name is\"\Ayugi\"\and am from Homa bay";
console.log(myStr);
//  concatinating strings
var myStr="my name is "  + "Ayugi Sophia.  ";
console.log(myStr);
// appending variables with string
var someAdjective="worthwhile";
var myStr="am learning code";
myStr += someAdjective;
console.log(myStr);
// getting length of a String
var firstName="Lisa lab";
var lastName="Lovelace";
console.log(firstName.length);
console.log(firstName[0]);
console.log(lastName.length-1);
console.log(lastName[5]);


function words(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    return result;
}
console.log(words("cat","small","run","faster"));

// NESTED FUNCTIONS
var a=40;
function parent(){
    
function child(){
    var b=20;
    var c=60+a;
    var d=(a>+3);
    console.log(a,b,c,d);

}
child();
}
parent();

// CALL BACK Function
    console.log("plant the seeds");
setTimeout(function start(){
   console.log("water the plant");
},3000);
console.log("havesting seasion");

// DESTRUCTURING / OBJECTS
const person ={
    name:"Ayugi",
    age:23,
    country:"Kenya"
}
console.log(person.name);
console.log(person['country']);

// // BLOCK SCOPING
function foo(){
    var a=2;
    if(a>=2){
        var b=4;
        let c=6;
        while(c<8){
        let d=c*3;
        c++;
        console.log(a+b+d);
        }
    }
console.log(a);
console.log(b);

}
foo();
// // EXPRESION
var str="I scream,you sream, we all scream for ice cream";
var regEx="scream";
var result=str.match(regEx);
console.log(result);
// SWITCH STATEMENT
var country="Kenya"
switch(country){
   case ("Kenya"):
       console.log("have you ever been to Nairobi?");
       break;
       case ("Rwanda"):
           console.log("have you ever been to the airport?");
           break;
           case ("Uganda"):
          console.log("have you ever been to Kenya?");
          break;
          default:
              console.log("have you ever visited any country?");

}

