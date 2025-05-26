import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { VkxModalProps } from "./vkx-modal-props";

export const VkxModal: React.FC<VkxModalProps> = ({
    children,
    className,
    classNames,
    isOpen,
    onClose,
    size = "md",
    backdrop = "opaque",
    isDismissable = true,
    isKeyboardDismissDisabled = false,
    placement = "center",
    title,
    header,
    headerProps,
    footer,
    scrollBehavior = "inside",
    onOpenChange,
    modalRef, // Added to pass ref to Modal
    modalProps, // Added to pass props like moveProps to Modal
    radius,
}) => {
    return (
        <Modal
            ref={modalRef} // Apply ref to Modal
            className={className}
            classNames={{
                backdrop: classNames?.backdrop,
                base: classNames?.base,
                closeButton: classNames?.closeButton,
            }}
            isOpen={isOpen}
            onClose={onClose}
            size={size}
            backdrop={backdrop}
            isDismissable={isDismissable}
            isKeyboardDismissDisabled={isKeyboardDismissDisabled}
            placement={placement}
            scrollBehavior={scrollBehavior}
            onOpenChange={onOpenChange}
            radius={radius}
            {...modalProps} // Spread modalProps to Modal
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        {header || title ? (
                            <ModalHeader {...headerProps}>
                                {header || title}
                            </ModalHeader>
                        ) : null}
                        <ModalBody>
                            {children}
                        </ModalBody>
                        {footer ? (
                            <ModalFooter>
                                {footer}
                            </ModalFooter>
                        ) : null}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};