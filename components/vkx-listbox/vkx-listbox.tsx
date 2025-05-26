import { Listbox, ListboxItem, ListboxSection } from "@heroui/react";
import { VkxListboxProps } from "./vkx-listbox-props";

// Export ListboxItem và ListboxSection để sử dụng ở file khác
export { ListboxItem, ListboxSection };

export const VkxListbox = <T extends object>({
    children,
    items,
    "aria-label": ariaLabel,
    onAction,
    onSelectionChange,
    selectionMode = "none",
    disabledKeys,
    variant = "flat",
    color = "default",
    radius = "md",
    itemClasses,
    listboxProps,
    isVirtualized = false,
}: VkxListboxProps<T>) => {
    // Kiểm tra: nếu children là hàm mà không có items thì throw error
    if (typeof children === "function" && !items) {
        throw new Error("props.children was a function but props.items is missing");
    }

    return (
        <Listbox
            items={items}
            aria-label={ariaLabel}
            onAction={onAction}
            onSelectionChange={onSelectionChange}
            selectionMode={selectionMode}
            disabledKeys={disabledKeys}
            variant={variant}
            color={color}
            itemClasses={itemClasses}
            isVirtualized={isVirtualized}
            {...listboxProps}
        >
            {children}
        </Listbox>
    );
};