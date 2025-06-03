"use client";

import { Spinner } from "@heroui/spinner";

interface VKXSpinnerProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: "default" | "simple" | "gradient" | "wave" | "dots" | "spinner";
  labelColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
}

export default function VKXSpinner({
  label,
  size = "md",
  color = "primary",
  variant = "default",
  labelColor = "default",
  ariaLabel = "VKXSpinner",
}: VKXSpinnerProps & { ariaLabel?: string }) {
  return (
    <Spinner
      aria-label={ariaLabel}
      color={color}
      label={label}
      labelColor={labelColor === "default" ? undefined : labelColor}
      size={size}
      variant={variant}
    />
  );
}
