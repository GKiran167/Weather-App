

const apikey = "2e98d68972bfc0e465a5d234434c32a9";
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const search_box = document.querySelector("input");
const search_btn = document.querySelector("button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkweather(city){
    const response = await fetch(apiurl+`${city}`+`&appid=${apikey}`);
    var data =await response.json();
    
    console.log(data)

    if(response.status==404 || data.name==undefined){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    //weather icon code segment

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist" || data.weather[0].main=="Haze")
    {
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main=="Smoke" || data.weather[0].main=="Fog")
    {
        weatherIcon.src = "images/smoke.png"
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none";
    }

    document.getElementById('input').value = ""
}

search_btn.addEventListener('click',()=>{
    checkweather(search_box.value);
})

document.addEventListener("keypress",e=>{
    console.log(e)
    if(e.key=="Enter"){
        checkweather(search_box.value);
    }
})

