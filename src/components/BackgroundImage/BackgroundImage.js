export default function BackgroundImage({
  url,
  children,
}) {
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url(${url})` }}
    >
      {children}
    </div>
  );
}
