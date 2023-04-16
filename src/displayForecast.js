export function changeForecastValues(temp) {
  let week = [];
  function nameWeek() {
    let date = new Date().getDay();
    switch (date) {
      case 0:
        week = [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ];
        return week;
      case 1:
        week = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ];
        return week;
      case 2:
        week = [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
        ];
        return week;
      case 3:
        week = [
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
        ];
        return week;
      case 4:
        week = [
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
        ];
        return week;
      case 5:
        week = [
          'Friday',
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
        ];
        return week;
      case 6:
        week = [
          'Saturday',
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ];
        return week;
    }
  }
  nameWeek();
  const days = document.querySelectorAll('.week .day');
  days.forEach((day, i) => {
    day.querySelector('.name p').textContent = week[i];
    day.querySelector('.temp p').textContent = `${Math.round(
      temp[i].temp.day
    )} / ${Math.round(temp[i].temp.night)}`;
    function changeIcon() {
      switch (temp[i].weather[0].main) {
        case 'Clouds':
          switch (temp[i].weather[0].icon) {
            case '02d':
              return 'https://assets5.lottiefiles.com/temp/lf20_dgjK9i.json';
            case '02n':
              return 'https://assets5.lottiefiles.com/temp/lf20_Jj2Qzq.json';
            default:
              return 'https://assets5.lottiefiles.com/temp/lf20_VAmWRg.json';
          }
        case 'Rain':
          switch (temp[i].weather[0].icon) {
            case '10d':
            case '09d':
              return 'https://assets2.lottiefiles.com/temp/lf20_rpC1Rd.json';
            case '10n':
            case '09n':
              return 'https://assets9.lottiefiles.com/temp/lf20_I5XMi9.json';
            case '13d':
              return 'https://assets8.lottiefiles.com/temp/lf20_BSVgyt.json';
            case '13n':
              return 'https://assets8.lottiefiles.com/temp/lf20_RHbbn6.json';
          }
        case 'Clear':
          switch (temp[i].weather[0].icon) {
            case '01d':
              return 'https://assets10.lottiefiles.com/temp/lf20_Stdaec.json';
            case '01n':
              return 'https://assets6.lottiefiles.com/temp/lf20_y6mY2A.json';
          }
        case 'Thunderstorm':
          switch (temp[i].weather[0].id) {
            case 200:
            case 201:
            case 202:
              return 'https://assets9.lottiefiles.com/temp/lf20_XkF78Y.json';
            default:
              return 'https://assets8.lottiefiles.com/temp/lf20_Kuot2e.json ';
          }
        case 'Snow':
          return 'https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json';
        case 'Mist':
          return 'https://assets6.lottiefiles.com/temp/lf20_kOfPKE.json';
      }
    }
    day.querySelector('.anim lottie-player').load(changeIcon());
  });
}
