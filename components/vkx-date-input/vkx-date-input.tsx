import React from "react";
import { DateInput, DateInputProps } from "@heroui/react";

export interface VkxDateInputProps extends DateInputProps {
  className?: string;
}

export const VkxDateInput: React.FC<VkxDateInputProps> = ({
  className,
  ...props
}) => {
  return <DateInput className={className} {...props} />;
};

export default VkxDateInput;
