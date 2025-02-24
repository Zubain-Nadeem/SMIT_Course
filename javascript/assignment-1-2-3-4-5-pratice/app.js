// Pratice quesiton 1 "Concepts Used: Alerts, Variables, String Concatenation, Prompt"

// let firtName = prompt("Enter you first name ?");
// let lastName = prompt("Enter your last name ?");
// let age = +prompt("Enter your age ?");

// alert("Hello " + firtName + " " + lastName + " you are " + age + " years old");
// alert(`Hello ${firtName} ${lastName} you are ${age} old .`);

// Pratice question 2 Concepts Used: Math Expressions, Prompt, If-Else , basic calculator

// let firstNumber = +prompt("Enter a number ?");
// let secondNumber = +prompt("Enter another number ?");
// let operator = prompt("Enter operatation do you want to performe .");
// let result;

// if (operator === "+") {
//   result = firstNumber + secondNumber;
//   document.write(`first number : ${firstNumber}
//                  <br /> second number : ${secondNumber}
//                  <br /> operator : ${operator}
//                  <br /> result : ${result}`);
// }
// else if (operator === "-") {
//   result = firstNumber - secondNumber;
//   document.write(`first number : ${firstNumber}
//                    <br /> second number : ${secondNumber}
//                    <br /> operator : ${operator}
//                    <br /> result : ${result}`);
// }
//  else if (operator === "*") {
//   result = firstNumber * secondNumber;
//   document.write(`first number : ${firstNumber}
//                    <br /> second number : ${secondNumber}
//                    <br /> operator : ${operator}
//                    <br /> result : ${result}`);
// }
// else if (operator === "/") {
//   result = firstNumber / secondNumber;
//   document.write(`first number : ${firstNumber}
//                    <br /> second number : ${secondNumber}
//                    <br /> operator : ${operator}
//                    <br /> result : ${result}`);
// }
// else if (operator === "%") {
//   result = firstNumber % secondNumber;
//   document.write(`first number : ${firstNumber}
//                    <br /> second number : ${secondNumber}
//                    <br /> operator : ${operator}
//                    <br /> result : ${result}`);
// } else {
//   document.write(`Wrong operator enter + - * / %`);
// }

// Pratice question 3 Concepts Used: If-Else, Math Expressions, Prompt

// let num = +prompt("Enter a number ");

// if (num % 2 === 0){
//   document.write(`Number ${num} its a even number `);

// }
// else if (num % 2 !== 0){
//   document.write(`Number ${num} its a odd number .`)
// }

// else{
//   document.write(`its not a number `)
// }

// partice questio 4  Concepts Used: Arrays, For Loop, Prompt

let fruits = ["Apple", "Banana", "Stawberry", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  let user = prompt("Which fruite do you want to add in the fruit basket .");
  fruits.push(user);
    document.write(`Original Array : ${fruits} <br />
    user fruit : ${user} <br />
    updated Array : ${fruits}`);
}
