import { useEffect, useState } from 'react';
import CurrentCity from './components/CurrentCity';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';
import onecall, {
  parseCurrentWeatherAndForecast,
} from '../../apis/OpenWeatherMap/apis/onecall';
import { CITIES } from './components/OtherCities/OtherCities';

export default function WeatherCard() {
  const [current, setCurrent] = useState({});
  const [city, setCity] = useState(CITIES[0]);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function callCurrentWeatherAndForecast() {
    const data = await onecall('/onecall', {
      lat: city.lat,
      lon: city.lon,
    });
    parseCurrentWeatherAndForecast(data, city.name, setCurrent, setForecast);
  }

  useEffect(() => {
    setIsLoading(true);
    callCurrentWeatherAndForecast().finally(() => setIsLoading(false));
  }, [city]);

  return (
    <div
      className='
      my-auto rounded-3xl
      w-[850px] h-[650px]  bg-white overflow-hidden
      max-[900px]:w-[90%]
      max-[800px]:w-[352px] max-[800px]:h-auto
    '
    >
      <CurrentCity current={current} isLoading={isLoading} />
      <div
        key='OtherCites and Forcast'
        className='
          py-6 flex justify-evenly
          max-[800px]:flex-col-reverse max-[800px]:py-0
          '
      >
        <OtherCities onClickCity={setCity} />
        <div
          key='splitBar'
          className='w-0.5 h-60 bg-black/20 max-[800px]:w-auto max-[800px]:h-[1px]'
        />
        <Forecast forecast={forecast} isLoading={isLoading} />
      </div>
    </div>
  );
}
