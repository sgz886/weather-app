export default function BackgroundImage({
  url,
  children,
}) {
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  );
}
