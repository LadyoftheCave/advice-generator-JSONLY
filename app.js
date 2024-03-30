//CREATE ELEMENTS
let container = document.createElement('article');
let p = document.createElement('p');
let h3 = document.createElement('h3');
let commaContainer = document.createElement('div');
let devider = document.createElement('img');
let button = document.createElement('button');
let buttonImage = document.createElement('img');

p.innerText = "ADVICE #117"
let h3Text = `It is easy to sit up and take notice, what's difficult is getting up and taking action.`;
h3.innerText = h3Text;
h3.textContent = '\u201C' + h3.textContent + '\u201D';
devider.src = "images/pattern-divider-desktop.svg";
buttonImage.src = "images/icon-dice.svg";



//APENDCHILD ELEMENTS
document.body.appendChild(container);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(commaContainer);
commaContainer.appendChild(devider);
container.appendChild(button);
button.appendChild(buttonImage);



//LOGIC
function adjustContainerSize(){
const screenWidth = window.innerWidth;
console.log(window.innerWidth);

if (screenWidth < 500) {
    container.style.width = "19rem";
    container.style.height = "23rem";
    devider.src = "images/pattern-divider-mobile.svg";
} else {
    container.style.width = "29rem"
    container.style.height = "19rem";
    devider.src = "images/pattern-divider-desktop.svg";
}
}

adjustContainerSize();
window.addEventListener('resize', adjustContainerSize);


button.addEventListener('click', () => {
    fetch("https://api.adviceslip.com/advice")
    .then((result) => {
        console.log("IT WORKED", result);
        return result.json();
    })
    .then((data) => {
        console.log('JSON DONE', data);
        p.innerText = `ADVICE #${data.slip.id}`
        h3.textContent = `\u201C' ${data.slip.advice} '\u201D`;
    })
    .catch(error => {
        console.log("Error", error);
    })
});

button.addEventListener('mouseover', () => {
    button.style.boxShadow = "0px 0px 10px hsl(150, 100%, 66%)"
});

button.addEventListener('mouseout', () => {
    button.style.boxShadow = "none";
});




//CSS ELEMENTS
document.body.style.backgroundColor = "hsl(218, 23%, 16%)";
document.body.style.fontFamily = "'Manrope', sans-serif";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
container.style.backgroundColor = "hsl(217, 19%, 24%)";
container.style.borderRadius = "15px";
container.style.display= "flex";
container.style.flexDirection= "column";
container.style.alignItems= "center";
container.style.padding= "2rem";
container.style.boxSizing= "border-box";
container.style.position= "relative";
p.style.color = "hsl(150, 100%, 66%)";
p.style.fontSize = ".7rem";
p.style.letterSpacing = ".3rem";
h3.style.fontSize = "1.5rem";
h3.style.color = "rgb(200, 210, 223)";
h3.style.textAlign = "center";
commaContainer.style.display= "flex";
commaContainer.style.inlineSize= "100%"
devider.style.width = "100%";
button.style.backgroundColor = "hsl(150, 100%, 66%)";
button.style.border = "none";
button.style.width = "3.5rem";
button.style.height = "3.5rem";
button.style.borderRadius = "100px";
button.style.position = "absolute";
button.style.bottom = "-1rem";
button.style.display = "flex";
button.style.justifyContent = "center";
button.style.alignItems = "center";
buttonImage.style.width = "1.5rem";
button.style.zIndex = "1000";

