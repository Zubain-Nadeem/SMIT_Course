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

// let fruits = ["Apple", "Banana", "Stawberry", "Mango"];
// console.log(fruits);

// for(let i = 0 ; i < fruits.length ; i++){
//   console.log(fruits[i]);
// }

// let userFruit = prompt("Enter Which fruite do you want to add .");

// fruits.push(userFruit);

// console.log(`Updated array ${fruits}`);

// for(let i = 0 ; i < fruits.length ; i++){
//   console.log(fruits[i])
// }


// Pratice questio no 5 Simple login system 

// let user = prompt("Enter your user name ?");
// let userPass = +prompt("Enter your password ?");

// if (user.toLowerCase() === "ali" && userPass === 12345){
//   alert(`Login Successfully`)
// }

// else{
//   alert(`Incorrect username or password`)
// }

// Pratice question no 6 For Loop, Math Expressions, Prompt  table

// let table = +prompt("Enter table number do you want to multiply ")
// let tableLen = +prompt("Enter length how many times do you want to multiply for example 10 , 20 .....");

// for (let i = 1 ; i <= tableLen; i++){
//   console.log(`${table} x ${i} = ${table * i}`)
// }

// Pratice question no 7 Concepts Used: Arrays, For Loop, Math Expressions

// let numbers = [4,5,6,3,6,3,5]
// let sum = 0;

// for (let i = 0 ; i < numbers.length ; i++){
//   sum = sum + numbers[i]
// }

// alert(sum)