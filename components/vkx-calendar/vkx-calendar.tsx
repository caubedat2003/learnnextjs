import React from "react";
import { Calendar, CalendarProps } from "@heroui/react";

export interface VkxCalendarProps extends CalendarProps {
  className?: string;
}

export const VkxCalendar: React.FC<VkxCalendarProps & { ariaLabel?: string }> = ({ className, ariaLabel = "VkxCalendar", ...props }) => {
  return <Calendar className={className} aria-label={ariaLabel} {...props} />;
};

export default VkxCalendar;
