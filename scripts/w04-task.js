/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : 'Yujie Rao',
    photo : 'images/IMG_0123-3.jpg',
    favoriteFoods: [
        'Pizza',
        'Sushi',
        'Tacos',
        'Chocolate Cake', 
        'Spinach Salad'
    ],
    hobbies: [
        'Basketball',
        'Hiking',
        'Gym'
    ],
    placesLived : []
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Laie, HI',
        length: '2.5years'
    },
    {
        place: 'Chihuahua, Mexico',
        length: '4.5years'
    },
    {
        place: 'Shengzheng, China',
        length: '16years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(ho =>{
    let li = document.createElement('li');
    li.textContent = ho;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(pl =>{
    let dt = document.createElement('dt');
    dt.textContent = pl.place;
    document.querySelector('#places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = pl.length;
    document.querySelector('#places-lived').appendChild(dd);
});


