import CityName from './components/CityName';
import Temperature from '../../../../../Temperature';
import WeatherIcon from '../../../../../WeatherIcon';

export default function City({
  name,
  lat,
  lon,
  temperature,
  icon,
  weather,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex justify-between items-center gap-1
        text-left w-full
        relative
        before:content-[''] before:w-[4px] before:h-[12px] before:absolute before:left-[-8px]
        hover:before:bg-black/40
      "
    >
      <CityName>{name}</CityName>
      <Temperature className="text-xl">{temperature}</Temperature>
      <WeatherIcon weather={weather}>{icon}</WeatherIcon>
    </button>
  );
}
