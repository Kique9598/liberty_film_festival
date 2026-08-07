import React from "react";

interface SectionProps {
  children?: React.ReactNode;
  className?: String;
}

const Section = ({ children, className }: SectionProps) => {
  const classes = `flex flex-col px-10 py-6 ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Section;
