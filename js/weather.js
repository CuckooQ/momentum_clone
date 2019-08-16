/* Parameter */
// div
const tempAndCity = document.querySelector(".temp_and_city");

// API Key
const API_KEY = "0504eac7e9deab0e5ba445a7723cead4";

// WEATHER WEB URL
const COORDS_URL = "https://api.openweathermap.org/data/2.5/weather";



/* Function */
// get temperature and city
function getTempAndCity(latitude, longitude){
    fetch(
        `${COORDS_URL}?lat=${latitude}&lon=${longitude}&appId=${API_KEY}&units=metric`
    ).then((response) => {
        return response.json();
    })
    .then((json) => {
        const temperature = Math.round(json.main.temp);
        const city = json.name;
        tempAndCity.innerHTML= `${temperature}°c @ ${city}`;
    });
}

// operate when getting geo locaion inforation success
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getTempAndCity(latitude, longitude);
}

// operate when getting geo location information error
function handleGeoError(){
    alert("Error in loading geo information");
}

// operate navigator geoLocation
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// work when loaded
function init(){
    askForCoords();
}



/* Operate function */
init();