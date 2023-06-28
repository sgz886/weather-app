import instance from './instance';

/*
  OneCall API:
  param:
    lat
    lon
    units
  api return:
    {
      current: {
        temp: number,
        humidity: number 2 digits,
        wind_speed: number float,
        weather: [{
          main: weather name,
          icon: weather  icon,
        }]
      }
    }

  program need:
  {
    temperature: ,
    humidity: ,
    wind: ,
    weather
  }
*/

const onecall = (url, params) => instance.get(url, {
  params
})
  .then((response) => response.data);

export default onecall;
