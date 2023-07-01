import WeatherIcon from '../../../../../WeatherIcon';
import Temperature from '../../../../../Temperature';

export default function DayOfWeek({
  day, weather, temperature, icon
}) {
  return (
    <div className="">
      <div key="Day" className="">{day}</div>
      <WeatherIcon weather={weather}>{`${icon}@2x`}</WeatherIcon>
      <Temperature className="">{temperature}</Temperature>
    </div>
  );
}
