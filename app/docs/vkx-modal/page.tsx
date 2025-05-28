'use client'

import React from "react";
import { useState, useRef } from "react";
import { VkxModal } from "@/components/vkx-modal/vkx-modal";
import { Button, useDisclosure, Radio, RadioGroup, Checkbox, Link, Input, useDraggable, Table, TableBody, TableHeader, TableColumn, TableRow, TableCell } from "@heroui/react";
import { modalPropsData } from "./table-data";

export default function VKXModalPage() {
    // Disclosure cho "Cách sử dụng" modal
    const { isOpen: isUsageOpen, onOpen: onUsageOpen, onOpenChange: onUsageOpenChange, onClose: onUsageClose } = useDisclosure();

    // Disclosure cho "Kích thước" modal
    const { isOpen: isSizeOpen, onOpen: onSizeOpen, onClose: onSizeClose } = useDisclosure();
    const [size, setSize] = React.useState<"xs" | "sm" | "md" | "lg" | "xl" | "full">("md");
    const sizes: Array<"xs" | "sm" | "md" | "lg" | "xl" | "full"> = ["xs", "sm", "md", "lg", "xl", "full"];

    const handleOpenSizeModal = (size: "xs" | "sm" | "md" | "lg" | "xl" | "full") => {
        setSize(size);
        onSizeOpen();
    };

    // Disclosure cho "Vị trí" modal
    const { isOpen: isPlaceOpen, onOpen: onPlaceOpen, onOpenChange: onPlaceOpenChange, onClose: onPlaceClose } = useDisclosure();
    const [modalPlacement, setModalPlacement] = useState<"auto" | "center" | "top" | "bottom">("auto");

    // Disclosure cho "Thanh scroll" modal
    const { isOpen: isScrollOpen, onOpen: onScrollOpen, onOpenChange: onScrollOpenChange, onClose: onScrollClose } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState<"inside" | "outside" | "normal">("inside");

    // Disclosure cho "Form" modal
    const { isOpen: isFormOpen, onOpen: onFormOpen, onOpenChange: onFormOpenChange, onClose: onFormClose } = useDisclosure();

    // Disclosure cho "Backdrop" modal
    const { isOpen: isBackdropOpen, onOpen: onBackdropOpen, onClose: onBackdropClose } = useDisclosure();
    const [backdrop, setBackdrop] = useState<"opaque" | "blur" | "transparent">("opaque");

    const backdrops: Array<"opaque" | "blur" | "transparent"> = ["opaque", "blur", "transparent"];

    const handleOpenBackdropModal = (backdrop: "opaque" | "blur" | "transparent") => {
        setBackdrop(backdrop);
        onBackdropOpen();
    };

    // Disclosure cho "Draggable" modal
    const { isOpen: isDragableOpen, onOpen: onDragableOpen, onOpenChange: onDragableOpenChange, onClose: onDragableClose } = useDisclosure();
    const targetRef = useRef(null);
    const { moveProps } = useDraggable({ targetRef, isDisabled: !isDragableOpen });

    // Disclosure cho "Style" modal
    const { isOpen: isStyleOpen, onOpen: onStyleOpen, onOpenChange: onStyleOpenChange, onClose: onStyleClose } = useDisclosure();

    return (
        <div className="flex w-full flex-col gap-y-10 pb-8">
            <h1 className="text-3xl font-medium text-black dark:text-white mb-2">
                <strong>
                    Modal
                </strong>
            </h1>
            <p>
                Là một thành phần dùng để hiển thị hộp thoại hoặc cửa sổ nổi bật trên trang web. Modal thường được sử dụng để hiển thị thông báo, xác nhận hành động, hoặc cung cấp thông tin bổ sung mà không làm mất đi ngữ cảnh của trang hiện tại.
            </p>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    1. Các thành phần chính
                </h1>
                <ul className="mt-4 flex flex-col gap-y-2">
                    <li>Hiển thị hộp thoại có nội dung tùy chỉnh cần chú ý hoặc cung cấp thông tin bổ sung.</li>
                    <li>Modal: Đây là thành phần chính để hiển thị một hộp thoại Modal.</li>
                    <li>ModalContent: Là wrapper (thành phần bao bọc) cho các thành phần con khác của Modal (Header, Body, Footer).</li>
                    <li>ModalHeader: Phần tiêu đề của Modal, thường chứa tiêu đề và nút đóng.</li>
                    <li>ModalBody: Phần thân chính của Modal, nơi chứa nội dung của bạn.</li>
                    <li>ModalFooter: Phần chân của Modal, thường chứa các nút hành động như "Xác nhận", "Hủy bỏ".</li>
                </ul>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-2">
                    2. Cách sử dụng
                </h1>
                <p>Khi Modal được mở</p>
                <ul className="mt-4 flex flex-col gap-y-2 mb-4">
                    <li>Tiêu điểm (focus) sẽ tự động di chuyển vào phần tử có thể tương tác đầu tiên bên trong Modal.</li>
                    <li>Người dùng không thể tương tác với nội dung bên ngoài/phía sau Modal khi nó đang mở.</li>
                </ul>
                <Button onPress={onUsageOpen} color="primary">
                    Open Modal
                </Button>
                <VkxModal
                    isOpen={isUsageOpen}
                    onOpenChange={onUsageOpenChange}
                    onClose={onUsageClose}
                    size="lg"
                    backdrop="blur"
                    placement="center"
                    scrollBehavior="inside"
                    title="Modal Title"
                    footer={
                        <>
                            <Button color="danger" variant="light" onPress={onUsageClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onUsageClose}>
                                Action
                            </Button>
                        </>
                    }
                >
                    <p>Modal demo về cách sử dụng</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
                        hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
                        hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                        adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                        eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
                        esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </p>
                </VkxModal>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-2">
                    3. Kích thước
                </h1>
                <p className="mb-3">
                    Kích thước của Modal có thể được điều chỉnh bằng cách sử dụng thuộc tính size. Bạn có thể chọn giữa các kích thước như xs, sm, md, lg, xl, full. Mặc định là md.
                </p>
                <div>
                    <div className="flex flex-wrap gap-3">
                        {sizes.map((size) => (
                            <Button key={size} onPress={() => handleOpenSizeModal(size)}>
                                Open {size}
                            </Button>
                        ))}
                    </div>
                    <VkxModal
                        isOpen={isSizeOpen}
                        onClose={onSizeClose}
                        size={size}
                        backdrop="blur"
                        placement="center"
                        scrollBehavior="inside"
                        title="Modal Title"
                        footer={
                            <>
                                <Button color="danger" variant="light" onPress={onSizeClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onSizeClose}>
                                    Action
                                </Button>
                            </>
                        }
                    >
                        <p>Modal demo về kích thước</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                            officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                        </p>
                    </VkxModal>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    4. Vị trí của Modal
                </h1>
                <p className="mb-3">
                    Vị trí của Modal có thể được điều chỉnh bằng cách sử dụng thuộc tính placement. Bạn có thể chọn giữa các vị trí như auto, center, top, bottom. Mặc định là auto.
                </p>
                <div>
                    <div className=" flex flex-col gap-y-4">
                        <Button className="max-w-fit" onPress={onPlaceOpen} color="primary">
                            Open Modal
                        </Button>
                        <RadioGroup
                            label="Chọn 1 vị trí để hiển thị Modal"
                            orientation="horizontal"
                            value={modalPlacement}
                            onValueChange={(value) => setModalPlacement(value as "auto" | "center" | "top" | "bottom")}
                        >
                            <Radio value="auto">auto</Radio>
                            <Radio value="top">top</Radio>
                            <Radio value="bottom">bottom</Radio>
                            <Radio value="center">center</Radio>
                        </RadioGroup>
                        <VkxModal
                            isOpen={isPlaceOpen}
                            onOpenChange={onPlaceOpenChange}
                            onClose={onPlaceClose}
                            placement={modalPlacement}
                            size="lg"
                            backdrop="blur"
                            scrollBehavior="inside"
                            title="Modal Title"
                            footer={
                                <>
                                    <Button color="danger" variant="light" onPress={onPlaceClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onPlaceClose}>
                                        Action
                                    </Button>
                                </>
                            }
                        >
                            <p>
                                Modal demo về vị trí hiển thị
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                        </VkxModal>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    5. Thanh scroll
                </h1>
                <p className="mb-3">
                    Thanh cuộn có thể được đặt bên trong hoặc bên ngoài modal. Nếu bạn muốn thanh cuộn nằm bên trong modal, hãy để scroll behavior là inside. Nếu bạn muốn thanh cuộn nằm bên ngoài modal, hãy để scroll behavior là outside.
                </p>
                <div>
                    <div className=" gap-y-4">
                        <Button onPress={onScrollOpen} color="primary" className="mb-3">
                            Open Modal
                        </Button>
                        <RadioGroup
                            label="Chọn 1 kiểu thanh scroll"
                            orientation="horizontal"
                            value={scrollBehavior}
                            onValueChange={(value) => setScrollBehavior(value as "inside" | "outside")}
                        >
                            <Radio value="inside">inside</Radio>
                            <Radio value="outside">outside</Radio>
                        </RadioGroup>
                        <VkxModal
                            isOpen={isScrollOpen}
                            onOpenChange={onScrollOpenChange}
                            onClose={onScrollClose}
                            scrollBehavior={scrollBehavior}
                            size="lg"
                            backdrop="blur"
                            placement="center"
                            title="Modal Title"
                            footer={
                                <>
                                    <Button color="danger" variant="light" onPress={onScrollClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onScrollClose}>
                                        Action
                                    </Button>
                                </>
                            }
                        >
                            <p>
                                Modal demo về thanh scroll
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis
                                sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                                incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                                et. Culpa deserunt nostrud ad veniam.
                            </p>
                            <p>
                                Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                                do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
                                pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                            <p>
                                Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                                eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam. Magna exercitation reprehenderit magna aute
                                tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                                incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                                do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod
                                pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                        </VkxModal>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    6. Tương tác với form
                </h1>
                <p className="mb-3">
                    Bạn có thể sử dụng Modal để hiển thị các form nhập liệu. Để làm điều này, bạn chỉ cần đặt các thành phần form bên trong ModalBody.
                </p>
                <div>
                    <Button color="primary" onPress={onFormOpen}>
                        Open Modal
                    </Button>
                    <VkxModal
                        isOpen={isFormOpen}
                        onOpenChange={onFormOpenChange}
                        onClose={onFormClose}
                        placement="top-center"
                        size="md"
                        backdrop="blur"
                        scrollBehavior="inside"
                        title="Đăng nhập"
                        footer={
                            <>
                                <Button color="danger" variant="flat" onPress={onFormClose}>
                                    Đóng
                                </Button>
                                <Button color="primary" onPress={onFormClose}>
                                    Đăng nhập
                                </Button>
                            </>
                        }
                    >
                        <Input
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Email"
                            placeholder="Nhập email"
                            variant="bordered"
                        />
                        <Input
                            endContent={
                                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Password"
                            placeholder="Nhập mật khẩu"
                            type="password"
                            variant="bordered"
                        />
                        <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                Ghi nhớ tôi
                            </Checkbox>
                            <Link color="primary" href="#" size="sm">
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </VkxModal>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    7. Phần đằng sau
                </h1>
                <p className="mb-3">
                    Bạn có thể sử dụng thuộc tính backdrop để điều chỉnh phần đằng sau của Modal. Bạn có thể chọn giữa các kiểu như opaque - phần đằng sau tối lại, blur - phần đằng sau mờ, transparent - phần đằng sau giữ nguyên không đổi. Mặc định là opaque.
                </p>
                <div>
                    <div className="flex flex-wrap gap-3">
                        {backdrops.map((b) => (
                            <Button
                                key={b}
                                className="capitalize"
                                color="warning"
                                variant="flat"
                                onPress={() => handleOpenBackdropModal(b)}
                            >
                                {b}
                            </Button>
                        ))}
                    </div>
                    <VkxModal
                        isOpen={isBackdropOpen}
                        onClose={onBackdropClose}
                        backdrop={backdrop}
                        size="lg"
                        placement="center"
                        scrollBehavior="inside"
                        title="Modal Title"
                        footer={
                            <>
                                <Button color="danger" variant="light" onPress={onBackdropClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onBackdropClose}>
                                    Action
                                </Button>
                            </>
                        }
                    >
                        <p>
                            Modal demo về phần đằng sau
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                            officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                            nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                            deserunt nostrud ad veniam.
                        </p>
                    </VkxModal>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    8. Kéo thả
                </h1>
                <p className="mb-3">
                    Bạn có thể kéo thả Modal, di chuyển chúng bằng cách sử dụng thuộc tính modalRef và modalProps.
                </p>
                <div>
                    <Button onPress={onDragableOpen} color="primary">
                        Open Modal
                    </Button>
                    <VkxModal
                        isOpen={isDragableOpen}
                        onOpenChange={onDragableOpenChange}
                        onClose={onDragableClose}
                        size="md"
                        backdrop="blur"
                        placement="center"
                        scrollBehavior="inside"
                        title="Modal Title"
                        modalRef={targetRef} // Pass ref to Modal
                        modalProps={moveProps} // Pass moveProps to Modal
                        footer={
                            <>
                                <Button color="danger" variant="light" onPress={onDragableClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onDragableClose}>
                                    Action
                                </Button>
                            </>
                        }
                    >
                        <p>
                            Modal demo về kéo thả
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                    </VkxModal>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    9. Tuỳ chỉnh style css
                </h1>
                <p className="mb-3">
                    Bạn có thể tuỳ chỉnh style Tailwind css cho Modal bằng cách sử dụng className và classNames. Bạn có thể thay đổi màu sắc, kích thước, kiểu chữ, viền, đổ bóng, độ mờ của phần đằng sau, v.v.
                </p>
                <div>
                    <Button color="secondary" onPress={onStyleOpen}>
                        Open Modal
                    </Button>
                    <VkxModal
                        isOpen={isStyleOpen}
                        onOpenChange={onStyleOpenChange}
                        onClose={onStyleClose}
                        backdrop="opaque"
                        classNames={{
                            body: "py-6",
                            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                            base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                            header: "border-b-[1px] border-[#292f46]",
                            footer: "border-t-[1px] border-[#292f46]",
                            closeButton: "hover:bg-white/5 active:bg-white/10",
                        }}
                        radius="lg"
                        size="md"
                        placement="center"
                        scrollBehavior="inside"
                        title="Modal Title"
                        footer={
                            <>
                                <Button color="default" variant="light" onPress={onStyleClose}>
                                    Close
                                </Button>
                                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onStyleClose}>
                                    Action
                                </Button>
                            </>
                        }
                    >
                        <p>
                            Modal demo về tuỳ chỉnh style css
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                            risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                            quam.
                        </p>
                        <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                            adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                            officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                            nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                            deserunt nostrud ad veniam.
                        </p>
                    </VkxModal>
                </div>
            </div>

            <div>
                <div className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Modal Props (Thuộc tính)</h2>
                    <Table aria-label="Bảng thuộc tính của Modal HeroUI">
                        <TableHeader>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Prop</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Type</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Default</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Công dụng</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {modalPropsData.map((prop, index) => (
                                <TableRow key={index}>
                                    <TableCell className="text-gray-700 dark:text-gray-300 font-mono text-sm">{prop.prop}</TableCell>
                                    <TableCell className="text-blue-600 dark:text-blue-300 font-mono text-sm">{prop.type}</TableCell>
                                    <TableCell className="text-green-600 dark:text-green-300 font-mono text-sm">{prop.default}</TableCell>
                                    <TableCell className="text-gray-600 dark:text-gray-400 text-sm">{prop.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}


//icons
const MailIcon = (props: any) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
                fill="currentColor"
            />
        </svg>
    );
};

 const LockIcon = (props: any) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
                fill="currentColor"
            />
            <path
                d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
                fill="currentColor"
            />
        </svg>
    );
};