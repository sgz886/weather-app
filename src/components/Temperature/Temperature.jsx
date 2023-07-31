export default function Temperature({ className, children, isLoading }) {
  return <div className={className}>{isLoading ? '...' : `${children}°`}</div>;
}
