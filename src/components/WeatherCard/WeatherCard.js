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
    callCurrentWeatherAndForecast()
      .finally(() => setIsLoading(false));
  }, [city]);

  return (
    <div className="">
      <CurrentCity
        current={current}
        isLoading={isLoading}
      />
      <div key="OtherCites and Forcast" className="">
        <OtherCities
          onClickCity={setCity}
        />
        <div key="splitBar" className="" />
        <Forecast
          forecast={forecast}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
