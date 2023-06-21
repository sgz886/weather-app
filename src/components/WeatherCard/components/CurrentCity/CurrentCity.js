import Temperature from "../../../Temperature";
import Weather from "./components/Weather";
import Meta from "./components/Meta";
import Name from "./components/Name";
import BackgroundImage from "../../../BackgroundImage";
import bg from "./assets/bg-current-city.jpg";

const CurrentCity = () => {
  return (
    <BackgroundImage image={bg}>
      <div className="flex justify-between py-16 px-24 gap-48">
        <div>
          <Temperature
            className="text-white text-7xl text-center"
            value="17.9" />
          <Weather value="Clouds"/>
          <Meta />
        </div>
        <Name>Melbourne</Name>
      </div>
      <div className="bg-black/20 h-5" />
    </BackgroundImage>
  );
};
export default CurrentCity;
