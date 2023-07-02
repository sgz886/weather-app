import { useEffect, useState } from 'react';
import SubSection from '../../../SubSection';
import CityRow from './components/City';
import groupCall, {
  parseGroupWeather,
} from '../../../../apis/OpenWeatherMap/apis/groupCall';

export const CITIES = [
  {
    name: 'Melbourne',
    id: 2158177,
    lat: -37.8142176,
    lon: 144.9631608,
  },
  {
    name: 'Sydney',
    id: 2147714,
    lat: -33.8698439,
    lon: 151.2082848,
  },
  {
    name: 'Brisbane',
    id: 2174003,
    lat: -27.4689682,
    lon: 153.0234991,
  },
  {
    name: 'Perth',
    id: 2063523,
    lat: -31.9558964,
    lon: 115.8605801,
  },
];

export default function OtherCities({ onClickCity }) {
  const [otherCitiesWeather, setOtherCitiesWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const callGroupWeather = async () => {
    const data = await groupCall('/group', {
      id: CITIES.map(({ id }) => id).join()
    });
    parseGroupWeather(data, setOtherCitiesWeather);
  };

  useEffect(() => {
    setIsLoading(true);
    callGroupWeather()
      .finally(() => setIsLoading(false));
  }, []);
  // todo: 给多少宽度合适呢? 之前是w-80
  return (
    <SubSection
      sectionClass="w-[240px]"
      title="Other Cites"
      itemClass="flex flex-col justify-between"
    >
      {isLoading ? (
        <div>loading</div>
      ) : (otherCitiesWeather.map(({
        cityName: name,
        lat,
        lon,
        temperature,
        icon,
        weather,
      }) => (
        <CityRow
          key={name}
          name={name}
          lat={lat}
          lon={lon}
          temperature={temperature}
          icon={icon}
          weather={weather}
          onClick={() => onClickCity({ name, lat, lon })}
        />
      )))}
    </SubSection>
  );
}
