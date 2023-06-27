import SubSection from '../../../SubSection';
import City from './components/City';

const OTHER_CITIES = [
  {
    name: 'Melbourne',
    temperature: 13,
    weather: {
      code: '04n',
      name: 'Clouds',
    },
  },
  {
    name: 'Sydney',
    temperature: 14,
    weather: {
      code: '04n',
      name: 'Clouds',
    },
  },
  {
    name: 'Brisbane',
    temperature: 15,
    weather: {
      code: '04n',
      name: 'Clouds',
    },
  },
  {
    name: 'Perth',
    temperature: 16,
    weather: {
      code: '04n',
      name: 'Clouds',
    },
  },
];

export default function OtherCities() {
  return (
    <SubSection title="Other Cites">
      {OTHER_CITIES.map(({
        name,
        temperature,
        weather: {
          code: icon,
          name: weather,
        },
      }) => (
        <City
          key={name}
          name={name}
          temperature={temperature}
          icon={icon}
          weather={weather}
        />
      ))}
    </SubSection>
  );
}
