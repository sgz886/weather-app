import Item from './components/Item';

export default function Meta({
  humidity,
  wind,
  isLoading
}) {
  return (
    <div className="
      w-full flex justify-between text-light-secondary
      max-[700px]:justify-evenly
    "
    >
      <Item title="HUMIDITY">
        {isLoading
          ? 'loading'
          : `${humidity} %`}
      </Item>
      <div key="splitBar" className="w-[2px] h-full bg-light-secondary" />
      <Item title="WIND">
        {isLoading
          ? 'loading'
          : `${wind} KM/H`}
      </Item>
    </div>
  );
}
