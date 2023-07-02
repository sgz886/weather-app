export default function WeatherIcon({
  weather,
  children,
  width,
}) {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${children}.png`}
      alt={weather}
      width={width}
    />
  );
}
