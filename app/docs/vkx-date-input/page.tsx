"use client";

import React from "react";
import { VkxDateInput } from "@/components/vkx-date-input/vkx-date-input";

export default function VkxDateInputPage() {
  const [date, setDate] = React.useState<any>(null);

  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Date Input cơ bản
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Date input cơ bản sử dụng VkxDateInput. Có thể chọn ngày/tháng/năm với giao diện hiện đại.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxDateInput label="Ngày sinh" onChange={setDate} value={date} />
        {/* DateInput không hỗ trợ placeholder dạng string, chỉ hỗ trợ placeholderValue kiểu DateValue */}
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Date Input với trạng thái disabled và readonly
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Có thể cấu hình để chỉ đọc hoặc vô hiệu hóa input ngày tháng.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxDateInput isDisabled label="Ngày sinh (Disabled)" />
        <VkxDateInput isReadOnly label="Ngày sinh (Readonly)" />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Date Input với xác thực và lỗi
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng isInvalid và errorMessage để hiển thị lỗi khi ngày không hợp lệ.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxDateInput
          errorMessage="Vui lòng chọn ngày hợp lệ"
          isInvalid={true}
          label="Ngày sinh"
        />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Theo dõi thay đổi giá trị
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng value và onChange để theo dõi và xử lý các thay đổi giá trị của date input.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxDateInput
          label="Ngày chọn"
          value={date}
          onChange={setDate}
        />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">
        Giá trị hiện tại: {date ? date.toString() : "Chưa chọn"}
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxDateInput Props
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Thuộc tính</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Kiểu dữ liệu</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Mặc định</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Mô tả</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">label</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Nhãn hiển thị cho input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">any</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Giá trị ngày được chọn</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">onChange</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">(date: any) =&gt; void</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isDisabled</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vô hiệu hóa input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isReadOnly</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Chỉ đọc</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isInvalid</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Trạng thái lỗi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">errorMessage</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Thông báo lỗi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
