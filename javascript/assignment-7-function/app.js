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