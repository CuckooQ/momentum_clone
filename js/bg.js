/* Parameter */
// div
const background = document.querySelector(".background");

// IMAGE NUMBER
const IMAGE_NUMBER = 5;



/* Function */
// paint background
function paingBackground(imageUrl){
    background.style.backgroundImage = `url(${imageUrl})`;
}

// get random number within image count
function getRandomNumber(){
    return Math.ceil(Math.random() * IMAGE_NUMBER);
}

// select Image file 
function selectImage(){
    const number = getRandomNumber();
    return `backgrounds/${number}.jpg`;
}

// work when loaded
function init(){
    const image = selectImage();
    paingBackground(image);
}



/* Operate function */
init();