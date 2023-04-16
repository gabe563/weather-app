function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(
  require.context('./assets/weatherImages', false, /\.(png|jpe?g|svg)$/)
);

function getImage(name) {
  return images[`${name}.png`].default;
}

export function changeWeatherValues(obj, units) {
  let currentTempMeasure = '';
  let currentWindMeasure = '';
  function changeCurrentMeasureDisp() {
    if (units === 'imperial') {
      currentTempMeasure = '°F';
      currentWindMeasure = 'MPH';
    } else if (units === 'metric') {
      currentTempMeasure = '°C';
      currentWindMeasure = 'KM/H';
    }
  }
  changeCurrentMeasureDisp();

  const weatherState = document.querySelector('.weather-state p');
  const weatherPlace = document.querySelector('.weather-place p');
  const actualTemp = document.querySelector('.tempVal p');

  const weatherConditions = document.querySelector('.weather-conditions');

  let capitalizeWeather =
    obj.weather[1].charAt(0).toUpperCase() + obj.weather[1].slice(1);

  weatherState.textContent = capitalizeWeather;

  weatherPlace.textContent = `${obj.name}, ${obj.country}`;

  actualTemp.innerHTML = `${Math.round(
    obj.temperature
  )}<span class="scale">${currentTempMeasure}</span>`;

  weatherConditions.children[0].innerHTML = `FEELS LIKE: ${Math.round(
    obj.weatherState.feelsLike
  )}<span class="scale">${currentTempMeasure}</span>`;

  weatherConditions.children[1].innerHTML = `WIND: ${Math.round(
    obj.weatherState.wind
  )} ${currentWindMeasure}`;

  weatherConditions.children[2].innerHTML = `HUMIDITY: ${obj.weatherState.humidity}%`;

  switchImage(obj.weather[0], capitalizeWeather);
}

function switchImage(main, desc) {
  const image = document.querySelector('.side-page');
  function setImage(name) {
    return (image.style.backgroundImage = `url(${getImage(name)})`);
  }
  switch (main) {
    case 'Clear':
      setImage('clear');
      break;
    case 'Thunderstorm':
      setImage('thunder');
      break;
    case 'Mist':
    case 'Haze':
    case 'Dust':
    case 'Fog':
      setImage('mist');
      break;
    case 'Snow':
      setImage('snow');
      break;
    case 'Clouds':
      switch (desc) {
        case 'Few clouds':
        case 'Scattered clouds':
          setImage('scattered');
          break;
        case 'Broken clouds':
        case 'Overcast clouds':
          setImage('overcast');
          break;
      }
      break;
    case 'Rain':
    case 'Drizzle':
      setImage('rain');
      break;
  }
}
