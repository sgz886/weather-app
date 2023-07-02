import OpenWeatherMap from '../openWeatherMap';

/*
OneCall API: /onecall
param:
  appid
  units
  lat
  lon
api return:
  {
    current: {
      temp: number,               =>  temperature
      humidity: number 2 digits,  =>  humidity
      wind_speed: number float,   =>  wind
      weather: [{
        main:             ,       =>  weather
      }]
    }
    daily: [
      {
        dt: number        =>  Day
        temp: {
          day:            =>  dayTemperature
        }
        weather: {
          main:           =>  dayWeather
          icon:           =>  icon
        }
      }
    ]

  }
*/
/*
Dummy return data for test
const currentWeather = {
  temperature: 100,
  humidity: 0,
  wind: 0,
  weather: 'Tornado',
  cityName: 'Melbourne',
}
const forecast = [
  {
    day: 'Mon',
    temperature: 100,
    weather: Tornado,
    icon: '10d',
  },
  {
    day: 'Mon',
    temperature: 100,
    weather: Tornado,
    icon: '10d',
  },
]
*/

const WEEK_DAYS = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

const onecall = (url, params) => OpenWeatherMap.get(url, { params })
  .then((response) => response.data);

export default onecall;

export function parseCurrentWeatherAndForecast(data, cityName, setCurrent, setForecast) {
  const {
    current: {
      temp: temperature,
      humidity,
      wind_speed: wind,
      weather: { 0: { main: weather } },
    },
  } = data;
  setCurrent({
    temperature,
    humidity,
    wind,
    weather,
    cityName,
  });

  const { daily } = data;
  const forecastOfFiveDays = daily
    .slice(0, 5)
    .map(({
      dt: timestamp,
      temp: { day: dayTemperature },
      weather: {
        0: {
          main: dayWeather,
          icon,
        },
      },
    }) => ({
      day: WEEK_DAYS[new Date(timestamp * 1000).getDay()],
      temperature: Number.parseInt(dayTemperature, 10),
      weather: dayWeather,
      icon,
    }));
  setForecast(forecastOfFiveDays);
}
