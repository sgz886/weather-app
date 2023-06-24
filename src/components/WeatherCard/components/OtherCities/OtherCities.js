import City from "./components/City";
import SubSection from "../../../SubSection";
import { useEffect, useState } from "react";
import { callGroupWeather } from "../../../../apis/OpenWeatherMap/apis/callOneWeather";

const OTHER_CITIES = [
  {
    name: "Sydney",
    temperature: 14,
    weather: { code: "04n", name: "Clouds" },
  },
  {
    name: "Brisbane",
    temperature: 15,
    weather: { code: "04n", name: "Clouds" },
  },
  {
    name: "Perth",
    temperature: 16,
    weather: { code: "04n", name: "Clouds" },
  },
];

const OtherCities = () => {
  const [others, setOthers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    callGroupWeather("group")
      .then((data) => {
        console.log("data = ", data);
        const map = data.list.map(({ name, main: { temp }, weather }) => ({
          name: name,
          temperature: Number.parseInt(temp),
          weather: {
            name: weather[0].main,
            code: weather[0].icon,
          },
        }));
        setOthers(map);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <SubSection title="Other Cities">
      {isLoading && <div>loading</div>}
      {others.map(({ name, temperature, weather }) => (
        <City
          key={name}
          name={name}
          temperature={temperature}
          weather={weather}
        />
      ))}
    </SubSection>
  );
};
export default OtherCities;
