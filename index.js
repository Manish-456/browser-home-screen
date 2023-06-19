import {API_KEY} from './config.js';
const min = document.querySelector(".min");

const hrs = document.querySelector(".hrs");
const sec = document.querySelector(".sec");
const quoteBox = document.querySelector(".quotes");
const greetings = ["Good Morning 🌄", "Good Afternoon 🕑", "Good Evening 🌆", "Good Night 🌃"]
const greeting = document.querySelector(".greeting");
setInterval(() => {
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const actualHrs =  hours > 12 ?  Number(hours) - 12 : hours
    let meridiem = hours >= 12 ? "PM" : "AM";
    let timeRange = greetings[Math.floor(hours / 6) - 1];
  const second = date.getSeconds();
  min.textContent = `${minute < 10 ? "0" : ""}${minute}`;
  sec.textContent = `${second < 10 ? "0" : ""}${second}`;
  hrs.textContent = `${actualHrs < 10 ? "0" : ""}${actualHrs}`
  const meridiems = document.querySelector(".meridiem");
  meridiems.textContent = meridiem
  greeting.textContent = timeRange;
}, 1000);


// Get Daddy Jokes

async function getDaddyJokes(){
    const res = await fetch("https://icanhazdadjoke.com", {
        method : "GET",
        headers : {
            "Accept" : "application/json"
        }
    });
    const jokes = await res.json();
    const author = document.querySelector(".author")
    quoteBox.style.display = "flex";
    author.textContent = "";
    const dadJokes = document.querySelector(".dad-jokes");
    dadJokes.innerHTML = jokes.joke
}
const dadJokeInit = document.querySelector(".dadJokes-btn");
dadJokeInit.addEventListener('click', getDaddyJokes)

async function getMotivationalQuotes() {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        method : "GET",
        headers : {
            'X-Api-Key' : API_KEY,
            'Content-Type' : "application/json"
        }
    });

    const quotes = await res.json();
    const quotesLine =document.getElementById("quotes");
    const author = document.querySelector('.author');
    quoteBox.style.display = "flex";
    quotesLine.textContent = quotes[0].quote;
    author.textContent ="- " + quotes[0].author


    
}
const motivation = document.querySelector(".motivation");
motivation.addEventListener('click', getMotivationalQuotes)

