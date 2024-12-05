import openWeatherMap, { URLS } from '../openWeatherMap';

/**
 * Calls the OpenWeatherMap group API
 *
 * @param {Object} params - The parameters to be passed to the API.
 * { appid: 'your_api_key', units: 'metric', id: '1,2' }
 * @returns {Promise<Object>} - A promise that resolves to the weather data for specified cities.
 * @example
 * // return value
 * {
 *   "cnt": 4,
 *   "list": [
 *     {
 *       "coord": {
 *         "lon": 144.9633,
 *         "lat": -37.814
 *       },
 *       "sys": {
 *         "country": "AU",
 *         "timezone": 39600,
 *         "sunrise": 1733338295,
 *         "sunset": 1733391014
 *       },
 *       "weather": [
 *         {
 *           "id": 800,
 *           "main": "Clear",
 *           "description": "clear sky",
 *           "icon": "01d"
 *         }
 *       ],
 *       "main": {
 *         "temp": 27.95,
 *         "feels_like": 28.06,
 *         "temp_min": 24.39,
 *         "temp_max": 30.56,
 *         "pressure": 1016,
 *         "sea_level": 1016,
 *         "grnd_level": 1012,
 *         "humidity": 46
 *       },
 *       "visibility": 10000,
 *       "wind": {
 *         "speed": 1.54,
 *         "deg": 30
 *       },
 *       "clouds": {
 *         "all": 0
 *       },
 *       "dt": 1733357345,
 *       "id": 2158177,
 *       "name": "Melbourne"
 *     },...,
 *   ]
 * }
 */
const groupCall = (params) => openWeatherMap.get(URLS.GROUP, { params })
  .then((response) => response.data);

/**
 * Parses the weather data for multiple cities.
 *
 * @param {Object} groupData - The raw data from the weather API.
 * @param {Function} callback - A callback function to handle the parsed data.
 * @returns {void} - Does not return a value, but invokes callback with the grouped weather data.
 * @example
 * // map result will be
 * [
 *   {
 *     weather: 'Clear',
 *     icon: '01d',
 *     temperature: 20,
 *     cityName: 'Los Angeles'
 *     lat: 34.05,
 *     lon: -118.25,
 *   }
 * ]
 */
export const parseGroupCall = (groupData, callback) => {
  const groupedWeather = groupData.list.map(
    ({
      coord: { lat, lon },
      weather: {
        0: { main, icon },
      },
      main: { temp },
      name,
    }) => ({
      weather: main,
      icon,
      temperature: Number.parseInt(temp, 10),
      cityName: name,
      lat,
      lon,
    }),
  );
  callback(groupedWeather);
};

export default groupCall;
