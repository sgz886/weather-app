import Item from "./components/Item";

const Meta = ({humidity, wind, isLoading}) => {

  return (
    <div className="flex gap-8 justify-end mt-8">
      <Item title="HUMIDITY">
        {isLoading?'loading':`${humidity} %`}
      </Item>
      <div className="w-[2px] bg-white/70"></div>
      <Item title="WIND">
        {isLoading?'loading':`${wind} KM/H`}
      </Item>
    </div>
  );
};
export default Meta;
