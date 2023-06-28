import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';

export default function Forecast({ forecast }) {
  return (
    <SubSection title="Forecast">
      <div className="flex gap-4 justify-between">
        {forecast.map(({
          day,
          weather,
          temperature,
          icon,
        }) => (
          <DayOfWeek
            key={day}
            day={day}
            temperature={temperature}
            weather={weather}
            icon={icon}
          />
        ))}
      </div>
    </SubSection>
  );
}
