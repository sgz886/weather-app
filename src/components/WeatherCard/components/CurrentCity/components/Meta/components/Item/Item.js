export default function Item({ title, children }) {
  return (
    <div className="text-white/70 text-center min-w-[90px]">
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
}
