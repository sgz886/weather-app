import WeatherIcon from '../../../../../WeatherIcon';
import Temperature from '../../../../../Temperature';

export default function DayOfWeek({ day, weather, temperature }) {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div key="Day" className="text-xl">{day}</div>
      <WeatherIcon weather={weather.name}>{`${weather.code}@2x`}</WeatherIcon>
      <Temperature className="text-xl">{temperature}</Temperature>
    </div>
  );
}
