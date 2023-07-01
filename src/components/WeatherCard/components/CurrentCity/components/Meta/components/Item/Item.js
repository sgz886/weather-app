export default function Item({ title, children }) {
  return (
    <div className="">
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
