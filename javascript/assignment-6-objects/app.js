
// Task no 1 

let car = {
    make : "Toyota",
    model : "Fortuner",
    year : 2025,
    color : "Black"
}

// Task no 2 

const user = {
    name: "John",
    age: 30,
    email: "john.doe@example.com"
};

console.log(`Name : ${user.name}`);
console.log(`Email : ${user.email}`);

// Task no 3 

car.color = "Orange";
console.log(car)

// Task no 4 

car.price = 20000000;
console.log(car);

// Task no 5 

let person = {
    firstName : "Naseem",
    lastName : "Shah"
}

console.log(`${person.firstName} ${person.lastName}`);

// Task no 6

let changePara = document.querySelectorAll(".para");
let newText = "Updated text "
for (let i = 0 ; i < changePara.length ; i++){
    changePara[i].innerHTML = newText;
    23
}

