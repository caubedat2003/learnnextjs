import { CollectionChildren } from "@react-types/shared";
import { Key } from "@react-types/shared";
import { SlotsToClasses } from "@heroui/react";

export interface VkxListboxProps<T extends object = object> {
    children: CollectionChildren<T>; // Content inside listbox (ListboxItem, ListboxSection, or render function)
    items?: Iterable<T>; // Iterable data for dynamic rendering
    "aria-label"?: string; // Accessibility label for the listbox
    onAction?: (key: Key) => void; // Callback when an item is activated
    onSelectionChange?: (keys: "all" | Set<Key>) => void; // Callback for selection changes
    selectionMode?: "none" | "single" | "multiple"; // Selection behavior
    disabledKeys?: Iterable<Key>; // Keys of disabled items
    variant?: "solid" | "flat" | "bordered" | "light" | "faded" | "shadow"; // Visual style of the listbox
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger"; // Color theme
    radius?: "none" | "sm" | "md" | "lg" | "full"; // Border radius
    itemClasses?: SlotsToClasses<"base" | "title" | "description" | "selectedIcon" | "wrapper" | "shortcut">; // Classes for listbox item slots
    listboxProps?: Record<string, any>; // Additional props for the root Listbox
    isVirtualized?: boolean; // Flag for virtualization
}