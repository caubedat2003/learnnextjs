import { SharedSelection } from "@heroui/system";
import { ReactNode } from "react";
import { VkxSelectItem } from "./vkx-select-item";
import { SelectionMode } from "@react-types/shared";

export interface VkxSelectProps {
  selectItems: VkxSelectItem[];
  ariaLabel?: string;
  defaultSelectedKeys?: Set<string>;
  placeholder?: string;
  label?: string;
  description?: string;
  errorMessage?: string;
  selectedKeys?: Set<string>;
  disabledKeys?: Set<string>;
  className?: string;
  onSelectionChange?: (selection: SharedSelection) => void;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  isVirtualized?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?: "flat" | "bordered" | "faded" | "underlined";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  labelPlacement?: "inside" | "outside" | "outside-left";
  startContent?: ReactNode;
  selectionMode?: SelectionMode;
}
