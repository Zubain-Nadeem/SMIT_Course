// Task no 1

// for (let i = 0 ; i < 5 ; i++) {
//     console.log(`Hello World ${i}`);
// }

// Task no 2

// for(let count = 1 ; count < 11 ; count++){
//     document.write(`${count} ${"<br />"}`);
// }

// Task no 3

// let tableName = +prompt("Enter a table");
// let tableLen  = +prompt("How many time do you want to multiply .");
// for(let count = 0 ; count <= tableLen ; count++){

//     document.write(`${tableName} x ${count} = ${tableName * count} ${"<br />"}`);
// }

// Task no 4

// let mobile = ["Apple" , "Nokia" , "Samsung" , "Vivo" , "Oppo"];

// for(let i = 0 ; i < mobile.length ; i++){
//     document.write(mobile[i] , "<br />")
// }

// Task no 5

// let furite = ["Apple" , "Bananan" , "Stawberry" , "Orange" , "Mango"];

// for(let i = 0 ; i < furite.length ; i++){

//     document.write(furite[i] , "<br />")
// }

// for(let i = 0 ; i < furite.length ; i++){
//     document.write(`Element at index ${i} is ${furite[i]} ${"<br />"}`)
// }

// Task no 6

// let N = prompt("Enter number of items ");
// let items= []

// for (let i = 0; i < N ; i++){
//     let item = prompt(`enter value for index ${i} `);
//     items.push(item);
// }

// document.write(`Number of items : ${N} items ${"<br />"} `)
// for (let i = 0 ; i < items.length ; i++){
//     document.write(`${items[i]} ${"<br />"}`)
// }

// Task no 7

// document.write("<h1> Counting <h1/>")
// for (let i = 1 ; i < 16;  i++){
//     document.write( `${i} ,`)
// }

// document.write("<h1> Reverse Counting <h1/>");

// for (let i = 10; i >= 1; i--) {
//     document.write(`${i} ,`);
// }

// document.write("<h1> Even <h1/>");
// for (let i = 0 ; i <= 20 ; i++ ){
//     if(i % 2 === 0 ) document.write(`${i} ,`)

// }

// document.write("<h1> Odd <h1/>");
// for (let i = 0 ; i <= 20 ; i++ ){
//     if(i % 2 !== 0 ) document.write(`${i} ,`)

// }

// document.write("<h1> Series <h1/>");
// for (let i = 2 ; i <= 20 ; i++ ){
//     if(i % 2 === 0 ) document.write(`${i}k ,`)

// }

// Task no 8

// let bakery =  ["Cake", "Apple Pie" , "Cookie" , "Chips" , "Patties"];
// let user = prompt("Welcome to our bakery what do you want to order ?")
// user.toLowerCase();
// let found = false;

// for (let i = 0; i < bakery.length; i++){

// if(user === bakery[i].toLowerCase()){
//     document.write(`${bakery[i]} is avaiable at index ${i} in our bakery .`)
//     found = true;
//     break;
// }
// }

// if(!found){
//     document.write(`Sorry We dont have it .`)
// }

// Task no 9

// let number = [23, 41, 54 , 81 ,83 ,91];
// let largest = 0;

// for(let i = 0 ; i < number.length ; i++){
//     if(number[i] > largest){
//         largest = number[i];
//     }
// }

// document.write(`Array Items ${number} <br />
//      The Largest Number : ${largest} <br />`)

// Task no 10

// let number = [23, 41, 54 , 81 ,83 ,91];
// let smallest = number[0];

// for(let i = 0 ; i < number.length ; i++){
//     if(number[i] < smallest){
//         smallest = number[i];
//     }
// }

// document.write(`Array Items ${number} <br />
//      The Smallest Number : ${smallest} <br />`)

// Task no 11

// let number = [23, 41, 54, 81, 83, 91];
// let smallest = number[0];
// let largest = 0;

// for (let i = 0; i < number.length; i++) {
//   if (number[i] > largest) { 
//     largest = number[i];
//   }

//   if (number[i] < smallest) {
//     smallest = number[i];
//   }
// }

// document.write(`Array Items ${number} <br />
//      The Smallest Number : ${smallest} <br />
//      The Largest number : ${largest}  `)






