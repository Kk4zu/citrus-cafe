const myImage = document.querySelector("img");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");


function mouseOver() {
  myImage.setAttribute("src", "./images/brave-browser-icon.png");
  body.style.backgroundColor="white";
  h1.textContent = "Is Brave even cooler?"
  

  
}

function mouseOut() {
  myImage.setAttribute("src", "./images/firefox-icon.png");
  body.style.backgroundColor="#FF9500";
  h1.textContent = "Mozilla is cool"

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

