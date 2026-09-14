import type { ReactNode } from "react";

type PageHeroProps = {
  title: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  content?: ReactNode;
};

const PageHero = ({ title, children, actions, content }: PageHeroProps) => {
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-12 items-center">
      <div className="flex flex-col gap-6 lg:max-w-3xl lg:flex-1">
        <h1>{title}</h1>
        {children}
        {actions && (
          <div className="flex flex-wrap gap-3 sm:gap-4">{actions}</div>
        )}
      </div>
      <div className="w-full lg:w-2/5">{content}</div>
    </div>
  );
};

export default PageHero;
