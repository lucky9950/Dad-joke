const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "VYPB/QhaA2KOj9cybIztSA==fxZiJcI7jI4ZTtv8";



const option = {
    method: "GET",
    headers:{
        "X-Api-Key" : apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading.."
        const responce =  await fetch(apiURL,option);
        const data = await responce.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke"
        jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "An error happened try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }

   

    
   
}

btnEl.addEventListener("click", getJoke);