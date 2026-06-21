
/* 
1. Create a new object
2. Extract only the values  UI needs
3. Give them clean property names 
*/

/*
const rawWeatherData = {
    location: "Melbourne , Australia",
    date: "05/04/2026",
    feels_like: "15",
    humidity: weatherData.current.relative_humidity_2m,
    wind: weatherData.current.wind_speed_10m,
    precipitation: weatherData.current.precipitation,
    temp: weatherData.current.temperature_2m,
};
*/

const weatherService = new WeatherService();
const city = "India";

weatherService.getCoordinates(city)
    .then((cords) =>{
        const latitude = cords.latitude;
        const longitude = cords.longitude;
        return weatherService.getWeather(latitude,longitude);

    })
    .then((weatherData) => {
        console.log(weatherData);
        const humidity = weatherData.current.relative_humidity_2m;
        const wind = weatherData.current.wind_speed_10m;
        const precipitation = weatherData.current.precipitation;
        const temp = weatherData.current.temperature_2m;
    })
    .catch((error) =>{
        console.error(error);
    })





