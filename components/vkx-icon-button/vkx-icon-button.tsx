import React from "react";
import VkxButton from "../vkx-button/vkx-button";
import { VkxButtonProps } from "../vkx-button/vkx-button-props";

export interface VkxIconButtonProps extends VkxButtonProps {
  className?: string;
}

export const VkxIconButton: React.FC<VkxIconButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <VkxButton
      type="button"
      isIconOnly
      className={className}
      {...props}
    ></VkxButton>
  );
};

export default VkxIconButton;
