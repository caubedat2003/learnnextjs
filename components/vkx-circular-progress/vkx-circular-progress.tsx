"use client";

import { CircularProgress } from "@heroui/react";

interface VKXCircularProgressProps {
  label?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  value?: number;
  valueLabel?: React.ReactNode;
  minValue?: number;
  maxValue?: number;
  isIndeterminate?: boolean;
  showValueLabel?: boolean;
  strokeWidth?: number;
  isDisabled?: boolean;
  disableAnimation?: boolean;
}

export default function VKXCircularProgress({
  label,
  size = "md",
  color = "primary",
  value,
  valueLabel,
  minValue = 0,
  maxValue = 100,
  isIndeterminate = false,
  showValueLabel = true,
  strokeWidth,
  isDisabled = false,
  disableAnimation = false,
  ...props
}: VKXCircularProgressProps) {
  return (
    <CircularProgress
      color={color}
      disableAnimation={disableAnimation}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
      label={label}
      maxValue={maxValue}
      minValue={minValue}
      size={size}
      strokeWidth={strokeWidth}
      value={value}
      valueLabel={showValueLabel}
      {...props}
    />
  );
}
