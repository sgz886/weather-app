import OpenWeatherMap from "../OpenWeatherMap";

const MELBOURNE_GEO = { lat: -37.8142176, lon: 144.9631608 };
const CITIES = [
  { name: "Melbourne", id: 2158177 },
  { name: "Sydney", id: 2147714 },
  { name: "Brisbane", id: 2174003 },
  { name: "Perth", id: 2063523 },
];

const callOneWeather = (api,params) =>
  OpenWeatherMap.get(`/${api}`,{
    params:params
  })
  .then((response) => response.data);

export const callGroupWeather = (api) =>
  OpenWeatherMap.get(`/${api}`, {
    params: {
      id: CITIES.map(({ id }) => id).join()
    },
  })
  .then((response) => response.data);

export default callOneWeather;
