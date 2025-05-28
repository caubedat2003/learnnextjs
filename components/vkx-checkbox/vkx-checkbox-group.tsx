import { CheckboxGroup, CheckboxGroupProps } from "@heroui/react";
import React from "react";

export interface VkxCheckboxGroupProps extends CheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;
  label?: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  children?: React.ReactNode;
}

export const VkxCheckboxGroup: React.FC<VkxCheckboxGroupProps> = ({
  children,
  ...props
}) => {
  return <CheckboxGroup {...props}>{children}</CheckboxGroup>;
};

export default VkxCheckboxGroup;
