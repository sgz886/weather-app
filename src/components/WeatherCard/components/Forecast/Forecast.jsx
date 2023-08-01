import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';

export default function Forecast({ forecast, isLoading }) {
  return (
    <SubSection
      sectionClass='w-[450px] flex flex-col
        max-[800px]:w-auto max-[800px]:h-[240px]
        max-[800px]:px-7 max-[800px]:pt-5'
      title='Forecast'
      titleClass='ml-4 max-[800px]:ml-0'
    >
      {isLoading ? (
        <div className='grow flex justify-center items-center'>Loading</div>
      ) : (
        <div className='flex justify-around'>
          {forecast.map(({
            day, weather, temperature, icon,
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
