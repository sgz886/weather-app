import { useEffect, useState } from 'react';
import SubSection from '../../../SubSection';
import CityRow from './components/CityRow';
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
      id: CITIES.map(({ id }) => id).join(),
    });
    parseGroupWeather(data, setOtherCitiesWeather);
  };

  useEffect(() => {
    setIsLoading(true);
    callGroupWeather().finally(() => setIsLoading(false));
  }, []);
  return (
    <SubSection
      sectionClass='w-[240px] flex flex-col
        max-[800px]:h-[280px] max-[800px]:w-full max-[800px]:px-7 max-[800px]:pt-5'
      title='Other Cites'
    >
      {isLoading ? (
        <div className='grow flex justify-center items-center'>Loading</div>
      ) : (
        <div className='flex flex-col justify-around'>
          {otherCitiesWeather.map(
            ({
              cityName: name, lat, lon, temperature, icon, weather,
            }) => (
              <CityRow
                key={name}
                name={name}
                lat={lat}
                lon={lon}
                temperature={temperature}
                icon={icon}
                weather={weather}
                onClick={() => onClickCity({
                  name,
                  lat,
                  lon,
                })}
              />
            ),
          )}
        </div>
      )}
    </SubSection>
  );
}
