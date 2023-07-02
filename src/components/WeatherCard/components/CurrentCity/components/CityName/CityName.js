export default function CityName({ children }) {
  return (
    <div className="w-48 flex justify-center">
      <div
        className="
          text-3xl tracking-wider font-medium
          after:content-[''] after:h-[3px] after:w-1/2 after:bg-light-primary
          after:block after:translate-x-1/2 after:mt-2
        "
      >
        {children}
      </div>
    </div>
  );
}
