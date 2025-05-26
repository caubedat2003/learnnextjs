
export const modalPropsData = [
    {
        prop: "isOpen",
        type: "boolean",
        default: "false",
        description: "Xác định xem Modal có đang mở hay không. Cần được quản lý bằng state.",
    },
    {
        prop: "onOpenChange",
        type: "(isOpen: boolean) => void",
        default: "() => {}",
        description: "Hàm callback được gọi khi trạng thái mở của Modal thay đổi (mở hoặc đóng).",
    },
    {
        prop: "isDismissable",
        type: "boolean",
        default: "true",
        description: "Cho phép Modal đóng khi người dùng nhấp vào lớp phủ (overlay) bên ngoài. Đặt thành 'false' để tắt.",
    },
    {
        prop: "isKeyboardDismissDisabled",
        type: "boolean",
        default: "false",
        description: "Khi 'true', ngăn Modal đóng khi người dùng nhấn phím 'Esc'.",
    },
    {
        prop: "scrollBehavior",
        type: "'inside' | 'outside'",
        default: "'inside'",
        description: "Xác định cách nội dung bên trong Modal cuộn. 'inside' cho phép cuộn nội dung trong Modal, 'outside' cho phép cuộn trang nền.",
    },
    {
        prop: "backdrop",
        type: "'opaque' | 'blur' | 'transparent'",
        default: "'opaque'",
        description: "Xác định loại lớp phủ hiển thị phía sau Modal: 'opaque' (mờ đục), 'blur' (làm mờ), 'transparent' (trong suốt).",
    },
    {
        prop: "showCloseButton",
        type: "boolean",
        default: "true",
        description: "Xác định xem có hiển thị nút đóng 'x' ở góc trên bên phải của Modal hay không.",
    },
    {
        prop: "placement",
        type: "'center' | 'top' | 'bottom' | 'top-center' | 'bottom-center'",
        default: "'center'",
        description: "Điều khiển vị trí của Modal trên màn hình.",
    },
    {
        prop: "motionProps",
        type: "object",
        default: "undefined",
        description: "Các thuộc tính để tùy chỉnh hoạt ảnh mở/đóng của Modal (sử dụng Framer Motion).",
    },
    {
        prop: "classNames",
        type: "object",
        default: "undefined",
        description: "Các class CSS tùy chỉnh cho các phần tử bên trong Modal (ví dụ: wrapper, base, backdrop, header, body, footer, closeButton).",
    },
    {
        prop: "disableAnimation",
        type: "boolean",
        default: "false",
        description: "Tắt tất cả các hoạt ảnh của Modal.",
    },
    {
        prop: "portalContainer",
        type: "HTMLElement",
        default: "document.body",
        description: "Phần tử DOM mà Modal sẽ được gắn vào (sử dụng React Portal).",
    },
    {
        prop: "role",
        type: "string",
        default: "'dialog'",
        description: "Vai trò WAI-ARIA của Modal cho khả năng truy cập.",
    },
    {
        prop: "aria-labelledby",
        type: "string",
        default: "undefined",
        description: "ID của phần tử làm nhãn cho Modal (cho khả năng truy cập).",
    },
    {
        prop: "aria-describedby",
        type: "string",
        default: "undefined",
        description: "ID của phần tử mô tả Modal (cho khả năng truy cập).",
    },
    {
        prop: "closeButtonAriaLabel",
        type: "string",
        default: "'Close'",
        description: "Nhãn ARIA cho nút đóng Modal (cho khả năng truy cập).",
    },
];