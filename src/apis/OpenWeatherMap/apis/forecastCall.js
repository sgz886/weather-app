import openWeatherMap, { URLS } from '../openWeatherMap';

const WEEKDAYS = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

/**
 * Calls the OpenWeatherMap weather API
 *
 * @param {Object} params - The parameters to be passed to the API.
 * { appid: 'your_api_key', lat: '-37.00', lon: '144.00' }
 * @returns {Promise<Object>} - A promise that resolves to the weather data.
 * @example
 * // return value
 * {
 *   "cod": "200",
 *   "message": 0,
 *   "cnt": 40,
 *   "list": [
 *     {
 *       "dt": 1733367600,
 *       "main": {
 *         "temp": 304.23,
 *         "feels_like": 302.97,
 *         "temp_min": 304,
 *         "temp_max": 304.23,
 *         "pressure": 1015,
 *         "sea_level": 1015,
 *         "grnd_level": 1010,
 *         "humidity": 30,
 *         "temp_kf": 0.23
 *       },
 *       "weather": [
 *         {
 *           "id": 800,
 *           "main": "Clear",
 *           "description": "clear sky",
 *           "icon": "01d"
 *         }
 *       ],
 *       "clouds": {
 *         "all": 0
 *       },
 *       "wind": {
 *         "speed": 1.45,
 *         "deg": 230,
 *         "gust": 4.41
 *       },
 *       "visibility": 10000,
 *       "pop": 0,
 *       "sys": {
 *         "pod": "d"
 *       },
 *       "dt_txt": "2024-12-05 03:00:00"
 *     }
 *   ],
 *   "city": {
 *     "id": 2158177,
 *     "name": "Melbourne",
 *     "coord": {
 *       "lat": -37.814,
 *       "lon": 144.9633
 *     },
 *     "country": "AU",
 *     "population": 15000,
 *     "timezone": 39600,
 *     "sunrise": 1733338295,
 *     "sunset": 1733391014
 *   }
 * }
 */
const forecastCall = (params) => openWeatherMap.get(URLS.FORECAST, { params })
  .then((response) => response.data);

export default forecastCall;

/**
 *
 * @param forcastData - return value of {@link forecastCall}
 *
 * @example
 * // map result
 * {
 *   day: 'Mon',
 *   temperature: 1,
 *   weather: 'Clouds',
 *   icon: '04n',
 * }
 */
export const parseForecastCall = (forcastData, callback) => {
  const forecastOfFiveDays = forcastData.list
    .filter((_, index) => (index + 1) % 8 === 0);
  const mapForecasts = forecastOfFiveDays
    .map(({
      dt,
      main: { temp },
      weather: {
        0: {
          main,
          icon,
        },
      },
    }) => ({
      day: WEEKDAYS[new Date(dt * 1000).getDay()],
      temperature: Number.parseInt(temp, 10),
      weather: main,
      icon,
    }));
  callback(mapForecasts);
};
