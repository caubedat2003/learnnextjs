"use client";

import { Alert } from "@heroui/react";

interface VKXAlertProps {
  title?: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: "solid" | "bordered" | "flat" | "faded";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isVisible?: boolean;
  isClosable?: boolean;
  hideIcon?: boolean;
  hideIconWrapper?: boolean;
  onClose?: () => void;
  onVisibleChange?: (isVisible: boolean) => void;
}

export default function VKXAlert({
  title,
  icon,
  description,
  color = "default",
  variant = "flat",
  radius = "md",
  startContent,
  endContent,
  isVisible,
  isClosable = false,
  hideIcon = false,
  hideIconWrapper = false,
  onClose,
  onVisibleChange,
  ...props
}: VKXAlertProps) {
  return (
    <Alert
      color={color}
      description={description}
      endContent={endContent}
      hideIcon={hideIcon}
      hideIconWrapper={hideIconWrapper}
      icon={icon}
      isClosable={isClosable}
      isVisible={isVisible}
      radius={radius}
      startContent={startContent}
      title={title}
      variant={variant}
      onClose={onClose}
      onVisibleChange={onVisibleChange}
      {...props}
    />
  );
}
