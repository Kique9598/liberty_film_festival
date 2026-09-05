import type { ReactNode } from "react";

type TwoColumnMediaProps = {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  mediaClassName?: string;
  reverse?: boolean;
};

const TwoColumnMedia = ({
  title,
  children,
  actions,
  mediaClassName = "media-placeholder max-w-[520px]",
  reverse = false,
}: TwoColumnMediaProps) => {
  const textOrder = reverse
    ? "md:col-start-2 md:row-start-1 md:row-span-2"
    : "md:col-start-1 md:row-start-1 md:row-span-2";
  const mediaOrder = reverse
    ? "md:col-start-1 md:row-start-1 md:row-span-2"
    : "md:col-start-2 md:row-start-1 md:row-span-2";

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-10">
      <div
        className={`flex flex-col gap-6 md:justify-center ${textOrder}`}
      >
        <h2 className="mb-0">{title}</h2>
        {children}
        {actions}
      </div>
      <div
        className={`flex items-center justify-center ${mediaOrder}`}
      >
        <div className={mediaClassName} />
      </div>
    </div>
  );
};

export default TwoColumnMedia;
