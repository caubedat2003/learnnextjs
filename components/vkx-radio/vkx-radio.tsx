import { Radio, RadioGroup, RadioProps, RadioGroupProps } from "@heroui/react";
import React from "react";

// Wrapper cho Radio
export interface VkxRadioProps extends RadioProps {}
export const VkxRadio: React.FC<VkxRadioProps> = ({ children, ...props }) => {
  return <Radio {...props}>{children}</Radio>;
};

// Wrapper cho RadioGroup
export interface VkxRadioGroupProps extends RadioGroupProps {}
export const VkxRadioGroup: React.FC<VkxRadioGroupProps> = ({ children, ...props }) => {
  return <RadioGroup {...props}>{children}</RadioGroup>;
};