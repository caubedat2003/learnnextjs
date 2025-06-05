import { ReactNode } from "react";

export interface VkxAccordionItemProps {
  key: string;
  title?: ReactNode;
  titleText?:string ;
  subtitle?: ReactNode;
  children?: ReactNode;
  ariaLabel?: string;
  startContent?: ReactNode;
  indicator?: ReactNode;
  className?: string | undefined;
}
