const SubSection = ({ title, children }) => {
  return (
    <div>
      <div className="text-2xl">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default SubSection;
