import Temperature from '../../../Temperature';
import Weather from './components/Weather';
import Meta from './components/Meta/Meta';
import CityName from './components/CityName';
import BackgroundImage from '../../../BackgroundImage';
import backgroundUrl from './assets/bg-current-city.jpg';

export default function CurrentCity({
  current,
  isLoading,
}) {
  return (
    <BackgroundImage url={backgroundUrl}>
      <div className="h-[360px]">
        <div
          className="
            px-20 py-16 h-[calc(100%-1.5rem)]
            flex justify-between
            text-light-primary
            max-[700px]:px-0
            max-[700px]:justify-evenly
            "
        >
          <div
            className="flex flex-col justify-between items-center w-60"
          >
            <Temperature
              className="text-7xl grow"
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
        <div className="h-6 bg-black/70" />
      </div>
    </BackgroundImage>
  );
}
