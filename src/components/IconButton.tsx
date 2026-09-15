import React from "react";
import Icon from "./Icon";

type IconButtonProps = {
  href: string;
  ariaLabel: string;
  title: string;
  icon: React.ReactNode;
  variant?: "default" | "gold" | "green";
  size?: "small" | "medium" | "large";
};

const IconButton = ({
  href,
  ariaLabel,
  title,
  icon,
  variant = "default",
  size = "small",
}: IconButtonProps) => {
  return (
    <a
      href={href}
      className={`flex cursor-pointer shrink-0 ${size === "small" ? "h-9 w-9" : size === "medium" ? "h-12 w-12" : "h-16 w-16"} items-center justify-center rounded-full ${size === "small" ? "border" : size === "medium" ? "border-2" : "border-4"} transition-all hover:-translate-y-0.5 ${
        variant === "gold"
          ? "border-gold-500 text-gold-500 hover:border-gold-500 hover:bg-gold-400/20"
          : variant === "green"
            ? "border-green-700 text-green-700 hover:border-green-500 hover:bg-green-400/20"
            : "border-parch-400 text-green-700 hover:border-green-500 hover:bg-green-400/20"
      }`}
      aria-label={ariaLabel}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        icon={icon}
        size={size === "small" ? "16" : size === "medium" ? "24" : "32"}
      />
    </a>
  );
};

export default IconButton;
