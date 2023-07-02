export default function Item({ title, children }) {
  return (
    <div className="flex flex-col items-center">
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
