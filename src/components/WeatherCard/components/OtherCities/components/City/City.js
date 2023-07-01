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
      className=""
    >
      <CityName>{name}</CityName>
      <Temperature className="">{temperature}</Temperature>
      <WeatherIcon weather={weather}>{icon}</WeatherIcon>
    </button>
  );
}
