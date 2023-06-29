import Temperature from '../../../Temperature';
import Weather from './components/Weather';
import Meta from './components/Meta/Meta';
import CityName from './components/CityName';
import BackgroundImage from '../../../BackgroundImage';
import backgroundUrl from './assets/bg-current-city.jpg';

export default function CurrentCity({ current, isLoading }) {
  return (
    <BackgroundImage url={backgroundUrl}>
      <div className="flex justify-between py-16 px-24 gap-24">
        <div>
          <Temperature
            className="text-white text-7xl text-center"
            isLoading={isLoading}
          >
            {current?.temperature}
          </Temperature>
          <Weather
            isLoading={isLoading}
          >
            {current?.weather}
          </Weather>
          <Meta
            humidity={current?.humidity}
            wind={current?.wind}
            isLoading={isLoading}
          />
        </div>
        <CityName>{current?.cityName}</CityName>
      </div>
      <div className="bg-black/20 h-5" key="horizontalBar" />
    </BackgroundImage>
  );
}
