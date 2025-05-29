"use client";

import React from "react";
import VkxIconButton from "@/components/vkx-icon-button/vkx-icon-button";

export default function VkxIconButtonPage() {
  const [visible, setVisible] = React.useState(false);
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Icon Button cơ bản
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Nút bấm chỉ chứa icon, sử dụng cho các thao tác như hiển thị/ẩn,
            xóa, chỉnh sửa, v.v. Có thể kết hợp với các icon tuỳ ý.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <VkxIconButton aria-label="Show" isIconOnly>
          <EyeFilledIcon className="text-2xl text-default-400" />
        </VkxIconButton>
        <VkxIconButton aria-label="Hide" isIconOnly>
          <EyeSlashFilledIcon className="text-2xl text-default-400" />
        </VkxIconButton>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Disabled & Variants
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng <code>isDisabled</code> để vô hiệu hóa nút. Có thể chọn các{" "}
            <code>variant</code> như "light", "solid", "bordered", v.v.
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <VkxIconButton aria-label="Disabled" isIconOnly isDisabled>
          <EyeFilledIcon className="text-2xl text-default-400" />
        </VkxIconButton>
        <VkxIconButton aria-label="Solid" isIconOnly variant="solid">
          <EyeFilledIcon className="text-2xl text-default-400" />
        </VkxIconButton>
        <VkxIconButton aria-label="Bordered" isIconOnly variant="bordered">
          <EyeFilledIcon className="text-2xl text-default-400" />
        </VkxIconButton>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Sự kiện và trạng thái
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng <code>onPress</code> để xử lý sự kiện click. Có thể kết hợp
            với state để thay đổi giao diện hoặc thực hiện hành động.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <VkxIconButton
          aria-label="Toggle visibility"
          isIconOnly
          variant="light"
          onPress={() => setVisible((v) => !v)}
        >
          {visible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400" />
          )}
        </VkxIconButton>
        <span className="text-gray-600 dark:text-gray-400">
          Trạng thái: {visible ? "Ẩn" : "Hiện"}
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <VkxIconButton
          aria-label="Tăng"
          isIconOnly
          variant="solid"
          onPress={() => setCount((c) => c + 1)}
        >
          <span className="text-lg font-bold">+</span>
        </VkxIconButton>
        <VkxIconButton
          aria-label="Giảm"
          isIconOnly
          variant="solid"
          onPress={() => setCount((c) => c - 1)}
        >
          <span className="text-lg font-bold">-</span>
        </VkxIconButton>
        <span className="text-gray-600 dark:text-gray-400">
          Giá trị: {count}
        </span>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxIconButton Props
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Thuộc tính
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Kiểu dữ liệu
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Mặc định
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Mô tả
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isIconOnly
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Chỉ hiển thị icon, không có text
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  variant
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "light" | "solid" | "bordered" | ...
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  "light"
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Kiểu giao diện nút
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  isDisabled
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  boolean
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  false
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Vô hiệu hóa nút
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  onPress
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  function
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Hàm được gọi khi click
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  children
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  ReactNode
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  -
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                  Icon hoặc nội dung hiển thị
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">
            Lưu ý
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            VkxIconButton kế thừa tất cả các props từ <code>Button</code> của
            HeroUI, nhưng tối ưu cho việc hiển thị icon.
          </p>
        </div>
      </div>
    </div>
  );
}
const EyeSlashFilledIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
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
        d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
        fill="currentColor"
      />
      <path
        d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
        fill="currentColor"
      />
      <path
        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
        fill="currentColor"
      />
      <path
        d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
        fill="currentColor"
      />
      <path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </svg>
  );
};
const EyeFilledIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
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
        d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
        fill="currentColor"
      />
      <path
        d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
        fill="currentColor"
      />
    </svg>
  );
};
