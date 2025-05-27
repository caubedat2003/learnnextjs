"use client";

import React from "react";
import { Avatar } from "@heroui/react";
import { VkxRadioGroup, VkxRadio } from "@/components/vkx-radio/vkx-radio";

const radioItems = [
  {
    key: "1",
    label: "JavaScript",
    description: "Popular programming language for web development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    key: "2",
    label: "TypeScript",
    description: "JavaScript with static typing",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    key: "3",
    label: "Python",
    description: "Simple and powerful programming language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
];

export default function VkxRadioGroupPage() {
  const [selected, setSelected] = React.useState<string>("");
  const [selectedMulti, setSelectedMulti] = React.useState<string[]>([]);

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Radio Group cơ bản
        </h1>
        <VkxRadioGroup
          label="Ngôn ngữ lập trình"
          value={selected}
          onValueChange={setSelected}
        >
          {radioItems.map((item) => (
            <VkxRadio key={item.key} value={item.key}>
              <span className="flex items-center gap-2">
                <Avatar src={item.icon} className="w-5 h-5" />
                <span>{item.label}</span>
              </span>
              <span className="block text-xs text-gray-500">{item.description}</span>
            </VkxRadio>
          ))}
        </VkxRadioGroup>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Radio Group disabled
        </h1>
        <VkxRadioGroup label="Ngôn ngữ lập trình" value={selected} isDisabled>
          {radioItems.map((item) => (
            <VkxRadio key={item.key} value={item.key}>
              {item.label}
            </VkxRadio>
          ))}
        </VkxRadioGroup>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Radio Group với một số lựa chọn disabled
        </h1>
        <VkxRadioGroup label="Ngôn ngữ lập trình" value={selected} onValueChange={setSelected}>
          {radioItems.map((item, idx) => (
            <VkxRadio key={item.key} value={item.key} isDisabled={idx === 1}>
              {item.label}
            </VkxRadio>
          ))}
        </VkxRadioGroup>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Radio Group với mô tả
        </h1>
        <VkxRadioGroup label="Ngôn ngữ lập trình" value={selected} onValueChange={setSelected} description="Hãy chọn ngôn ngữ bạn thích">
          {radioItems.map((item) => (
            <VkxRadio key={item.key} value={item.key}>
              <span className="flex items-center gap-2">
                <Avatar src={item.icon} className="w-5 h-5" />
                <span>{item.label}</span>
              </span>
              <span className="block text-xs text-gray-500">{item.description}</span>
            </VkxRadio>
          ))}
        </VkxRadioGroup>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Radio Group với validation
        </h1>
        <VkxRadioGroup
          label="Ngôn ngữ lập trình"
          value={selected}
          onValueChange={setSelected}
          isRequired
          isInvalid={!selected}
          errorMessage={!selected ? "Vui lòng chọn một ngôn ngữ" : ""}
        >
          {radioItems.map((item) => (
            <VkxRadio key={item.key} value={item.key}>
              {item.label}
            </VkxRadio>
          ))}
        </VkxRadioGroup>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxRadioGroup Props
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
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">string | ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nhãn cho radio group</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị đang chọn</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onValueChange</td>
                <td className="border px-4 py-2">(value: string) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa toàn bộ group</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Bắt buộc phải chọn</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isInvalid</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Trạng thái không hợp lệ</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">errorMessage</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Thông báo lỗi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">description</td>
                <td className="border px-4 py-2">string | ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Mô tả bổ sung</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">children</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Các VkxRadio bên trong group</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxRadio Props
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
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị của radio</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa radio</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">children</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Nội dung hiển thị</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
