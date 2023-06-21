import Item from "./components/Item";

const Meta = () => {
  return (
    <div className="flex gap-8 justify-end mt-8">
      <Item title="HUMIDITY">86%</Item>
      <div className="w-[2px] bg-white/70"></div>
      <Item title="WIND">12 KM/H</Item>
    </div>
  );
};
export default Meta;
