const Weather = ({ weather, isLoading }) => {
  return (
    <div className="text-center mt-2">
      <span className="text-white/70 text-2xl tracking-widest">
        {isLoading ? "loading" : weather}
      </span>
    </div>
  );
};
export default Weather;
