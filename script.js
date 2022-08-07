console.log("script running");
var element = document.getElementById("character");
element.style.left = 760 + 'px'
element.style.top = 300 + 'px'
var background = document.getElementById("first");

const inputField = document.querySelector("#name");
const headerText = document.querySelector("#headerText");
const inputSection = document.querySelector("#inputSection");
const characterText = document.querySelector("#characterText");
inputField.addEventListener('change', e => {
  headerText.innerHTML = "Wandering " + inputField.value;
  characterText.innerHTML = inputField.value;
  characterText.classList.remove("hidden");
  inputSection.classList.add("hidden");
})

const infoCard = document.querySelector("#info-card");
let array_photos = ["url(media/background.jpg)", "url(media/beach.jpg)", "url(media/bridge.jpg)", "url(media/northernLights.jpg)", "url(media/sandDunes.jpg)", "url(media/waterfall.jpg)"]
let infoArray = ["Welcome to the stunning Greate Smokey Mountains in the East United States!", "Welcome to a stunning vacation destination, one filled with sand and fun! Here at the beach, there are a myraid of different creatures - ranging from jellyfish to oysters.", "Here is an isolated bridge in a forest in Costa Rica. Here you can find 1000 different species of birds and many rare butterflies.", "Now we are visiting the famed northern lights, a magical and mysterious place. Millions come here every year to see these fantastical lights!", "These sand dunes are stunning but sweltering mini deserts.", "Welcome to a gorgeous waterfall in Iceland. A place full of lush meadows and jagged cliffs."];

let index = 0;

function leftArrowPressed() {
  element = document.getElementById("character");
  background = document.getElementById("first");
  element.style.left = parseInt(element.style.left) - 40 + 'px';
  console.log(element.style.left);
  if (element.style.left == 120 + 'px') {
    if (index !== 0) {
      index--;
      infoCard.classList.remove("hidden");
      infoCard.innerHTML = infoArray[index];
      background.style.backgroundImage = array_photos[index];
      element.style.left = 760 + 'px'
    }
  }
}

function rightArrowPressed() {
  element = document.getElementById("character");
  background = document.getElementById("first");
  element.style.left = parseInt(element.style.left) + 40 + 'px';
  if (element.style.left === 1480 + 'px') {
    index++;
    background.style.backgroundImage = array_photos[index];
    infoCard.innerHTML = infoArray[index];
    infoCard.classList.remove("hidden");
    element.style.left = 760 + 'px'
  }
}

function upArrowPressed() {
  element = document.getElementById("character");
  element.style.top = parseInt(element.style.top) - 40 + 'px';
  console.log(element.style.top);
  if (element.style.top === -20 + 'px') {
    background.style.backgroundImage = "url(media/sky.jpg)";
    infoCard.classList.add("hidden");
    element.style.top = 380 + 'px';
  }
}

function downArrowPressed() {
  var element = document.getElementById("character");
  element.style.top = parseInt(element.style.top) + 40 + 'px';
  if (element.style.top === 420 + 'px') {
    background.style.backgroundImage = array_photos[index];
    infoCard.classList.remove("hidden");
    element.style.top = 20 + 'px';
  }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
};
var character = document.getElementById("character");


function docReady() {
  window.addEventListener('keydown', moveSelection);
}

