import WeatherIcon from '../../../../../WeatherIcon';
import Temperature from '../../../../../Temperature';

export default function DayOfWeek({
  day, weather, temperature, icon
}) {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div key="Day" className="text-xl">{day}</div>
      <WeatherIcon weather={weather}>{`${icon}@2x`}</WeatherIcon>
      <Temperature className="text-xl">{temperature}</Temperature>
    </div>
  );
}
