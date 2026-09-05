const SprocketHoles = () => {
  const num = 20;

  return (
    <div className="flex gap-5 px-4">
      {Array.from({ length: num }, (_, i) => (
        <div key={i} className="h-5 flex-1 rounded-xs bg-brand/70" />
      ))}
    </div>
  );
};

export default SprocketHoles;
