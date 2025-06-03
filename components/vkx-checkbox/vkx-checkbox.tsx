import { Checkbox, CheckboxProps } from "@heroui/react";
import React from "react";

export interface VkxCheckboxProps extends CheckboxProps {
  ariaLabel?: string;
  className?: string;
}

export const VkxCheckbox: React.FC<VkxCheckboxProps> = ({
  ariaLabel = "VkxCheckbox",
  ...props
}) => {
  return <Checkbox aria-label={ariaLabel} {...props} />;
};

export default VkxCheckbox;
