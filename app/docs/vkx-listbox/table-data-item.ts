export const listboxItemProps = [
    {
        prop: "children",
        type: "ReactNode",
        default: "-",
        description: "Nội dung con của ListboxItem, thường là các thành phần hiển thị trong mục."
    },
    {
        prop: "key",
        type: "React.Key",
        default: "-",
        description: "Khóa duy nhất cho ListboxItem, cần thiết để xác định mục trong danh sách."
    },
    {
        prop: "title",
        type: "string | ReactNode",
        default: "-",
        description: "Tiêu đề của mục, có thể là chuỗi hoặc nội dung React."
    },
    {
        prop: "textValue",
        type: "string",
        default: "-",
        description: "Giá trị văn bản của mục, dùng để tìm kiếm hoặc so sánh."
    },
    {
        prop: "description",
        type: "string | ReactNode",
        default: "-",
        description: "Mô tả bổ sung cho mục, có thể là chuỗi hoặc nội dung React."
    },
    {
        prop: "shortcut",
        type: "string | ReactNode",
        default: "-",
        description: "Phím tắt hoặc nhãn phím tắt liên quan đến mục."
    },
    {
        prop: "startContent",
        type: "ReactNode",
        default: "-",
        description: "Nội dung hiển thị ở đầu mục, thường là biểu tượng hoặc thành phần khác."
    },
    {
        prop: "endContent",
        type: "ReactNode",
        default: "-",
        description: "Nội dung hiển thị ở cuối mục, thường là biểu tượng hoặc thành phần khác."
    },
    {
        prop: "selectedIcon",
        type: "ListboxItemSelectedIconProps",
        default: "-",
        description: "Thuộc tính tùy chỉnh cho biểu tượng 'đã chọn' của mục."
    },
    {
        prop: "href",
        type: "string",
        default: "-",
        description: "Đường dẫn URL nếu mục là liên kết (link)."
    },
    {
        prop: "target",
        type: "HTMLAttributeAnchorTarget",
        default: "-",
        description: "Thuộc tính target của liên kết (ví dụ: _blank, _self)."
    },
    {
        prop: "rel",
        type: "string",
        default: "-",
        description: "Thuộc tính rel của liên kết, định nghĩa mối quan hệ với tài nguyên khác."
    },
    {
        prop: "download",
        type: "boolean | string",
        default: "-",
        description: "Xác định liệu mục có cho phép tải xuống tệp khi nhấp vào hay không."
    },
    {
        prop: "ping",
        type: "string",
        default: "-",
        description: "URL để gửi thông báo khi liên kết được nhấp (ping)."
    },
    {
        prop: "referrerPolicy",
        type: "HTMLAttributeReferrerPolicy",
        default: "-",
        description: "Chính sách referrer cho liên kết."
    },
    {
        prop: "shouldHighlightOnFocus",
        type: "boolean",
        default: "false",
        description: "Xác định liệu mục có được làm nổi bật khi được focus hay không."
    },
    {
        prop: "hideSelectedIcon",
        type: "boolean",
        default: "false",
        description: "Ẩn biểu tượng 'đã chọn' trên mục khi được chọn."
    },
    {
        prop: "showDivider",
        type: "boolean",
        default: "false",
        description: "Xác định xem có hiển thị đường phân cách dưới mục hay không."
    },
    {
        prop: "isDisabled",
        type: "boolean",
        default: "false",
        description: "Xác định liệu mục có bị vô hiệu hóa (không thể chọn) hay không."
    },
    {
        prop: "isSelected",
        type: "boolean",
        default: "false",
        description: "Xác định liệu mục có đang được chọn hay không."
    },
    {
        prop: "isReadOnly",
        type: "boolean",
        default: "false",
        description: "Xác định liệu mục có ở chế độ chỉ đọc hay không."
    },
    {
        prop: "classNames",
        type: "Partial<Record<\"base\" | \"wrapper\" | \"title\" | \"description\" | \"shortcut\" | \"selectedIcon\", string>>",
        default: "-",
        description: "Tùy chỉnh các class Tailwind CSS cho các slot của ListboxItem."
    }
];