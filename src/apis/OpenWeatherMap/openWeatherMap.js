import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const UNITS = 'metric';
const APP_ID = 'cb2090ac2337df16d084f36f5d60c73e'; // key from jr class

const OpenWeatherMap = axios.create({
  baseURL: BASE_URL,
  params: {
    appId: APP_ID,
    units: UNITS,
  }
});
export default OpenWeatherMap;
