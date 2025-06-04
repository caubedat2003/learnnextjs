import React from "react";
import { DateInput, DateInputProps } from "@heroui/react";

export interface VkxDateInputProps extends DateInputProps {
  className?: string;
}

export const VkxDateInput: React.FC<VkxDateInputProps & { ariaLabel?: string }> = ({
  className,
  ariaLabel = "VkxDateInput",
  ...props
}) => {
  return <DateInput className={className} aria-label={ariaLabel} {...props} />;
};

export default VkxDateInput;
