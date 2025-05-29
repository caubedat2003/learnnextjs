import React from "react";
import { Calendar, CalendarProps } from "@heroui/react";

export interface VkxCalendarProps extends CalendarProps {
  className?: string;
}

export const VkxCalendar: React.FC<VkxCalendarProps> = ({ className, ...props }) => {
  return <Calendar className={className} {...props} />;
};

export default VkxCalendar;
