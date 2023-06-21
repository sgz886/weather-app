import WeatherCard from "./components/WeatherCard";
import bg from "./assets/app-bg.jpg";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <BackgroundImage image={bg}>
      <div className="h-screen flex justify-center items-center">
        <WeatherCard />
      </div>
    </BackgroundImage>
  );
}

export default App;
