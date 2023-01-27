/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = 'vince';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
let year = 2022

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const picname = "images/Subject.png"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = picname;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let food = ["Burritos", "Pizza", "Ice Cream", "Taco Bell"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = food;

// Step 3: declare and instantiate a variable to hold another favorite food
let food2 = [,"Apples","Rice","Donuts","Noodles"]

// Step 4: add the variable holding another favorite food to the favorite food array
 let ulfo = food.concat(food2);

// Step 5: repeat Step 2

document.querySelector('#food').innerHTML = ulfo;

// Step 6: remove the first element in the favorite foods array
ulfo.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = ulfo;

// Step 8: remove the last element in the favorite foods array
ulfo.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = ulfo;


