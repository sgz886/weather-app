import WeatherIcon from "../../../../../WeatherIcon";
import Temperature from "../../../../../Temperature";

const DayOfWeek = ({name, weather, temperature}) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div className='text-xl'>{name}</div>
      <WeatherIcon weather={weather.name} code={`${weather.code}@2x`} className=""/>
      <Temperature className="text-xl" value={temperature}/>
    </div>
  );
};
export default DayOfWeek;
