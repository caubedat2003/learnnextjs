"use client";
import React, { useMemo } from "react";
import { Select, SelectItem } from "@heroui/react";
import { VkxSelectProps } from "./vkx-select-props";

export const VkxSelect: React.FC<VkxSelectProps> = ({
  className,
  color,
  defaultSelectedKeys,
  description,
  disabledKeys,
  errorMessage,
  isDisabled,
  isInvalid,
  isOpen,
  isRequired,
  isVirtualized,
  label,
  labelPlacement,
  onOpenChange,
  onSelectionChange,
  placeholder,
  radius,
  selectItems,
  selectedKeys,
  selectionMode = "single",
  size,
  startContent,
  variant,
  ...props
}) => {
  // Default required validation handler
  const computedIsInvalid = useMemo(() => {
    if (typeof isInvalid === "boolean") return isInvalid;
    if (isRequired && (!selectedKeys || selectedKeys.size === 0)) return true;
    return false;
  }, [isInvalid, isRequired, selectedKeys]);

  const computedErrorMessage = useMemo(() => {
    if (errorMessage) return errorMessage;
    if (isRequired && (!selectedKeys || selectedKeys.size === 0)) {
      return "Vui lòng chọn một mục";
    }
    return undefined;
  }, [errorMessage, isRequired, selectedKeys]);

  return (
    <Select
      className={className}
      color={color}
      defaultSelectedKeys={defaultSelectedKeys}
      description={description}
      disabledKeys={disabledKeys}
      errorMessage={computedErrorMessage}
      isDisabled={isDisabled}
      isInvalid={computedIsInvalid}
      isOpen={isOpen}
      isRequired={isRequired}
      isVirtualized={isVirtualized}
      label={label}
      labelPlacement={labelPlacement}
      placeholder={placeholder}
      radius={radius}
      selectedKeys={selectedKeys}
      selectionMode={selectionMode}
      size={size}
      startContent={startContent}
      variant={variant}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      {...props}
    >
      {selectItems.map((item) => (
        <SelectItem
          key={item.key}
          description={item.description}
          startContent={item.startContent}
        >
          {item.children}
        </SelectItem>
      ))}
    </Select>
  );
};
