import { TimeInput, TimeInputProps } from "@heroui/react";
import React from "react";

interface VkxTimeInputProps extends TimeInputProps {}

export const VkxTimeInput: React.FC<VkxTimeInputProps> = ({ ...props }) => {
  return <TimeInput {...props} />;
};
