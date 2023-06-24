const Item = ({title, children}) => {
  return (
    <div className="text-white/70 text-center min-w-[90px]">
      <div className="mb-3">{title}</div>
      <div>{children}</div>
    </div>
  );
};
export default Item;
