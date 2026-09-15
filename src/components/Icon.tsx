import { IconContext } from "react-icons/lib";

type IconProps = {
  size?: string; // defaults to 16px
  icon?: React.ReactNode;
  color?: string; // defaults to currentColor
};

const Icon = ({ size, icon, color }: IconProps) => {
  return (
    <IconContext.Provider value={{ size: size, color: color}}>
      {icon}
    </IconContext.Provider>
  );
};

export default Icon;
