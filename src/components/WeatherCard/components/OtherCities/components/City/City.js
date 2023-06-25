import Name from "./components/Name";
import Temperature from "../../../../../Temperature";
import WeatherIcon from "../../../../../WeatherIcon";

const City = ({ name, temperature, weather, onClick }) => {
  return (
    <button
      className="
        flex justify-between items-center gap-1
        text-left w-full
        relative
        before:content-[''] before:w-[4px] before:h-[12px] before:absolute before:left-[-8px]
        hover:before:bg-black/40
      "
      onClick={onClick}
    >
      <Name>{name}</Name>
      <Temperature value={temperature} className="text-xl" />
      <WeatherIcon weather={weather.name} code={weather.code} className="" />
    </button>
  );
};
export default City;
