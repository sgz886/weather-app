import CityName from './components/CityName';
import Temperature from '../../../../../Temperature';
import WeatherIcon from '../../../../../WeatherIcon';

export default function CityRow({
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
      className="flex justify-between items-center"
    >
      <CityName>{name}</CityName>
      <Temperature className="text-lg">{temperature}</Temperature>
      <WeatherIcon weather={weather}>{icon}</WeatherIcon>
    </button>
  );
}
