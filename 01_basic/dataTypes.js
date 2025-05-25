/* Different types of DataTypes:

(i.) Pimitive DataTypes:
    => String
    => Number
    => Boolean
    => Null
    => Undefined
    => Symbol
    => BigInt


(ii.) Non-Primitive DataTypes:
    => Array
    => Object
    => Function
*/

let id = "Garv";  //String
let age = 20;  //Number
let answer = true;  //Boolean
let negativePoint = null;  //Null
let income;  //Undefiend
let collegeId = Symbol("2319991");  //Symbol
let bigData = 23136462864n;  //BigInt

//Checking
console.log(typeof id);
console.log(typeof age);
console.log(typeof answer);
console.log(typeof negativePoint);
console.log(typeof income);
console.log(typeof collegeId);
console.log(typeof bigData);


const arr = ["Iron Man","Hulk","Thor"]  //Array
let myObj={
    name: "Garv",
    age: 20

}  //Object
const myFunction = function(){
    console.log("This is a Function");
}  // Function

console.log(typeof arr);
console.log(typeof myObj);
console.log(typeof myFunction);