const Name = ({ children }) => {
  return (
    <div
      className="text-white text-3xl font-medium
      after:content-[''] after:h-[3px] after:w-1/2 after:translate-x-1/2 after:bg-white after:block after:mt-2 
      "
    >
      {children}
    </div>
  );
};
export default Name;
