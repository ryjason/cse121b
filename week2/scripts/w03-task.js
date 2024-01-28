/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1+number2;
}

document.querySelector('#addNumbers').addEventListener('click',addNumbers);
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1,addNumber2);
}



/* Function Expression - Subtract Numbers */
function subtract(number1, number2){
    return number1-number2;
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);
function subtractNumbers(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}




/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const addNumber = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
};
document.querySelector('#multiplyNumbers').addEventListener('click', addNumber);





/* Open Function Use - Divide Numbers */

function devide(number1, number2){
    return number1/number2;
}

document.querySelector('#divideNumbers').addEventListener('click',devideNumbers);
function devideNumbers(){
    let devide1 = Number(document.querySelector('#dividend').value);
    let devide2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = devide(devide1, devide2);
}


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click',total);
function total(){
    let x = 0;
    let span = document.getElementById("total");
    console.log('yes');
    x += Number(document.querySelector('#subtotal').value);
    document.querySelector('#subtotal').value = '';
    if (document.getElementById("member").checked == true){
        span.innerText = `$ ${(x*0.8).toFixed(2)} `;
      } 
    else {
        span.innerText = `$ ${x.toFixed(2)} `;
      }

}
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number %2 ===1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number %2 ===0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
const doubledNumbers = numbersArray.map(num => num * 2);
const sum = doubledNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').innerHTML = sum;
