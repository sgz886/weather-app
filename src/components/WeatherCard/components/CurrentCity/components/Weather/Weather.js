export default function Weather({ children, isLoading }) {
  return (
    <div className="grow-[3]">
      <span className="text-light-secondary text-2xl tracking-widest">
        {isLoading
          ? 'loading'
          : children}
      </span>
    </div>
  );
}
