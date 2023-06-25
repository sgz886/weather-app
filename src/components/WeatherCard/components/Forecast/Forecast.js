import DayOfWeek from "./components/DayOfWeek";
import SubSection from "../../../SubSection";

const Forecast = ({ forecast, isLoading }) => {
  return (
    <SubSection title="Forecast">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div className="flex gap-4 justify-between">
          {forecast?.map(({ name, weather, temperature }) => (
            <DayOfWeek
              key={name}
              name={name}
              weather={weather}
              temperature={temperature}
            />
          ))}
        </div>
      )}
    </SubSection>
  );
};
export default Forecast;
