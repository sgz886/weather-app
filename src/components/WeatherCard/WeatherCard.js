import { useEffect, useState } from 'react';
import CurrentCity from './components/CurrentCity';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';
import onecall, {
  CITIES, parseOpenWeatherMap,
} from '../../apis/OpenWeatherMap/apis/onecall';

let cityNum = 0;

export default function WeatherCard() {
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);

  async function callOpenWeatherAPI() {
    if (cityNum === CITIES.length - 1) {
      cityNum = 0;
    } else {
      cityNum += 1;
    }
    const data = await onecall('/onecall', {
      lat: CITIES[cityNum].lat,
      lon: CITIES[cityNum].lon,
    });
    parseOpenWeatherMap(data, CITIES[cityNum].name, setCurrent, setForecast);
  }

  useEffect(() => {
    callOpenWeatherAPI();
  }, []);

  return (
    <div className="
      bg-white rounded-3xl shadow-2xl shadow-black/50
      min-w-[740px] min-h-[500px] my-auto overflow-hidden
    "
    >
      <button type="button" onClick={callOpenWeatherAPI}>debug</button>
      <CurrentCity current={current} />
      <div key="OtherCites and Forcast" className="flex h-[320px]">
        <OtherCities />
        <div key="splitBar" className="my-9 w-[3px] bg-black/10" />
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
}
