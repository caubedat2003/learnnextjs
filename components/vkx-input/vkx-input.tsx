import { Input } from "@heroui/input";

import { VkxInputProps } from "./vkx-input-props";
import React from "react";

export const VkxInput: React.FC<VkxInputProps & { ariaLabel?: string }> = ({
  accept,
  children,
  className,
  defaultValue,
  description,
  endContent,
  errorMessage,
  errors,
  errorRequiredMessage,
  errorInvalidMessage,
  isDisabled,
  isInvalid,
  isRequired,
  label,
  labelPlacement,
  min,
  max,
  maxLength,
  name,
  onClear,
  onValueChange,
  placeholder,
  pattern,
  required,
  readOnly,
  type = "text",
  value,
  validate,
  ariaLabel = "VkxInput",
  ...props
}) => {
  return (
    <Input
      aria-label={ariaLabel}
      accept={accept}
      className={className}
      defaultValue={defaultValue}
      description={description}
      endContent={endContent}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      isRequired={isRequired}
      label={label}
      labelPlacement={labelPlacement}
      max={max}
      maxLength={maxLength}
      min={min}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      readOnly={readOnly}
      required={required}
      type={type}
      validate={validate}
      value={value}
      onClear={onClear}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </Input>
  );
};
