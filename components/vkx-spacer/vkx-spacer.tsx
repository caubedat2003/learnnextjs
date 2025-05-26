import { Spacer } from "@heroui/react";
import { VkxSpacerProps } from "./vkx-spacer-props";

export const VkxSpacer: React.FC<VkxSpacerProps> = ({
    x,
    y,
    inline = false,
    className,
}) => {
    // Allowed values for x and y as per Spacer's type definition
    const allowedValues = [0, 1, "px", 0.5, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];

    const getValidValue = (val: any) =>
        allowedValues.includes(val) ? val : undefined;

    return (
        <Spacer
            x={getValidValue(x)}
            y={getValidValue(y)}
            isInline={inline}
            className={className}
        />
    );
};