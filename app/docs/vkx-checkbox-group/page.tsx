"use client";

import React from "react";
import { VkxCheckboxGroup } from "@/components/vkx-checkbox/vkx-checkbox-group";
import { Checkbox } from "@heroui/react";

const options = [
  { label: "Lựa chọn A", value: "a" },
  { label: "Lựa chọn B", value: "b" },
  { label: "Lựa chọn C", value: "c" },
];

export default function VkxCheckboxGroupPage() {
  const [checked, setChecked] = React.useState<string[]>(["a"]);

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          1. Checkbox Group cơ bản
        </h1>
        <VkxCheckboxGroup value={checked} onChange={setChecked} label="Chọn các mục phù hợp">
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </VkxCheckboxGroup>
        <p className="mt-2 text-sm text-gray-500">
          Đã chọn: {checked.length > 0 ? checked.map((k) => k.toUpperCase()).join(", ") : "Không có"}
        </p>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          2. Checkbox Group với một số lựa chọn disabled
        </h1>
        <VkxCheckboxGroup value={checked} onChange={setChecked} label="Một lựa chọn bị vô hiệu hóa">
          {options.map((option, i) => (
            <Checkbox key={option.value} value={option.value} isDisabled={i === 1}>
              {option.label}
            </Checkbox>
          ))}
        </VkxCheckboxGroup>
      </div>
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white mb-2">
          3. Checkbox Group horizontal
        </h1>
        <VkxCheckboxGroup value={checked} onChange={setChecked} label="Chọn ngang" direction="horizontal">
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value}>
              {option.label}
            </Checkbox>
          ))}
        </VkxCheckboxGroup>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxCheckboxGroup Props
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
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">string[]</td>
                <td className="border px-4 py-2">[]</td>
                <td className="border px-4 py-2">Các giá trị đã chọn (controlled)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onChange</td>
                <td className="border px-4 py-2">(value: string[]) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">React.ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nhãn cho group</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">direction</td>
                <td className="border px-4 py-2">"vertical" | "horizontal"</td>
                <td className="border px-4 py-2">"vertical"</td>
                <td className="border px-4 py-2">Hiển thị dọc hoặc ngang</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">className</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Class CSS tuỳ chỉnh</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">children</td>
                <td className="border px-4 py-2">React.ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Custom render nội dung group</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}