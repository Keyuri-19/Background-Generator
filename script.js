var body = document.getElementById("gradient");
var h4= document.querySelector("h4");
var random = document.querySelector("button");
// var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");


//to set gradient color
function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";  
    
    h4.textContent = body.style.background + ";";
}

//to generate random color
function randomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}

//to set random background
function generateRandomColor(){
    color1=randomColor();
    color2=randomColor();
    body.style.background = "Linear-gradient(to right, " + color1 + ", " + color2 + ")";
    h4.textContent = body.style.background; 
}
random.addEventListener("click",generateRandomColor);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);