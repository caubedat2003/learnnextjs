export const listboxProps = [
    {
        prop: "children",
        type: "ReactNode[]",
        default: "",
        description: "Nội dung con của Listbox để render. Thường là ListboxItem hoặc ListboxSection."
    },
    {
        prop: "item",
        type: "Iterable<T>",
        default: "",
        description: "Các mục riêng lẻ trong Listbox"
    },
    {
        prop: "variant",
        type: '"flat" | "bordered" | "faded" | "underlined"',
        default: '"flat"',
        description: "Xác định kiểu hiển thị của Listbox, thay đổi kiểu hover của các mục trong danh sách."
    },
    {
        prop: "color",
        type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger"',
        default: '"default"',
        description: "Xác định màu sắc chủ đạo của Listbox."
    },
    {
        prop: "size",
        type: '"sm" | "md" | "lg"',
        default: '"md"',
        description: "Xác định kích thước của Listbox."
    },
    {
        prop: "selectionMode",
        type: '"none" | "single" | "multiple"',
        default: '"none"',
        description: "Chế độ chọn của Listbox: không chọn, chọn một mục hoặc chọn nhiều mục."
    },
    {
        prop: "selectedKeys",
        type: "React.Key[]",
        default: '',
        description: "Danh sách các key của các mục đã được chọn trong Listbox."
    },
    {
        prop: "disabledKeys",
        type: "React.Key[]",
        default: "",
        description: "Danh sách các key của các mục bị vô hiệu hóa, ngăn người dùng chọn các mục này."
    },
    {
        prop: "disallowEmptySelection",
        type: "boolean",
        default: "false",
        description: "Cấm người dùng bỏ chọn tất cả các mục khi chế độ chọn là 'multiple'."
    },
    {
        prop: "topContent",
        type: "ReactNode",
        default: "undefined",
        description: "Nội dung hiển thị phía trên danh sách các mục trong Listbox."
    },
    {
        prop: "bottomContent",
        type: "ReactNode",
        default: "undefined",
        description: "Nội dung hiển thị phía dưới danh sách các mục trong Listbox."
    },
    {
        prop: "isVirtualized",
        type: "boolean",
        default: "false",
        description: "Kích hoạt chế độ ảo hóa để tối ưu hóa hiển thị danh sách lớn, chỉ render các mục trong khung nhìn."
    },
    {
        prop: "itemHeight",
        type: "number",
        default: "32",
        description: "Chiều cao của mỗi mục trong Listbox, cần thiết khi sử dụng virtualized."
    },
    {
        prop: "classNames",
        type: "Record<string, string>",
        default: "{}",
        description: "Tùy chỉnh các class Tailwind CSS cho các slot của Listbox."
    },
    {
        prop: "listboxProps",
        type: "React.HTMLAttributes<HTMLUListElement>",
        default: "{}",
        description: "Các thuộc tính HTML bổ sung được áp dụng cho phần tử danh sách (ul) của Listbox."
    },
    {
        prop: "hideEmptyContent",
        type: "boolean",
        default: "true",
        description: "Ẩn nội dung rỗng nếu danh sách không có mục nào."
    }
];