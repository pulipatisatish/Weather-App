class CurrentWeatherUI {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.dateEl = document.querySelector(".date-time");
        this.locationEl = document.querySelector(".location");
        this.feels_likeEL = document.querySelector(".feels-like");
        this.humidityEl = document.querySelector(".humidity");
        this.windEl = document.querySelector(".wind-speed");
        this.perecipitationEl = document.querySelector(".precipitation");
        this.temp1El = document.querySelector(".temp");
    }

    updateDate() {
        this.dateEl.textContent = this.weatherData.date;
    }

    updateLocation() {
        this.locationEl.textContent = this.weatherData.location;
    }
    updateFeelsLike() {
        this.feels_likeEL.textContent = this.weatherData.feels_like;
    }
    updateHumidity() {
        this.humidityEl.textContent = this.weatherData.humidity;
    }
    updateWind() {
        this.windEl.textContent = this.weatherData.wind;
    }
    updatePrecipitation() {
        this.perecipitationEl.textContent = this.weatherData.perecipitation;
    }

    updateTemperature() {
        this.temp1El.textContent = this.weatherData.temp;
    }
}

const appCurrent = new CurrentWeatherUI(weatherData);
appCurrent.updateDate();
appCurrent.updateFeelsLike();
appCurrent.updateHumidity();
appCurrent.updateLocation();
appCurrent.updatePrecipitation();
appCurrent.updateWind();
appCurrent.updateTemperature();
