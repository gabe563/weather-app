import { changeWeatherValues } from './displayCurrent';
import weatherForecast from './weatherForecast';

export const weatherValues = {
  city: 'brandon',
  units: 'imperial',
};

function getUserInput() {
  const input = document.getElementById('search');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (e.target.value === '') {
        alert('You cannot leave the input blank');
      } else {
        currentWeather(e.target.value);
        e.target.value = '';
      }
    }
  });
}
getUserInput();

function changeCurrentMeasure() {
  const measureBtn = document.getElementById('button-1');
  measureBtn.addEventListener('click', () => {
    switch (weatherValues.units) {
      case 'imperial':
        weatherValues.units = 'metric';
        currentWeather();
        break;
      case 'metric':
        weatherValues.units = 'imperial';
        currentWeather();
        break;
    }
  });
}
changeCurrentMeasure();

let returnedData = {};

export default async function currentWeather(input) {
  try {
    let loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.display = 'flex';
    if (input !== undefined) {
      weatherValues.city = input;
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${weatherValues['city']}&appid=ed602ac25926269056d7f4cc09ebb22e&units=${weatherValues['units']}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    if (weatherData.sys.country === undefined) {
      weatherData.sys.country = '';
    }
    returnedData = {
      name: weatherData.name,
      coords: { lon: weatherData.coord.lon, lat: weatherData.coord.lat },
      country: weatherData.sys.country,
      temperature: weatherData.main.temp,
      weatherState: {
        feelsLike: weatherData.main.feels_like,
        wind: weatherData.wind.speed,
        humidity: weatherData.main.humidity,
      },
      weather: [
        weatherData.weather[0].main,
        weatherData.weather[0].description,
        weatherData.weather[0].icon,
      ],
    };
    changeWeatherValues(returnedData, weatherValues.units);
    weatherForecast(returnedData.coords, loadingScreen);
  } catch (e) {
    alert('City not found');
  }
}
