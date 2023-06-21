import WeatherIcon from "../../../../../WeatherIcon";
import Temperature from "../../../../../Temperature";

const DayOfWeek = ({name, weather, temperature}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div>{name}</div>
      <WeatherIcon weather={weather.name} code={weather.code} className=""/>
      <Temperature className="text-xl" value={temperature}/>
    </div>
  );
};
export default DayOfWeek;
