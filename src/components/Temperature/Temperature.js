import DegreeCelsius from './components/DegreeCelsius/DegreeCelsius';

export default function Temperature({ className, children }) {
  return (
    <div className={className}>
      <DegreeCelsius>{children}</DegreeCelsius>
    </div>
  );
}
