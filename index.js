let inputcity = document.getElementById("enterCity");
inputcity.addEventListener("keypress", function(){
    if (event.key == "Enter"){
        getResults(event.target.value);
    }
})
const api ={
    url:"https://api.openweathermap.org/data/2.5/weather?q=",
    key:"f1f21333b5c7206167000e99c62f9999"
} 

function getResults(cityName){
    fetch(`${api.url}${cityName}&appid=${api.key}&units=metric`)
    .then((data)=> data.json())
    .then((result)=>  displayResults(result));
}


function displayResults(result){
    console.log(result)
    let city = document.querySelector("#city");
    let date = document.querySelector("#date");
    let temp = document.querySelector("#temp");
    let weather = document.querySelector("#weather");
    let range = document.querySelector("#range");

    
    city.innerText = result.name +", "+ result.sys.country;
    date.innerText = formatDate();
    temp.innerText = result.main.temp;
    weather.innerText = result.weather[0].description;
    range.innerText = Math.floor(result.main.temp_min) + "/ "+ Math.floor(result.main.temp_max);
}

function formatDate(){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let currentDate = new Date();
    let day = days[currentDate.getDay()];
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    let date = currentDate.getDate();
    return `${day} ${date} ${month} ${year}`


}
window.onload =getResults('chennai');