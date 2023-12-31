import { cx } from "@/config/constant";
import { icons } from "@/lib/icon";
import React from "react";
import { IconType } from "react-icons";
//

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent: IconType = icons[name];

  if (!IconComponent) {
    return null; // Render nothing if the icon name is not found
  }

  return (
    <IconComponent className={cx("text-[18px] md:text-[22px]", className)} />
  );
};

export default Icon;
