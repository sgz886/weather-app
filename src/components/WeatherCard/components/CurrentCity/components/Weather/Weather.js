export default function Weather({ children, isLoading }) {
  return (
    <div className="">
      <span className="">
        {isLoading
          ? 'loading'
          : children}
      </span>
    </div>
  );
}
