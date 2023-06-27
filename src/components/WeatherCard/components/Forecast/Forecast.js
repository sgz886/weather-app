import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';

const DUMMY_FORECAST = [
  {
    dt: 1687917600,
    weather: [
      {
        main: 'cloud',
        icon: '10d',
      },
    ],
    temp: {
      day: 10.1
    },
  },
  {
    dt: 1687917600,
    weather: [
      {
        main: 'cloud',
        icon: '10d',
      },
    ],
    temp: {
      day: 10.1
    },
  },
  {
    dt: 1687917600,
    weather: [
      {
        main: 'cloud',
        icon: '10d',
      },
    ],
    temp: {
      day: 10.1
    },
  },
  {
    dt: 1687917600,
    weather: [
      {
        main: 'cloud',
        icon: '10d',
      },
    ],
    temp: {
      day: 10.1
    },
  },
  {
    dt: 1687917600,
    weather: [
      {
        main: 'cloud',
        icon: '10d',
      },
    ],
    temp: {
      day: 10.1
    },
  },
];
const WEEK_DAYS = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Forecast() {
  const data = DUMMY_FORECAST
    .map(({
      dt: timestamp,
      weather: { 0: weather },
      temp,
    }) => ({
      day: WEEK_DAYS[new Date(timestamp * 1000).getDay()],
      weather: {
        code: weather.icon,
        name: weather.main,
      },
      temperature: Number.parseInt(temp.day, 10),
    }));
  return (
    <SubSection title="Forecast">
      <div className="flex gap-4 justify-between">
        {data.map(({
          day,
          weather,
          temperature,
        }) => (
          <DayOfWeek
            key={day}
            day={day}
            weather={weather}
            temperature={temperature}
          />
        ))}
      </div>
    </SubSection>
  );
}
