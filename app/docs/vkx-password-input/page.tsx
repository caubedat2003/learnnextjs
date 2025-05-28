"use client";
import { VkxPasswordInput } from "@/components/vkx-password-input/vkx-password-input";

export default function VkxPasswordInputPage() {
  return (
    <div>
      <h1 className="text-6xl mb-7">Password Input</h1>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Input mật khẩu với tùy chọn hiển thị
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Input type password với khả năng chuyển đổi giữa ẩn và hiện mật
            khẩu. Sử dụng endContent để thêm nút toggle và kiểm soát việc hiển
            thị mật khẩu.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Cải thiện trải nghiệm người dùng bằng cách cho phép kiểm tra mật
            khẩu đã nhập.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxPasswordInput
          className="max-w-xs"
          description="Click vào icon bên phải để hiện/ẩn mật khẩu"
          label="Password"
          placeholder="Nhập mật khẩu của bạn"
        />
      </div>

      <div className="mt-4">
        <div className="mb-3">
          <h1 className="text-xl font-medium text-black dark:text-white">
            2. Input mật khẩu với tùy chọn hiển thị
          </h1>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <VkxPasswordInput
            className="max-w-xs"
            isRequired
            description="Click vào icon bên phải để hiện/ẩn mật khẩu"
            label="Password"
            placeholder="Nhập mật khẩu của bạn"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4">
          VkxPasswordInput Props
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Prop
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Type
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Default
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Marks the input as required.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">description</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Provides additional information about the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The label for the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">placeholder</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The placeholder text for the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">className</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Custom CSS classes for styling.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">endContent</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Content displayed at the end of the input field.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
