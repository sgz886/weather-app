export default function CityName({ children }) {
  return (
    <div className="w-48 flex justify-center">
      <h1
        className="
          text-3xl tracking-wider font-medium
          after:content-[''] after:h-[3px] after:w-1/2 after:bg-light-primary
          after:block after:translate-x-1/2 after:mt-2
          max-[800px]:text-3xl max-[800px]:font-light
          max-[800px]:after:h-[1px]
        "
      >
        {children}
      </h1>
    </div>
  );
}
