import WeatherIcon from '../../../../../WeatherIcon';
import Temperature from '../../../../../Temperature';

export default function DayOfWeek({
  day, weather, temperature, icon,
}) {
  return (
    <div className='flex flex-col justify-between items-center gap-4'>
      <div key='Day' className='mt-4 text-xl'>
        {day}
      </div>
      <WeatherIcon width='75px' weather={weather}>{`${icon}@2x`}</WeatherIcon>
      <Temperature className='text-lg'>{temperature}</Temperature>
    </div>
  );
}
