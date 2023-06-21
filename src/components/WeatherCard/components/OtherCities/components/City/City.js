import Name from "./components/Name";
import Temperature from "../../../../../Temperature";
import WeatherIcon from "../../../../../WeatherIcon";

const City = ({ name, temperature, weather }) => {
  return (
    <div className="flex items-center">
      <Name>{name}</Name>
      <Temperature value={temperature} className="text-xl" />
      <WeatherIcon weather={weather.name} code={weather.code} className="" />
    </div>
  );
};
export default City;
