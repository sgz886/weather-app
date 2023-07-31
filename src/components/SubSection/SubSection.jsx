export default function SubSection({
  sectionClass,
  title,
  titleClass,
  children,
}) {
  return (
    <div className={sectionClass}>
      <div className={`text-2xl font-light tracking-widest mb-2 ${titleClass}`}>
        {title}
      </div>
      {children}
    </div>
  );
}
