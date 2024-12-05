import openWeatherMap, { URLS } from '../openWeatherMap';

/**
 * Calls the OpenWeatherMap weather API
 *
 * @param {Object} params - The parameters to be passed to the API.
 * { appid: 'your_api_key', lat: '-37.00', lon: '144.00' }
 * @returns {Promise<Object>} - A promise that resolves to the weather data.
 * @example
 * // return value
 * {
 *   "coord": {
 *     "lon": 144.9633,
 *     "lat": -37.814
 *   },
 *   "weather": [
 *     {
 *       "id": 800,
 *       "main": "Clear",
 *       "description": "clear sky",
 *       "icon": "01d"
 *     }
 *   ],
 *   "base": "stations",
 *   "main": {
 *     "temp": 303.57,
 *     "feels_like": 302.98,
 *     "temp_min": 300.88,
 *     "temp_max": 306.79,
 *     "pressure": 1015,
 *     "humidity": 37,
 *     "sea_level": 1015,
 *     "grnd_level": 1011
 *   },
 *   "visibility": 10000,
 *   "wind": {
 *     "speed": 2.06,
 *     "deg": 290
 *   },
 *   "clouds": {
 *     "all": 0
 *   },
 *   "dt": 1733360228,
 *   "sys": {
 *     "type": 2,
 *     "id": 2008797,
 *     "country": "AU",
 *     "sunrise": 1733338295,
 *     "sunset": 1733391014
 *   },
 *   "timezone": 39600,
 *   "id": 2158177,
 *   "name": "Melbourne",
 *   "cod": 200
 * }
 */
const weatherCall = (params) => openWeatherMap.get(URLS.WEATHER, { params })
  .then((response) => response.data);

/**
 *
 * @param weatherData - return value of {@link weatherCall}
 *
 * @example
 * // map result
 * {
 *   temperature: 1.11,
 *   humidity: 100,
 *   wind: 1.11,
 *   weather: 'Clear',
 *   icon: '04n',
 * }
 */
export const parseWeatherCall = (weatherData, callback) => {
  const weatherForCity = {
    temperature: weatherData.main.temp,
    humidity: weatherData.main.humidity,
    wind: weatherData.wind.speed,
    weather: weatherData.weather[0].main,
    cityName: weatherData.name,
  };
  callback(weatherForCity);
};

export default weatherCall;
