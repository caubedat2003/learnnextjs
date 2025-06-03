import { TimeInput, TimeInputProps } from "@heroui/react";
import React from "react";

interface VkxTimeInputProps extends TimeInputProps {}

export const VkxTimeInput: React.FC<VkxTimeInputProps & { ariaLabel?: string }> = ({ ariaLabel = "VkxTimeInput", ...props }) => {
  return <TimeInput aria-label={ariaLabel} {...props} />;
};
