import './App.css';
import WeatherCard from './components/WeatherCard';
import BackgroundImage from './components/BackgroundImage';
import backgroundUrl from './assets/app-bg.jpg';

function App() {
  return (
    <BackgroundImage url={backgroundUrl}>
      <div className="h-screen flex justify-center">
        <WeatherCard />
      </div>
    </BackgroundImage>
  );
}

export default App;
