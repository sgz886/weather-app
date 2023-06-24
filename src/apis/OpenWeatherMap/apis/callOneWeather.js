import OpenWeatherMap from "../OpenWeatherMap";

const MELBOURNE_GEO = { lat: -37.8142176, lon: 144.9631608 };
const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 },
];
// const callOneWeather = (api) => {
//   const OPEN_WEATHER_API = `${BASE_URL}/${api}?lat=${MELBOURNE_GEO.lat}&lon=${MELBOURNE_GEO.lon}&appid=${appId}&units=${unit}`;
//   return fetch(OPEN_WEATHER_API).then((response) => response.json());
// };
const callOneWeather = (api) =>
  OpenWeatherMap.get(`/${api}`,{
    params:{
      lat: MELBOURNE_GEO.lat,
      lon: MELBOURNE_GEO.lon
    }
  })
  .then((response) => response.data);

// export const callGroupWeather = (api) => {
//   const OPEN_WEATHER_API = `${BASE_URL}/${api}?id=${CITIES.map(({id})=>id).join()}&appid=${appId}&units=${unit}`;
//   return fetch(OPEN_WEATHER_API).then((response) => response.json());
// }
export const callGroupWeather = (api) =>
  OpenWeatherMap.get(`/${api}`, {
    params: {
      id: CITIES.map(({ id }) => id).join()
    },
  })
  .then((response) => response.data);

export default callOneWeather;
