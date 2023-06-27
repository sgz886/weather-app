export default function Weather({ weather }) {
  return (
    <div className="text-center mt-2">
      <span className="text-white/70 text-2xl tracking-widest">
        {weather}
      </span>
    </div>
  );
}
