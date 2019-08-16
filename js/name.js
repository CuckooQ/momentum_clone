/* Parameter */
// name div
const nameForm = document.querySelector(".name_form");
const nameInput = document.querySelector(".name_input");
const nameText = document.querySelector(".name_text");

// input placeholder
const NAME_PLACEHOLDER = "이름을 알려주세요!";

// localStorage name key
const LS_NAME_KEY = "EYONG_MOMENTUM_USER_NAME";



/* function */
// load name in localStorage
function loadName(){
    // get name value of localStorage 
    const name = localStorage.getItem(LS_NAME_KEY);
    
    // validate name
    if(name){
        nameInput.classList.remove("show");
        nameText.classList.add("show");
        nameText.innerHTML = `안녕 ${name}! 오늘도 애용하자구!`;
    }else{
        nameInput.classList.add("show");
        nameText.classList.remove("show");
    }
}

// save name into localStorage
function saveName(name){
    localStorage.setItem(LS_NAME_KEY, name);
}

// submit action of name form  
function handleSubmit(event){
    event.preventDefault();

    // save name
    saveName(nameInput.value);

    // load name
    loadName();
}

// work when loaded
function init(){
    nameInput.placeholder = NAME_PLACEHOLDER;
    nameForm.addEventListener("submit", handleSubmit);
    loadName();
}



/* Operate function */
init();