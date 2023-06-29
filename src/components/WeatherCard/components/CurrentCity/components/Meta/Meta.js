import Item from './components/Item';

export default function Meta({
  humidity,
  wind,
  isLoading
}) {
  return (
    <div className="mt-8 flex gap-8 justify-end">
      <Item title="HUMIDITY">
        {isLoading
          ? 'loading'
          : `${humidity} %`}
      </Item>
      <div key="splitBar" className="w-[2px] bg-white/70" />
      <Item title="WIND">
        {isLoading
          ? 'loading'
          : `${wind} KM/H`}
      </Item>
    </div>
  );
}
