export const listboxSectionProps = [
    {
        prop: "children",
        type: "ReactNode",
        default: "-",
        description: "Các mục con (thường là ListboxItem) được chứa trong section."
    },
    {
        prop: "title",
        type: "string",
        default: "-",
        description: "Tiêu đề của section, hiển thị như tiêu đề nhóm các mục trong Listbox."
    },
    {
        prop: "items",
        type: "Iterable<T>",
        default: "-",
        description: "Danh sách các mục có thể lặp (Iterable) để render động các ListboxItem trong section."
    },
    {
        prop: "hideSelectedIcon",
        type: "boolean",
        default: "false",
        description: "Ẩn biểu tượng 'đã chọn' trên các mục trong section khi chúng được chọn."
    },
    {
        prop: "showDivider",
        type: "boolean",
        default: "false",
        description: "Xác định xem có hiển thị đường phân cách giữa các section hay không."
    },
    {
        prop: "dividerProps",
        type: "DividerProps",
        default: "-",
        description: "Các thuộc tính bổ sung áp dụng cho đường phân cách của section."
    },
    {
        prop: "classNames",
        type: "Partial<Record<\"base\" | \"heading\" | \"group\" | \"divider\", string>>",
        default: "-",
        description: "Tùy chỉnh các class Tailwind CSS cho các slot của section (base, heading, group, divider)."
    },
    {
        prop: "itemClasses",
        type: "Partial<Record<\"base\" | \"wrapper\" | \"title\" | \"description\" | \"shortcut\" | \"selectedIcon\", string>>",
        default: "-",
        description: "Tùy chỉnh các class Tailwind CSS cho các slot của các mục (ListboxItem) trong section."
    }
];