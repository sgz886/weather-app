import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CurrentCity from './components/CurrentCity';
import OtherCities from './components/OtherCities';
import Forecast from './components/Forecast';
import onecall, {
  parseCurrentWeatherAndForecast,
} from '../../apis/OpenWeatherMap/apis/onecall';
import { CITIES } from './components/OtherCities/OtherCities';

const CardContainer = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 1.5rem /* 24px */;
  width: 850px;
  height: 650px;
  background-color: white;
  overflow: hidden;
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 352px;
    height: auto;
  }
`;

const Bottom = styled.div`
  padding-top: 1.5rem /* 24px */;
  padding-bottom: 1.5rem /* 24px */;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding-left: 0;
    padding-right: 0;
  }
`;

const SplitBar = styled.div`
  width: 0.125rem /* 2px */;
  height: 15rem /* 240px */;
  background-color: rgb(0 0 0 / 0.2);
  @media (max-width: 800px) {
    width: auto;
    height: 1px;
  }
`;

export default function WeatherCard() {
  const [current, setCurrent] = useState({});
  const [city, setCity] = useState(CITIES[0]);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function callCurrentWeatherAndForecast() {
    const data = await onecall('/onecall', {
      lat: city.lat,
      lon: city.lon,
    });
    parseCurrentWeatherAndForecast(data, city.name, setCurrent, setForecast);
  }

  useEffect(() => {
    setIsLoading(true);
    callCurrentWeatherAndForecast().finally(() => setIsLoading(false));
  }, [city]);

  return (
    <CardContainer>
      <CurrentCity current={current} isLoading={isLoading} />
      <Bottom key='OtherCites and Forcast'>
        <OtherCities onClickCity={setCity} />
        <SplitBar key='splitBar' />
        <Forecast forecast={forecast} isLoading={isLoading} />
      </Bottom>
    </CardContainer>
  );
}
