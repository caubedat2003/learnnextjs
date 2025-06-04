import React from "react";
import { RangeCalendar, RangeCalendarProps } from "@heroui/react";

export interface VkxRangeCalendarProps extends RangeCalendarProps {
  className?: string;
}

export const VkxRangeCalendar: React.FC<VkxRangeCalendarProps> = ({ className, ...props }) => {
  return <RangeCalendar className={className} {...props} />;
};

export default VkxRangeCalendar;
