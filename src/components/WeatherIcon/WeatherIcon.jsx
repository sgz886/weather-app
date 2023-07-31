export default function WeatherIcon({ weather, children, width }) {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${children}.png`}
      alt={weather}
      width={width}
      className='max-[800px]:w-[50px]'
    />
  );
}
