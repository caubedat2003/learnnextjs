'use client'
import React from "react";
import { VkxListbox, ListboxItem, ListboxSection } from "@/components/vkx-listbox/vkx-listbox";
import { cn } from "@heroui/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react"
import { listboxProps } from "./table-data";

interface ItemType {
    key: string;
    label: string;
    color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const generateItems = (n: number) => {
    const items_visual = [
        "Cat",
        "Dog",
        "Elephant",
        "Lion",
        "Tiger",
        "Giraffe",
        "Dolphin",
        "Penguin",
        "Zebra",
        "Shark",
        "Whale",
        "Otter",
        "Crocodile",
    ];

    const dataset = [];

    for (let i = 0; i < n; i++) {
        const item = items_visual[i % items_visual.length];
        dataset.push({
            label: `${item}${i}`,
            value: `${item.toLowerCase()}${i}`,
            description: "Sample description",
        });
    }

    return dataset;
};

export default function VkxListboxPage() {
    const items: ItemType[] = [
        { key: "view", label: "View Profile", color: "default" },
        { key: "edit", label: "Edit Profile", color: "primary" },
        { key: "share", label: "Share Profile", color: "secondary" },
        { key: "delete", label: "Delete Profile", color: "danger" },
    ];
    // State cho single selection
    const [singleSelectedKeys, setSingleSelectedKeys] = React.useState(new Set(["text"]));
    const singleSelectedValue = React.useMemo(
        () => Array.from(singleSelectedKeys).join(", "),
        [singleSelectedKeys]
    );

    // State cho multiple selection
    const [multipleSelectedKeys, setMultipleSelectedKeys] = React.useState(new Set(["text"]));
    const multipleSelectedValue = React.useMemo(
        () => Array.from(multipleSelectedKeys).join(", "),
        [multipleSelectedKeys]
    );

    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    const items_visual = generateItems(1000);

    return (
        <div className="flex w-full flex-col gap-y-10 pb-8">
            <h1 className="text-3xl font-medium text-black dark:text-white mb-2">
                <strong>
                    Listbox
                </strong>
            </h1>
            <p>
                Là một thành phần dùng để hiển thị danh sách các mục cho người dùng chọn. Listbox có thể được sử dụng để tạo ra các menu, dropdowns hoặc bất kỳ danh sách nào mà người dùng có thể tương tác với.
            </p>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    1. Các thành phần chính
                </h1>
                <ul className="mt-4 flex flex-col gap-y-2 mb-3">
                    <li>3 thành phần chính dùng trong Listbox</li>
                    <li><strong>Listbox: </strong>Thành phần chính, bọc các thành phần còn lại</li>
                    <li><strong>ListboxSection: </strong>Thành phần chứa một nhóm item trong listbox</li>
                    <li><strong>ListboxItem: </strong>Thành phần chứa các thẻ trong listbox</li>
                </ul>
                <div>
                    <ListboxWrapper>
                        <VkxListbox
                            aria-label="Actions"
                            selectionMode="single"
                        >
                            <ListboxSection title="Actions" aria-label="Action Section">
                                <ListboxItem key="num1" textValue="Thẻ thứ nhất">Thẻ thứ nhất</ListboxItem>
                                <ListboxItem key="num2" textValue="Thẻ thứ hai">Thẻ thứ hai</ListboxItem>
                                <ListboxItem key="num3" textValue="Thẻ cuối cùng">Thẻ cuối cùng</ListboxItem>
                            </ListboxSection>
                            <ListboxSection title="Danger Zone" aria-label="Danger Section">
                                <ListboxItem key="delete" textValue="Xoá" className="text-danger" color="danger">
                                    Xoá
                                </ListboxItem>
                            </ListboxSection>
                        </VkxListbox>
                    </ListboxWrapper>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    2. Dynamic
                </h1>
                <ul className="mt-4 flex flex-col gap-y-2 mb-3">
                    <li>Listbox có thể load data theo 2 cách: static và dynamic</li>
                    <li><strong>Static: </strong>Load dữ liệu tĩnh, dùng khi đã biết trước các dữ liệu</li>
                    <li><strong>Dynamic: </strong>Load dữ liệu bên ngoài như gọi API hoặc update overtime</li>
                </ul>
                <div>
                    <ListboxWrapper>
                        <VkxListbox<ItemType>
                            aria-label="User Actions"
                            items={items}
                            selectionMode="single"
                            onAction={(key) => alert(`Action: ${key}`)}
                            variant="bordered"
                            color="primary"
                            radius="sm"
                            itemClasses={{
                                base: "py-2",
                                title: "font-medium",
                            }}
                        >
                            {(item) => (
                                <ListboxItem
                                    key={item.key}
                                    textValue={item.label}
                                    className={item.color === "danger" ? "text-danger" : ""}
                                    color={item.color}
                                >
                                    {item.label}
                                </ListboxItem>
                            )}
                        </VkxListbox>
                    </ListboxWrapper>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    3. Chọn 1 mục
                </h1>
                <p className="mb-3">
                    Cho phép chọn một mục duy nhất từ danh sách.
                </p>
                <div>
                    <ListboxWrapper>
                        <VkxListbox
                            disallowEmptySelection
                            aria-label="Single selection example"
                            selectedKeys={singleSelectedKeys}
                            selectionMode="single"
                            variant="flat"
                            onSelectionChange={setSingleSelectedKeys}
                        >
                            {items.map((item) => (
                                <ListboxItem key={item.key} textValue={item.label}>
                                    {item.label}
                                </ListboxItem>
                            ))}
                        </VkxListbox>
                    </ListboxWrapper>
                    <p className="text-small text-default-500 mt-2">
                        Giá trị đã chọn: {singleSelectedValue}
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    4. Chọn nhiều mục
                </h1>
                <p className="mb-3">
                    Cho phép chọn nhiều mục từ danh sách.
                </p>
                <div>
                    <ListboxWrapper>
                        <VkxListbox
                            aria-label="Multiple selection example"
                            selectedKeys={multipleSelectedKeys}
                            selectionMode="multiple"
                            variant="flat"
                            onSelectionChange={setMultipleSelectedKeys}
                        >
                            {items.map((item) => (
                                <ListboxItem key={item.key} textValue={item.label}>
                                    {item.label}
                                </ListboxItem>
                            ))}
                        </VkxListbox>
                    </ListboxWrapper>
                    <p className="text-small text-default-500 mt-2">
                        Giá trị đã chọn: {multipleSelectedValue}
                    </p>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    5. Thêm icon và mô tả
                </h1>
                <div>
                    <ListboxWrapper>
                        <VkxListbox aria-label="Listbox menu with descriptions" variant="flat">
                            <ListboxItem
                                key="new"
                                textValue="New file"
                                description="Create a new file"
                                startContent={<AddNoteIcon className={iconClasses} />}
                            >
                                New file
                            </ListboxItem>
                            <ListboxItem
                                key="copy"
                                textValue="Copy link"
                                description="Copy the file link"
                                startContent={<CopyDocumentIcon className={iconClasses} />}
                            >
                                Copy link
                            </ListboxItem>
                            <ListboxItem
                                key="edit"
                                textValue="Edit file"
                                showDivider
                                description="Allows you to edit the file"
                                startContent={<EditDocumentIcon className={iconClasses} />}
                            >
                                Edit file
                            </ListboxItem>
                            <ListboxItem
                                key="delete"
                                textValue="Delete file"
                                className="text-danger"
                                color="danger"
                                description="Permanently delete the file"
                                startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                            >
                                Delete file
                            </ListboxItem>
                        </VkxListbox>
                    </ListboxWrapper>
                </div>
            </div>

            <div>
                <h1 className="text-xl font-medium text-black dark:text-white mb-3">
                    6. Visualization
                </h1>
                <p className="mb-3">
                    Listbox hỗ trợ Visualization, cho phép hiển thị các danh sách lớn bằng cách chỉ hiển thị trong khung.
                    Có thể bật Visualization bằng cách đặt isVirtualized thành true.
                </p>
                <div>
                    <ListboxWrapper>
                        <VkxListbox
                            aria-label="Listbox with virtualization"
                            listboxProps={{
                                className: "max-w-xs",
                                virtualization: {
                                    maxListboxHeight: 400,
                                    itemHeight: 40,
                                },
                            }}
                            isVirtualized
                        >
                            {items_visual.map((item, index) => (
                                <ListboxItem key={index} textValue={item.label}>
                                    {item.label}
                                </ListboxItem>
                            ))}
                        </VkxListbox>
                    </ListboxWrapper>
                </div>
            </div>

            <div>
                <div className="p-4 sm:p-6 lg:p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Listbox (Thuộc tính)</h2>
                    <Table aria-label="Bảng thuộc tính của Modal HeroUI">
                        <TableHeader>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Prop</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Type</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Default</TableColumn>
                            <TableColumn className="font-semibold text-lg text-gray-700 dark:text-gray-200">Công dụng</TableColumn>
                        </TableHeader>
                        <TableBody>
                            {listboxProps.map((prop, index) => (
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

// ListboxWrapper bọc lại Listbox
export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
        {children}
    </div>
);

// Icons
export const AddNoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z"
            fill="currentColor"
            opacity={0.4}
        />
        <path
            d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
            fill="currentColor"
        />
    </svg>
);

export const CopyDocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z"
            fill="currentColor"
            opacity={0.4}
        />
        <path
            d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z"
            fill="currentColor"
        />
        <path
            d="M11.98 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z"
            fill="currentColor"
        />
    </svg>
);

export const EditDocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
            fill="currentColor"
            opacity={0.4}
        />
        <path
            d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.30-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.40 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
            fill="currentColor"
        />
    </svg>
);

export const DeleteDocumentIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.20c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
            fill="currentColor"
        />
        <path
            d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.70-.34-.95Z"
            fill="currentColor"
            opacity={0.399}
        />
        <path
            clipRule="evenodd"
            d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

