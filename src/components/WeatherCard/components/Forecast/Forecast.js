import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';

export default function Forecast({
  forecast,
  isLoading,
}) {
  return (
    <SubSection
      sectionClass="w-[450px]"
      title="Forecast"
      titleClass="ml-4"
      itemClass="flex justify-between"
    >
      {isLoading ? (
        <div>Loading</div>
      ) : (
        forecast
          .map(({
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
          )))}
    </SubSection>
  );
}
