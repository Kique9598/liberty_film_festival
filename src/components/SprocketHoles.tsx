const SprocketHoles = () => {
  const num = 20;

  return (
    <div className="flex gap-5 px-4">
      {Array.from({ length: num }, (_, i) => (
        <div key={i} className="bg-[#B4C5B3] rounded-xs h-5 flex-1"></div>
      ))}
    </div>
  );
};

export default SprocketHoles;
