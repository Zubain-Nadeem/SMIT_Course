let inputE1 = document.querySelectorAll("input")[0];
let orderList1 = document.querySelectorAll("ol")[0];

function makeTitleCase (){
    let userName = inputE1.value;
    if(!userName) return ;
    let splitName = userName.split(" ");
    let titleCaseNames = []
    for (let i = 0 ; i < splitName.length ; i++){
            let eachChr = splitName[i];
            let firsChe = eachChr[0]
            let restChr = eachChr.slice(1)

            let firstChrUpper = firsChe.toUpperCase();
            let restChrLower = restChr.toLowerCase();
            let titleCase =` ${firstChrUpper}${restChrLower}`
            titleCaseNames.push(titleCase)
    }

    let titleCaseName = titleCaseNames.join("");
    orderList1.innerHTML += `<li> ${titleCaseName}</li>`;
    inputE1.value = ""; 
}


let image1 = document.querySelectorAll("img")[0];
image1.style.width = '60px';
image1.style.height = '50px';

function changeDice(){
    let randomNum = Math.ceil(Math.random() * 7)
    if (randomNum === 1){
        image1.src = 'images/dice-image-1.png'
    }
    else if (randomNum === 2){
        image1.src = 'images/dice-image-2.png'
    }
    else if (randomNum === 3){
        image1.src = 'images/dice-image-3.webp'
    }
    else if (randomNum === 4){
        image1.src = 'images/dice-image-4.webp'
    }
    else if (randomNum === 5){
        image1.src = 'images/dice-image-5.webp'
    }
    else if (randomNum >= 6){
        image1.src = 'images/dice-image-6.png'
    }

    console.log(randomNum)
} 



let totalMarks = document.querySelectorAll(".total")[0];
let obtMarks = document.querySelectorAll(".obtaind")[0];

let hE1 = document.querySelectorAll(".totalNum")[0];
let hE2 = document.querySelectorAll(".obtaindNum")[0];
let hE3 = document.querySelectorAll(".percent")[0];
let hE4 = document.querySelectorAll(".grade")[0];

function result() {
  hE1.innerHTML = `Total Marks : ${totalMarks.value}`;
  hE2.innerHTML = `Obtaind Marks : ${obtMarks.value}`;
  let percentage = (obtMarks.value / totalMarks.value) * 100;
  hE3.innerHTML = `Percentage : ${percentage.toFixed(2)} %`;

  if (percentage >= 80) {
    hE4.innerHTML = ` Grade : A+ Excellent`;
  } 
  else if (percentage >= 70) {
    hE4.innerHTML = ` Grade : A Very Good`;
  } 
  else if (percentage >= 60) {
    hE4.innerHTML = ` Grade : B Good`;
  }
   
  else if (percentage >= 50) {
    hE4.innerHTML = ` Grade : D Better`;
  } 
  else if (percentage >= 35) {
    hE4.innerHTML = ` Grade : E Do hard work`;
  } 
  else {
    hE4.innerHTML = `Your are Fail`;
    hE4.style.color = "red ";
  }

  totalMarks.value = "";
  obtMarks.value = "";
  return;
}

