import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';

export default function Forecast({ forecast, isLoading }) {
  return (
    <SubSection title="Forecast">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="">
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
      )}
    </SubSection>
  );
}
