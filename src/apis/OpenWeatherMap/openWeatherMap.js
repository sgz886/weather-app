import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const UNITS = 'metric';
const APP_ID = 'f374031ca22934d2b6e6116d3abd2eea';

const openWeatherMap = axios.create({
  baseURL: BASE_URL,
  params: {
    appId: APP_ID,
    units: UNITS,
  },
});
export default openWeatherMap;

export const URLS = {
  GROUP: '/group',
  FORECAST: '/forecast',
  WEATHER: '/weather',
};
