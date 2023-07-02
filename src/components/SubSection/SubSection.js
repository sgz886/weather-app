export default function SubSection({
  sectionClass,
  title,
  titleClass,
  children,
  itemClass,
}) {
  return (
    <div className={sectionClass}>
      <div
        className={`text-2xl font-light tracking-widest mb-2 ${titleClass}`}
      >
        {title}
      </div>
      <div className={itemClass}>{children}</div>
    </div>
  );
}
