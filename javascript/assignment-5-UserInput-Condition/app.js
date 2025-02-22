// Task no 1 

// let user = prompt("What is your name ?");

// alert(`Welcom , ${user}`);

// Task no 2 

// let table = +prompt("Enter a table number do you want to multiply ." , "5");
// let tableLen = +prompt("Enter number how many times do you want to muliply the number .");


// for(let i = 1 ; i <= tableLen ; i++){
//     document.write(`${table} x ${i} = ${table * i} <br />`)
// }

// Task no 3

// let city = prompt("Enter you city .");
// city = city.toLowerCase();

// let kar = "Karachi";
// kar = kar.toLowerCase();

// if(city === kar){
//     alert("Welcome to city of lights .")
// }

// Task no 4 

// let gender = prompt("Enter your gender .");
// gender = gender.toLowerCase();

// let man = "Male";
// let women = "Female"

// if(gender === man.toLowerCase()){
//     document.write(`Good Morning Sir`)
// }
// else if(gender === women.toLowerCase()){
//     document.write(`Good Morning Ma'am`)
// }

// else{
//     document.write(`Good morning`)
// }

// Task no 5

// let user = prompt("Enter traffic light color ?").toLowerCase();

// if(user === "red"){
//     document.write(`Vechical must stop`);
// }
// else if (user === "yellow"){
//     document.write(`Vechical should get ready to move `);
// }
// else if(user === "green"){
//     document.write(`Vechical can move now `);
// }

// else{
// document.write(`Invalid color wirte red / green / yellow`)
// }


// Task no 6

// let user = +prompt("Enter your age");
// let maxAge = 20;

// if(user <= maxAge ){
//     document.write(`You are welcome !`)
// }

// else{
//     document.write(`Sorry you are too much older`);
// }


// Task no 7

// let user = prompt("Enter how many fuel you have remain in liter ")

// if (user <= "0.25 liters"){
//     document.write(`please refill the fuel in your car`)
// }
// else{
//     document.write(`you can ride a car`)
// }

// Task no 8 

// let totalMarks = +prompt("Enter total marks .")
// let obtMarks = +prompt("Enter obtained marks .")
// let percen = obtMarks / totalMarks * 100;

// if (percen >= 80){
//     document.write(`Total Marks : ${totalMarks} <br /> Obtained Marks : ${obtMarks} <br />  Percentage : ${percen} <br /> Grade : A <br / > Remarks : Excellent`)
// }

// else if (percen >= 70){
//     document.write(`Total Marks : ${totalMarks} <br /> Obtained Marks : ${obtMarks} <br />  Percentage : ${percen} <br /> Grade : A <br / > Remarks : Good`)
// }

// else if (percen >= 60){
//     document.write(`Total Marks : ${totalMarks} <br /> Obtained Marks : ${obtMarks} <br />  Percentage : ${percen} <br /> Grade : B <br / > Remarks : You need to improve`)
// }
// else if (percen < 60){
//     document.write(`Total Marks : ${totalMarks} <br /> Obtained Marks : ${obtMarks} <br />  Percentage : ${percen} <br /> Grade : F <br / > Remarks : Fail`)
// }

// Task no 9

// let product1 = prompt("What do you want to buy ?");
// let product2 = prompt("What's another item do you want to buy ?");
// let qty1 = +prompt(`How many ${product1} i give you ?`);
// let qty2 = +prompt(`How many ${product2} i give you ?`);
// let price1 = +prompt(`What is the price of ${product1} ?`);
// let price2 = +prompt(`What is the price of ${product2} ?`);
// let ship = +prompt(`Enter shipping charges /`);
// let total = (qty1 * price1) + (qty2 * price2) + ship;

// document.write (`Price of ${product1} is ${price1} <br />`);
// document.write(`Quantity of ${product1} is ${qty1} <br />`);
// document.write (`Price of ${product2} is ${price2} <br />`);
// document.write(`Quantity of ${product2} is ${qty2} <br />`);

// document.write(`Shipping charges ${ship} <br />`);

// document.write(`The total cost of your order is ${total}`);

// Task no 10

// let secretNumber = 1;
// let guss = +prompt(`Guess the Secrect Number ?`);

// if (secretNumber === guss){
//     document.write(`Bingo! Correct Answer .`)
// }
// else if (guss > secretNumber){
//     document.write(`Close enough to correct `)
// }
// else if (guss < secretNumber){
//     document.write(`Close enough to correct `)
// }

// else(
//     document.write(`NOt in a range . the range is 1 to 10`)
// )

// Task no 11

// let number = +prompt(`Enter number do you want to know its divisible by 3 or not .`);

// if(number % 3 === 0){
//     document.write(`Yes it divisible by 3`)
// }
// else{
//     document.write(`Its not divisible by 3`)
// }

// Task no 12 

// let teamA = +prompt(`Enter score of Team A .`);
// let teamB = +prompt(`Enter score of Team B .`);

// if (teamA > teamB){
//     document.write(`Team A Won !`)
// }

// else{
//     document.write(`Team B Won !`)
// }

// Task no 13 

let number = +prompt(`Enter number do you want to know its even or odd ?`);

if(number / 2){
    document.write(`Its even `)
}

else{
    document.write(`Its odd `)
}