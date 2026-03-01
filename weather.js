
//alert("weather.js running....")
async function getWeatherData() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";

    try {
    const request = new Request(url);
    const response = await fetch(request);
    const data = await response.json();

    const tempUnit = data.current_weather_units.temperature;
    const temp = data.current_weather.temperature;
    const tempEl = document.querySelector(".t1");

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January", "February","March","April","May","June","July","August","September","December"];

    const timeUnit = data.current_weather_units.time;
    const time = data.current_weather.time;
    const timeEl = document.querySelector(".td");

    const formatDate = new Date(time);
    const day = days[formatDate.getDay()];
    const month = months[formatDate.getMonth()];
    const date = formatDate.getDate();
    const year = formatDate.getFullYear();
    const displayDate = day + "  " + "" +","+""+ date  +"  "+ month + "," + year; 

    const windSpeedUnit = data.current_weather_units.windspeed;
    const windSpeed = data.current_weather.windspeed;
    const windSpeedEl = document.querySelector(".wind-speed");

    
    if(tempEl && timeEl && windSpeedEl )
    {
         tempEl.textContent = temp+tempUnit;
         timeEl.textContent = displayDate ;
         windSpeedEl.textContent = windSpeed + windSpeedUnit;
    }
    else
    {
        console.log("Span element t1 not found.");
    }          
        
    } catch (error) {

        console.error("Error", error);
        
    }   
    
}

getWeatherData();













    
