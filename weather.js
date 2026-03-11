class WeatherApp {
    constructor() {
        this.url =
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=relativehumidity_2m&hourly=precipitation_probability";
        // this.dateElement = document.querySelector(".date");
        this.precipitationElement = document.querySelector(".precipitation");
    }

    async getWeatherData() {
        try {
            const request = new Request(this.url);
            const response = await fetch(request);
            const data = await response.json();

            this.displayTemperature(data);
            this.displayDateAndTime(data);
            this.displayWindSpeed(data);
            this.displayHumidity(data);
            this.displayPrecipitation(data);
            // this.updateDate(data)
        } catch (error) {
            console.error("Error", error);
        }
    }

    displayTemperature(data) {
        try {
            const tempUnit = data.current_weather_units.temperature;
            const tempValue = data.current_weather.temperature;
            const tempEl = document.querySelector(".temp");

            if (tempEl) {
                tempEl.textContent = tempValue + tempUnit;
            } else {
                console.log(`Element not found ${tempEl}`);
            }
        } catch (error) {
            console.error("Error", error);
        }
    }
    /*updateDate(data) {
            const time = data.current_weather.time;
            const date = new Date(time);

            this.dateElement.textContent = date.toDateString(); 
        }*/
    displayDateAndTime(data) {
        try {
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "December",
            ];
            const dateTimeEl = document.querySelector(".date-time");

            const today = data.current_weather.time;
            const formatDate = new Date(today);
            const day = days[formatDate.getDay()];
            const month = months[formatDate.getMonth()];
            const date = formatDate.getDate();
            const year = formatDate.getFullYear();
            //const getHours = formatDate.getHours();
            //const getMin = formatDate.getMin();
            const displayDate =
                day + "  " + "" + "," + "" + date + "  " + month + "," + year;

            if (dateTimeEl) {
                dateTimeEl.textContent = displayDate;
            } else {
                console.log(
                    `Element of Date and Time ${dateTimeEl} not found.`,
                );
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    displayWindSpeed(data) {
        try {
            const windSpeed_Unit = data.current_weather_units.windspeed;
            const windSpeed_Value = data.current_weather.windspeed;
            const windSpeedEl = document.querySelector(".wind-speed");

            if (windSpeedEl) {
                windSpeedEl.textContent = windSpeed_Value + windSpeed_Unit;
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    displayHumidity(data) {
        try {
            const humidity_unit = data.hourly_units.relativehumidity_2m;

            const currentTime = data.current_weather.time;
            const currentHour = currentTime.slice(0, 13) + ":00";
            const hourlyTimeArray = data.hourly.time;
            const currentHourIndex = hourlyTimeArray.indexOf(currentHour);
            const humidityArray = data.hourly.relativehumidity_2m;
            const currentHumidity_value = humidityArray[currentHourIndex];

            const humidityEl = document.querySelector(".humidityEl");
            if (humidityEl) {
                humidityEl.textContent = currentHumidity_value + humidity_unit;
            }
        } catch (error) {
            console.error("Error", error);
        }
    }

    displayPrecipitation(data){
        const humidity_unit = data.hourly_units.relativehumidity_2m;

            const currentTime = data.current_weather.time;
            const currentHour = currentTime.slice(0, 13) + ":00";
            const hourlyTimeArray = data.hourly.time;
            const currentHourIndex = hourlyTimeArray.indexOf(currentHour);
            const precipitationArray = data.hourly.precipitation_probability;
            const currentPrecipitation_value = precipitationArray[currentHourIndex];
            this.precipitationElement.textContent = currentPrecipitation_value;

    }
}

const app = new WeatherApp();
app.getWeatherData();
