import React from "react";
import { SelectSection, SelectSectionProps } from "@heroui/react";

export interface VkxSelectSectionProps extends SelectSectionProps {}

export const VkxSelectSection: React.FC<VkxSelectSectionProps> = ({
  ...props
}) => {
  return <SelectSection {...props}></SelectSection>;
};
