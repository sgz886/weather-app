import CurrentCity from "./components/CurrentCity";
import OtherCities from "./components/OtherCities";
import Forecast from "./components/Forecast";

const WeatherCard = () => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
      <CurrentCity />
      {/* todo: 下面div违反单一职责 */}
      <div className="flex gap-12 px-12 py-9">
        <OtherCities />
        <div className="w-[3px] bg-black/10"></div>
        <div className="flex-1"><Forecast/></div>
      </div>
    </div>
  );
};
export default WeatherCard;
