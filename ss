
async function J2(){
    const jokeContainer = document.querySelector("#joke2");
    const url ="http://www.boredapi.com/api/activity/";

    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

return data.activity;
}
