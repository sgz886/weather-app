import Item from './components/Item';

export default function Meta({
  humidity,
  wind,
  isLoading
}) {
  return (
    <div className="">
      <Item title="HUMIDITY">
        {isLoading
          ? 'loading'
          : `${humidity} %`}
      </Item>
      <div key="splitBar" className="" />
      <Item title="WIND">
        {isLoading
          ? 'loading'
          : `${wind} KM/H`}
      </Item>
    </div>
  );
}
