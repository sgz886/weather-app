export default function SubSection({ title, children }) {
  return (
    <div className="">
      <div className="">{title}</div>
      <div className="">{children}</div>
    </div>
  );
}
