import OpenWeatherMap from '../openWeatherMap';

/*
  OneCall API:
  param:
    lat
    lon
    units
  api return:
    {
      current: {
        temp: number,               =>  temperature
        humidity: number 2 digits,  =>  humidity
        wind_speed: number float,   =>  wind
        weather: [{
          main: weather name,       =>  weather
        }]
      }
      daily: [
        {
          dt: number        =>  Day
          temp: {
            day:            =>  temperature
          }
          weather: {
            main:           =>  ?
            icon:           =>  icon
          }
        }
      ]

    }
*/

const onecall = (url, params) => OpenWeatherMap.get(url, {
  params
})
  .then((response) => response.data);

export default onecall;

const WEEK_DAYS = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CITIES = [
  {
    name: 'Melbourne',
    lat: -37.8142176,
    lon: 144.9631608,
  },
  {
    name: 'Sydney',
    lat: -33.8698439,
    lon: 151.2082848,
  },
  {
    name: 'Brisbane',
    lat: -27.4689682,
    lon: 153.0234991,
  },
  {
    name: 'Perth',
    lat: -31.9558964,
    lon: 115.8605801,
  },
];

export function parseOpenWeatherMap(data, cityName, setCurrent, setForecast) {
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
