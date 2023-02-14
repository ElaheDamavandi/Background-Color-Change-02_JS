
const arrayOfAlphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
let hex = '';
const body = document.querySelector('body');
const hexTitle = document.querySelector('h2');
body.style.backgroundColor = 'grey';

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};



const changeHexColor = () => {
    hex = '';
    for(let i=0; i<= 5; i++) {
        if(getRandomInt(2) === 1){
            hex += arrayOfAlphabet[getRandomInt(5)];
        }else{
            hex += getRandomInt(9);
            console.log(hex);
        }
    };
};


console.log(hex);

const  changeBackground = () => {
    changeHexColor();
    body.style.backgroundColor = '#' + hex;
    hexTitle.innerHTML = hex;
    console.log(hex);
    // mainElement.classList.add(color);
}

document.getElementById("button").addEventListener("click", changeBackground);