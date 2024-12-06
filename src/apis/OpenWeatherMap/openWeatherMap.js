import axios from 'axios';

const openWeatherMap = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_BASE_URL,
  params: {
    appId: process.env.REACT_APP_WEATHER_API_KEY,
    units: process.env.REACT_APP_WEATHER_UNITS,
  },
});

export default openWeatherMap;

export const URLS = {
  GROUP: '/group',
  FORECAST: '/forecast',
  WEATHER: '/weather',
};
