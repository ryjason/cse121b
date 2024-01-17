/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Yujie Rao';
const date = new Date();
const currentYear = date.getFullYear();
const profilePicture = 'images/IMG_0123-3.jpg';




/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile Image of ${fullName}`);







/* Step 5 - Array */
let list = ['Pizza','Sushi','Tacos','Chocolate Cake', 'Spinach Salad'];
foodElement.textContent = list;
let list2 = ['Chicken Curry'];
list.push(list2);
foodElement.innerHTML += `<br>${list}`;
list.shift()
foodElement.innerHTML += `<br>${list}`;
list.pop()
foodElement.innerHTML += `<br>${list}`;





