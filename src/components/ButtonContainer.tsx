import type { ReactNode } from "react";

type ButtonContainerProps = {
  children: ReactNode;
};

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-4 
                 sm:justify-start"
    >
      {children}
    </div>
  );
};

export default ButtonContainer;
