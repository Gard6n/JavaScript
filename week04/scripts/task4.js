/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let aboutme = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
name:'Vince',
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
photo :"images/Subject.png",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
favortiteFoods:["Burritos","Pizza","Ice Cream","Taco Bell"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
hobbies:['programing','mountain biking','hiking'],
// Step 6: Add another property named placesLived with a value of an empty array
placesLived:{place : 'som', length : ''}}
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

//aboutme['placesLived'] = [{place : '',length : ''}];

// Step 8: For each property, add appropriate values as strings
aboutme.placesLived.place = 'Washington';
// Step 9: Add additional objects with the same properties for each place you've lived
aboutme.placesLived.length = '20 years';

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = aboutme.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').src = aboutme.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').alt = aboutme.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoritefoods = document.querySelector("#favoritefoods");
let f = aboutme.favortiteFoods;
for (let i = 0; i < f.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = f[i];
    favoritefoods.append(listItem);

    //look at line 53
    //listItem.appendChild(document.createTextNode(aboutme.favortiteFoods[i]));
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbies = document.querySelector("#hobbies");
let h = aboutme.hobbies;
for (let i = 0; i < h.length; i++) {
    let listIte = document.createElement("li");
    listIte.textContent = h[i];
    hobbies.append(listIte);

    //not sure if this is what needs to be done for step 5 and step 7..
    hobbies.appendChild(listIte);
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let myplacesLived = document.querySelector('#places-lived');
let dl = document.createElement('dl');
for (i = 0; i <= aboutme.placesLived.length; i++) {
let newItem = document.createElement('dt');
let newItems= document.createElement('dd');
newItem.textContent = aboutme.placesLived.place[i];
newItems.textContent = aboutme.placesLived.length[i];
myplacesLived.append(newItem, newItems);
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
