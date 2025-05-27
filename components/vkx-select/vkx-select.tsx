"use client";
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
  return (
    <Select
      className={className}
      color={color}
      defaultSelectedKeys={defaultSelectedKeys}
      description={description}
      disabledKeys={disabledKeys}
      errorMessage={errorMessage}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
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
