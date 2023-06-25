import Temperature from "../../../Temperature";
import Weather from "./components/Weather";
import Meta from "./components/Meta";
import Name from "./components/Name";
import BackgroundImage from "../../../BackgroundImage";
import bg from "./assets/bg-current-city.jpg";

const CurrentCity = ({ name, current, isLoading }) => {
  const {
    humidity,
    wind_speed: wind,
    temp: temperature,
    weather: {
      0: { main: weather } = {}
    } = {}
  } = current;

  return (
    <BackgroundImage image={bg}>
      <div className="flex justify-between py-16 px-24 gap-48">
        <div>
          <Temperature
            className="text-white text-7xl text-center"
            value={temperature}
            isLoading={isLoading}
          />
          <Weather weather={weather} isLoading={isLoading} />
          <Meta humidity={humidity} wind={wind} isLoading={isLoading} />
        </div>
        <Name>{name}</Name>
      </div>
      <div className="bg-black/20 h-5" />
    </BackgroundImage>
  );
};
export default CurrentCity;
