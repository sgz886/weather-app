import OpenWeatherMap from '../openWeatherMap';

/*
GroupCall API: /group
param:
  appid
  units
  id        (1,2,3,4)
api return:
  {
    list: [
      {
        coord: {
          lon:              =>  lon
          lat:              =>  lat
        }
        weather: [
          {
            main:           =>  weather
            icon:           =>  icon
          }
        ]
        main {
          temp:              =>  temperature
        }
        name:                =>  cityName
      }
    ]
  }
*/
/*
Dummy return data for test
const OTHER_CITIES = [
  {
    name: 'Melbourne',
    temperature: 13,
    weather: '04n',
    icon: 'Clouds',
  },
  {
    name: 'Sydney',
    temperature: 14,
    weather: '04n',
    icon: 'Clouds',
  },
*/

export const parseGroupWeather = (data, setOtherCitiesWeather) => {
  const { list } = data;
  const otherCitesWeather = list.map(({
    coord: { lat, lon },
    weather: {
      0: {
        main: weather,
        icon,
      },
    },
    main: { temp: temperature },
    name: cityName,
  }) => ({
    weather,
    icon,
    temperature: Number.parseInt(temperature, 10),
    cityName,
    lat,
    lon,
  }));
  setOtherCitiesWeather(otherCitesWeather);
};

const groupCall = (url, params) => OpenWeatherMap.get(
  url,
  { params },
)
  .then(
    (response) => response.data
  );

export default groupCall;
