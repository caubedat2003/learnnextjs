"use client";

import { Progress } from "@heroui/react";

interface VKXProgressProps {
  label?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  value?: number;
  valueLabel?: React.ReactNode;
  minValue?: number;
  maxValue?: number;
  isIndeterminate?: boolean;
  isStriped?: boolean;
  showValueLabel?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
}

export default function VKXProgress({
  label,
  size = "md",
  color = "primary",
  radius = "full",
  value,
  valueLabel,
  minValue = 0,
  maxValue = 100,
  isIndeterminate = false,
  isStriped = false,
  showValueLabel = true,
  isDisabled = false,
  disableAnimation = false,
  ...props
}: VKXProgressProps) {
  return (
    <div>
      {label && <div style={{ marginBottom: 4 }}>{label}</div>}
      <Progress
        color={color}
        disableAnimation={disableAnimation}
        isDisabled={isDisabled}
        isIndeterminate={isIndeterminate}
        isStriped={isStriped}
        label={label}
        maxValue={maxValue}
        minValue={minValue}
        radius={radius}
        showValueLabel={showValueLabel}
        size={size}
        value={value}
        valueLabel={valueLabel}
        {...props}
      />
    </div>
  );
}
