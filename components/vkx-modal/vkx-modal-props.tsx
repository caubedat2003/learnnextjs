import { ReactNode, Ref } from "react";

export interface VkxModalProps {
    children?: ReactNode; // Content inside modal body
    className?: string; // CSS class for modal container
    classNames?: { // Custom CSS classes for modal parts
        backdrop?: string; // Backdrop styling
        base?: string; // Base modal container styling
        header?: string; // Header styling
        body?: string; // Body styling
        footer?: string; // Footer styling
        closeButton?: string; // Close button styling
    };
    isOpen: boolean; // Determines if modal is open
    onClose: () => void; // Callback when modal closes
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "full"; // Modal size
    backdrop?: "transparent" | "blur" | "opaque"; // Backdrop style
    isDismissable?: boolean; // Allow closing by clicking outside (default: true)
    isKeyboardDismissDisabled?: boolean; // Disable closing with Esc key (default: false)
    placement?: "auto" | "center" | "top" | "top-center" | "bottom" | "bottom-center"; // Modal position
    title?: string | ReactNode; // Modal title
    header?: ReactNode; // Custom header content (overrides title)
    headerProps?: Record<string, any>; // Additional props for header
    footer?: ReactNode; // Footer content (e.g., buttons)
    scrollBehavior?: "inside" | "outside" | "normal"; // Scroll behavior for content
    onOpenChange?: (isOpen: boolean) => void; // Callback for open/close state changes
    modalRef?: Ref<HTMLElement>; // Ref for root Modal (e.g., for dragging)
    modalProps?: Record<string, any>; // Additional props for root Modal
    radius?: "none" | "sm" | "md" | "lg"; // Modal border-radius
}