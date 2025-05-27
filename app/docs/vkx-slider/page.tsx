"use client";

import React from "react";
import { VkxSlider } from "@/components/vkx-slider/vkx-slider";

export default function VkxSliderPage() {
  const [value, setValue] = React.useState(50);
  const [value2, setValue2] = React.useState(30);
  const [value3, setValue3] = React.useState(0);

  const handleValue = (v: number | number[]) => {
    if (typeof v === "number") setValue(v);
  };
  const handleValue2 = (v: number | number[]) => {
    if (typeof v === "number") setValue2(v);
  };
  const handleValue3 = (v: number | number[]) => {
    if (typeof v === "number") setValue3(v);
  };

  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Slider cơ bản
        </h1>
        <VkxSlider label="Chọn giá trị" value={value} onChange={handleValue} minValue={0} maxValue={100} />
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Giá trị: {value}</div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Slider disabled
        </h1>
        <VkxSlider label="Không thể chỉnh" value={value2} minValue={0} maxValue={100} isDisabled onChange={handleValue2} />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Slider với marks tuỳ chỉnh
        </h1>
        <VkxSlider
          label="Chọn mức độ"
          value={value3}
          onChange={handleValue3}
          minValue={0}
          maxValue={4}
          marks={[
            { value: 0, label: "Rất thấp" },
            { value: 1, label: "Thấp" },
            { value: 2, label: "Trung bình" },
            { value: 3, label: "Cao" },
            { value: 4, label: "Rất cao" },
          ]}
        />
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">Mức: {value3}</div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Slider với validation
        </h1>
        <VkxSlider
          label="Chọn giá trị lớn hơn 30"
          value={value}
          onChange={handleValue}
          minValue={0}
          maxValue={100}
        />
        {value <= 30 && (
          <p className="text-red-500 text-sm mt-2">Giá trị phải lớn hơn 30</p>
        )}
      </div>

      <div>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxSlider Props
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
                <td className="border px-4 py-2">Nhãn cho slider</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">value</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Giá trị hiện tại</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onChange</td>
                <td className="border px-4 py-2">(value: number) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">minValue</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">0</td>
                <td className="border px-4 py-2">Giá trị nhỏ nhất</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">maxValue</td>
                <td className="border px-4 py-2">number</td>
                <td className="border px-4 py-2">100</td>
                <td className="border px-4 py-2">Giá trị lớn nhất</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">marks</td>
                <td className="border px-4 py-2">Array&#60;{`{ value: number; label: string }`}&#62;</td>
                <td className="border px-4 py-2">[]</td>
                <td className="border px-4 py-2">Các mốc đánh dấu trên slider</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Vô hiệu hóa slider</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">description</td>
                <td className="border px-4 py-2">string | ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Mô tả bổ sung</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
