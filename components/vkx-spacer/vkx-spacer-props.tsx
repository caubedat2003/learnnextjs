import { ReactNode } from "react";

export interface VkxSpacerProps {
    x?: number; // Horizontal space
    y?: number; // Vertical space
    inline?: boolean; // Apply display: inline-block
    className?: string; // CSS class for spacer
}