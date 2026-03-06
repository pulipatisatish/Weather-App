

class WeatherApp
{

    constructor ()
    {
        this.url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=relativehumidity_2m";
    }

 async  getWeatherData()
 {
    const request = new Request(this.url);
    const response = await fetch(request);
    const data = await response.json();
    return data;

 }

 getTemperature(data)
 {
    const tempUnit = data.current_weather_units.temperature;
    const tempValue = data.current_weather.temperature;
    const tempEl = document.querySelector(".temp");
    tempEl.textContent = tempValue + tempUnit;

 }



}

const app = new WeatherApp();
app.getWeatherData();