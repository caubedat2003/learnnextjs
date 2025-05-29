import React from "react";
import { InputProps } from "@heroui/react";
import { Input } from "@heroui/input";

export interface VkxPhoneInputProps extends InputProps {
  className?: string;
}

export const VkxPhoneInput: React.FC<VkxPhoneInputProps> = ({
  className,
  ...props
}) => {
  return <Input type="tel" className={className} {...props} />;
};

export default VkxPhoneInput;
