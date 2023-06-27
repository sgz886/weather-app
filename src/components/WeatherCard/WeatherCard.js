import CurrentCity from './components/CurrentCity';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';

export default function WeatherCard() {
  return (
    <div className="
      bg-white rounded-3xl shadow-2xl shadow-black/50
      min-w-[740px] min-h-[500px] my-auto overflow-hidden
    "
    >
      <CurrentCity />
      <div key="OtherCites and Forcast" className="flex h-[320px]">
        <OtherCities />
        <div key="splitBar" className="my-9 w-[3px] bg-black/10" />
        <Forecast />
      </div>
    </div>
  );
}
