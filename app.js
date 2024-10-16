// function greet(){
//     console.log("Hello there");
// }

// greet();

// function sayHello(username){
//     console.log(`Hello ${username}`);
// }

// sayHello("I am BSCS 2");

// function add(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }

// const result = add(10, 40);
// console.log(result);

// const greetings = function (user){
//     console.log(`Hello ${user}`);
// }

// greetings("I am a developer");

// let textMessage = "Hi";
// function displayMessage() {
//     console.log(textMessage);
// }

// displayMessage();

// function showMessage() {
//     let localMessage = "Hello"
//     console.log(localMessage);
// }

// showMessage(); //work fine
// console.log(localMessage); //Error: localMessage is not defined outside the function

// function showCallFunc(fn){
//     const value = 10;
//     fn(value); //calling the callback function
// }

// showCallFunc(function (value){
//     console.log(value);//callback function logs the value
// });

// function greet(name, cb){
//     console.log(`Hello ${name}`);
//     //cb();
// }

// function callMe(){
//     console.log("I am a callback function");
// }

// greet("Peter Pan", callMe);

const person = {
    name: "BSCS 2",
    age: 21,
    greet: function (){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    },
};

console.log(person.greet()); 