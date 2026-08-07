import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <div className="flex flex-col px-10 py-6">{children}</div>;
};

export default Section;
