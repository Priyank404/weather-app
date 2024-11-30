const apiKey="67d015121dda515be4893dddc33d773b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";// this is api
const temp=document.querySelector(".temp");
// const city=document.querySelector(".city");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const search=document.querySelector(".search input");
const button=document.querySelector(".search button")
const weatherimg=document.querySelector(".rainIcon")



async function checkWeather(city) {
    const resoponse=await fetch(apiUrl+city+`&appid=${apiKey}`);
    const data=await resoponse.json();

    document.querySelector(".city").innerHTML=data.name;
    temp.innerHTML=Math.round(data.main.temp) + "°c";
    humidity.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherimg.src ="image/cloudyweather.png";
    }
    else if(data.weather[0].main=="smoke"){
        weatherimg.src="image/cloudyweather.png";
    }else if(data.weather[0].main=="humidity"){
        weatherimg.src="image/hum.png";
    }else if(data.weather[0].main=="drizzle"){
        weatherimg.src="image/drizzle.png";
    }else if(data.weather[0].main=="mist"){
        weatherimg.src="image/mist.png";
    }else if(data.weather[0].main=="rain"){
        weatherimg.src="image/rain.png";
    }else if(data.weather[0].main=="storm"){
        weatherimg.src="image/thunderstorm.png";
    }else if(data.weather[0].main=="snow"){
        weatherimg.src="image/snowy.png";
    }else if(data.weather[0].main=="Clear"){
        weatherimg.src="image/sun.png";
    }

    document.querySelector(".weather").style.display="block";
}

button.addEventListener("click",()=>{
    checkWeather(search.value);
});




