export default function WeatherIcon({
  weather,
  children,
}) {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${children}.png`}
      alt={weather}
    />
  );
}
