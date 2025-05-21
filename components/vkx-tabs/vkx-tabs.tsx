"use client";

import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import React from "react";

// Định nghĩa interface cho một item trong tab
interface VKXTabItem {
  id: React.Key;
  label: React.ReactNode;
  content: React.ReactNode;
}

// Định nghĩa interface cho props của VKXTabs
interface VKXTabsProps {
  variant?: "solid" | "bordered" | "light" | "underlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  fullWidth?: boolean;
  disabledKeys?: string[];
  selectedKey?: string;
  defaultSelectedKey?: string | number;
  shouldSelectOnPressUp?: boolean;
  keyboardActivation?: "manual" | "automatic";
  disableCursorAnimation?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  placement?: "top" | "bottom" | "start" | "end";
  isVertical?: boolean;
  destroyInactiveTabPanel?: boolean;
  items: VKXTabItem[]; // Prop items là bắt buộc
  onSelectionChange?: (key: React.Key) => void;
}

// Component VKXTabs
export function VKXTabs({
  variant = "solid",
  color = "default",
  size = "md",
  radius = "md",
  className,
  fullWidth = false,
  disabledKeys,
  selectedKey,
  defaultSelectedKey,
  shouldSelectOnPressUp = true,
  keyboardActivation = "automatic",
  disableCursorAnimation = false,
  isDisabled = false,
  disableAnimation = false,
  placement = "top",
  isVertical = false,
  destroyInactiveTabPanel = false,
  items,
  onSelectionChange,
}: VKXTabsProps) {
  return (
    <Tabs
      aria-label="VKX tabs"
      className={className}
      color={color}
      defaultSelectedKey={defaultSelectedKey}
      destroyInactiveTabPanel={destroyInactiveTabPanel}
      disableAnimation={disableAnimation}
      disableCursorAnimation={disableCursorAnimation}
      disabledKeys={disabledKeys}
      fullWidth={fullWidth}
      isDisabled={isDisabled}
      isVertical={isVertical}
      keyboardActivation={keyboardActivation}
      placement={placement}
      radius={radius}
      selectedKey={selectedKey}
      shouldSelectOnPressUp={shouldSelectOnPressUp}
      size={size}
      variant={variant}
      onSelectionChange={onSelectionChange}
    >
      {items.map((item) => (
        <Tab key={item.id} title={item.label}>
          <Card>
            <CardBody>{item.content}</CardBody>
          </Card>
        </Tab>
      ))}
    </Tabs>
  );
}
