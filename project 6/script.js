const btn = document.querySelector("#btn");
const btn2 = document.querySelector('#btn2');

function J1() {
    const jokeContainer = document.querySelector("#joke");
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

    let getJoke = () => {
        jokeContainer.classList.remove("fade");
        fetch(url)
        .then(data => data.json())
        .then(item =>{
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        });
}
return getJoke;
}

function J2(){
    const jokeContainer = document.querySelector("#joke2");
    const url ="https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,explicit&type=single"
    let getJoke = () => {
        jokeContainer.classList.remove("fade");
        fetch(url)
        .then(data => data.json())
        .then(item =>{
            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        });
}
return getJoke;
}

btn.addEventListener("click",J1());
btn2.addEventListener("click",J2());
