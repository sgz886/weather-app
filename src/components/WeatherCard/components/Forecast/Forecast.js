import DayOfWeek from "./components/DayOfWeek";
import SubSection from "../../../SubSection";
import { useEffect, useState } from "react";
import callOneWeather from "../../../../apis/OpenWeatherMap/apis/callOneWeather";

const Forecast = ({forecast, isLoading}) => {

  return (
    <SubSection title="Forecast">
      {isLoading && <div>loading</div>}
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
    </SubSection>
  );
};
export default Forecast;
