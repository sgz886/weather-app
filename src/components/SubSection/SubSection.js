export default function SubSection({ title, children }) {
  return (
    <div className="px-12 py-9 h-full">
      <div className="text-2xl font-light tracking-widest">{title}</div>
      <div className="mt-4 h-auto">{children}</div>
    </div>
  );
}
