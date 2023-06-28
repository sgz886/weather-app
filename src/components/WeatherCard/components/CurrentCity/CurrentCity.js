import { useEffect, useState } from 'react';
import Temperature from '../../../Temperature';
import Weather from './components/Weather';
import Meta from './components/Meta/Meta';
import CityName from './components/CityName';
import BackgroundImage from '../../../BackgroundImage';
import backgroundUrl from './assets/bg-current-city.jpg';
import onecall from '../../../../apis/OpenWeatherMap/onecall';

export const CITIES = [
  {
    name: 'Melbourne',
    lat: -37.8142176,
    lon: 144.9631608,
  },
  {
    name: 'Sydney',
    lat: -33.8698439,
    lon: 151.2082848,
  },
  {
    name: 'Brisbane',
    lat: -27.4689682,
    lon: 153.0234991,
  },
  {
    name: 'Perth',
    lat: -31.9558964,
    lon: 115.8605801,
  },
];

let cityNum = -1;

// const initialState = {
//   temp: 100,
//   humidity: 100,
//   wind_speed: 100,
//   weather: [
//     {
//       main: 'Tornado',
//       icon: '01D',
//     },
//   ],
// };

// const initialState = {
//   temperature: 100,
//   humidity: 100,
//   wind: 100,
//   weather: 'Tornado',
//   cityName: '???',
// };

export default function CurrentCity() {
  const [current, setCurrent] = useState({});
  async function test() {
    if (cityNum === CITIES.length - 1) {
      cityNum = 0;
    } else {
      cityNum += 1;
    }
    const data = await onecall('/onecall', {
      lat: CITIES[cityNum].lat,
      lon: CITIES[cityNum].lon,
    });
    console.log('data = ', data);
    const {
      current: {
        temp: temperature,
        humidity,
        wind_speed: wind,
        weather: { 0: { main: weather } },
      },
    } = data;
    setCurrent({
      temperature,
      humidity,
      wind,
      weather,
      cityName: CITIES[cityNum].name,
    });
  }

  useEffect(() => {
    test();
  }, []);

  return (
    <BackgroundImage url={backgroundUrl}>
      <button type="button" onClick={test}>debug</button>
      <div className="flex justify-between py-16 px-24 gap-24">
        <div>
          <Temperature
            className="text-white text-7xl text-center"
          >
            {current?.temperature}
          </Temperature>
          <Weather weather={current?.weather} />
          <Meta
            humidity={current?.humidity}
            wind={current?.wind}
          />
        </div>
        <CityName>{current?.cityName}</CityName>
      </div>
      <div className="bg-black/20 h-5" key="horizontalBar" />
    </BackgroundImage>
  );
}
