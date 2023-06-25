import CurrentCity from "./components/CurrentCity";
import OtherCities from "./components/OtherCities";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
import callOneWeather from "../../apis/OpenWeatherMap/apis/callOneWeather";

const CITIES = [
  { name: "Melbourne", lat: -37.8142176, lon: 144.9631608 },
  { name: "Sydney", lat: -33.8698439, lon: 151.2082848 },
  { name: "Brisbane", lat: -27.4689682, lon: 153.0234991 },
  { name: "Perth", lat: -31.9558964, lon: 115.8605801 },
];
const WEEK_DAYS = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];

const WeatherCard = () => {
  const [city, setCity] = useState(CITIES[0]);
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    callOneWeather("onecall", { lon: city.lon, lat: city.lat })
      .then(({ current, daily: forecast }) => {
        setCurrent(current);
        const forecastOfFiveDays = forecast
          ?.slice(1, 6)
          .map(({ dt: timestamp, weather: { 0: weather }, temp }) => ({
            name: WEEK_DAYS[new Date(timestamp * 1000).getDay()],
            weather: {
              code: weather.icon,
              name: weather.main,
            },
            temperature: Number.parseInt(temp.day),
          }));
        setForecast(forecastOfFiveDays);
      })
      .finally(() => setIsLoading(false));
  }, [city]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
      <CurrentCity name={city.name} current={current} isLoading={isLoading} />
      <div className="flex h-[320px] w-[956px]">
        <OtherCities onCityClick={(newCity) => setCity(newCity)} />
        <div className="my-9 w-[3px] bg-black/10"></div>
        <div className="flex-1">
          <Forecast forecast={forecast} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
