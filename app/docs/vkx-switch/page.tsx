"use client";

import React from "react";
import { VkxSwitch } from "@/components/vkx-switch/vkx-switch";

export default function VkxSwitchPage() {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(true);

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Switch cơ bản
        </h1>
        <VkxSwitch
          checked={checked}
          onValueChange={setChecked}
        >
          Bật/Tắt
        </VkxSwitch>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Switch mặc định bật
        </h1>
        <VkxSwitch
          checked={checked2}
          onValueChange={setChecked2}
        >
          Nâng cao
        </VkxSwitch>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Switch disabled
        </h1>
        <VkxSwitch isDisabled>
          Không thể thao tác
        </VkxSwitch>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Switch với màu sắc
        </h1>
        <div className="flex gap-4">
          <VkxSwitch color="primary">Primary</VkxSwitch>
          <VkxSwitch color="success">Success</VkxSwitch>
          <VkxSwitch color="danger">Danger</VkxSwitch>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Switch với validation
        </h1>
        <VkxSwitch
          checked={checked}
          onValueChange={setChecked}
          required
        >
          Đồng ý
        </VkxSwitch>
        {!checked && (
          <p className="text-red-500 text-sm mt-2">Bạn phải bật công tắc này</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxSwitch Props
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900">
              <tr>
                <td className="border px-4 py-2">checked</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Trạng thái bật/tắt</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onValueChange</td>
                <td className="border px-4 py-2">(checked: boolean) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi thay đổi trạng thái</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa switch</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">required</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Bắt buộc phải bật</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">color</td>
                <td className="border px-4 py-2">"default" | "primary" | "secondary" | "success" | "warning" | "danger"</td>
                <td className="border px-4 py-2">"primary"</td>
                <td className="border px-4 py-2">Màu sắc của switch</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">size</td>
                <td className="border px-4 py-2">"sm" | "md" | "lg"</td>
                <td className="border px-4 py-2">"md"</td>
                <td className="border px-4 py-2">Kích thước</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
