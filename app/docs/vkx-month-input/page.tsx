"use client";
import { VkxMonthInput } from "@/components/vkx-month-input/vkx-month-input";
import React from "react";

export default function VkxMonthInputPage() {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <h1 className="text-4xl">Month input</h1>
      <div className="mt-4">
        <h1 className="text-xl">1. Cơ bản</h1>
        <div className="mt-3">
          <VkxMonthInput
            className="max-w-xs"
            label="Tháng"
            onSelectionChange={(value) => {
              console.log(value);
              setValue(value.currentKey ?? "");
            }}
          />
        </div>
        <div className="mt-5">
          <p>Giá trị bạn chọn là: {value}</p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl">2. Vô hiệu hóa</h1>
        <div className="mt-3">
          <VkxMonthInput
            className="max-w-xs"
            isDisabled
            label="Tháng"
            onSelectionChange={(value) => {
              console.log(value);
              setValue(value.currentKey ?? "");
            }}
          />
        </div>
        <div className="mt-5">
          <p>Giá trị bạn chọn là: {value}</p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-xl">3. Điều khiên cơ bản</h1>
        <div className="mt-3">
          <VkxMonthInput
            className="max-w-xs"
            label="Tháng"
            onSelectionChange={(value) => {
              console.log(value);
              setValue(value.currentKey ?? "");
            }}
          />
        </div>
        <div className="mt-5">
          <p>Giá trị bạn chọn là: {value}</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4">
          VkxMonthInput Props
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
                <td className="border px-4 py-2">selectedKeys</td>
                <td className="border px-4 py-2">Set&lt;string&gt;</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The currently selected month(s).</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onSelectionChange</td>
                <td className="border px-4 py-2">(value: &#123; currentKey: string &#125;) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback triggered when the selection changes.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Disables the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The label for the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">className</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Custom CSS classes for styling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
