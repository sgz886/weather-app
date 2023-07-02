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
      <div className="flex flex-col h-[360px] max-[800px]:h-[320px]">
        <div
          className="
            px-20 py-16 grow
            flex justify-between
            text-light-primary
            max-[800px]:py-8
            max-[800px]:flex-col-reverse max-[800px]:items-center
            "
        >
          <div
            className="flex flex-col justify-between items-center w-60
                       max-[800px]:h-44 max-[800px]:w-60"
          >
            <Temperature
              className="
              text-7xl grow max-[800px]:text-5xl
              "
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
        <div key="splitBar" className="h-6 bg-black/70 max-[800px]:h-3" />
      </div>
    </BackgroundImage>
  );
}
