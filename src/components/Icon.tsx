import React from "react";
import { IconContext } from "react-icons/lib";
import { LuExternalLink } from "react-icons/lu";

type IconProps = {
  size?: string;
};

const Icon = ({ size = "24" }: IconProps) => {
  return (
    <IconContext.Provider value={{ className: "shared-class", size: size }}>
      <>
        <LuExternalLink />
      </>
    </IconContext.Provider>
  );
};

export default Icon;
