import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";

import { HTMLAttributeAnchorTarget } from "react";

export interface VKXDropdownItem {
  className?: string;
  key: string;
  label: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  shortcut?: string;
  description?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  isDisabled?: boolean;
  closeOnSelect?: boolean;
  onAction?: () => void;
  onClose?: () => void;
}

export interface VKXDropdownSection {
  key: string;
  title?: string;
  items: Array<VKXDropdownItem>;
}

export interface VKXDropdownProps {
  className?: string;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  isDisabled?: boolean;
  triggerNode?: React.ReactNode;
  sections: Array<VKXDropdownSection>;
  disabledKeys?: Array<string>;
  onAction?: () => void;
}

export function VKXDropdown({
  className,
  variant = "solid",
  color = "default",
  isDisabled = false,
  triggerNode,
  sections = [],
  disabledKeys = [],
  onAction,
  ...props
}: VKXDropdownProps) {
  return (
    <Dropdown
      className={className}
      isDisabled={isDisabled}
      {...props}
    >
      <DropdownTrigger>{triggerNode}</DropdownTrigger>
      <DropdownMenu
        color={color}
        disabledKeys={disabledKeys}
        variant={variant}
        onAction={onAction}
      >
        {sections.map((section) => (
          <DropdownSection key={section.key} title={section.title}>
            {section.items.map((item) => (
              <DropdownItem
                key={item.key}
                description={item.description}
                href={item.href}
                shortcut={item.shortcut}
                startContent={item.startContent}
                endContent={item.endContent}
                target={item.target}
                isDisabled={item.isDisabled}
                closeOnSelect={item.closeOnSelect}
                onAction={item.onAction}
                onClose={item.onClose}
                className={item.className}
              >
                {item.label}
              </DropdownItem>
            ))}
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
