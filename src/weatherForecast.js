import { changeForecastValues } from './displayForecast';
import { weatherValues } from './currentWeather';

export default async function weatherForecast(obj, loadingScreen) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.lat}&lon=${obj.lon}&exclude=current,hourly,minutely&units=${weatherValues.units}&appid=0ad713fac120b83bd907261fb7742fd7`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    changeForecastValues(weatherData.daily);
    loadingScreen.style.display = 'none';
  } catch (e) {
    console.log(e);
  }
}
