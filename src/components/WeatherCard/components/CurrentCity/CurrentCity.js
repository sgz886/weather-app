import Temperature from '../../../Temperature';
import Weather from './components/Weather';
import Meta from './components/Meta/Meta';
import CityName from './components/CityName';
import BackgroundImage from '../../../BackgroundImage';
import backgroundUrl from './assets/bg-current-city.jpg';

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

export default function CurrentCity({ current }) {
  return (
    <BackgroundImage url={backgroundUrl}>
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
