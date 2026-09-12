import useWindowWidth from "../hooks/useWindowWidth";

type SprocketProps = {
  variant?: "top" | "bottom";
};

const SprocketHoles = ({ variant }: SprocketProps) => {
  const width = useWindowWidth();
  const num = width * 0.019;

  return (
    <div className="flex gap-5 px-4">
      {Array.from({ length: num }, (_, i) => (
        <div
          key={i}
          className={`h-5 flex-1 ${variant != "top" ? "rounded-b-xs" : ""} ${variant != "bottom" ? "rounded-t-xs" : ""} bg-[#7B9C7C]`}
        />
      ))}
    </div>
  );
};

export default SprocketHoles;
