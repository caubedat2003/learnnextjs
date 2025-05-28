"use client";

import { VkxTimeInput } from "@/components/vkx-time-input/vkx-time-input";
import { TimeInputValue } from "@heroui/react";
import {
  parseAbsoluteToLocal,
  Time,
  ZonedDateTime,
} from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { useState } from "react";

export default function VkxTestTimePage() {
  const [value, setTime] = useState<TimeInputValue | null>(
    parseAbsoluteToLocal("2024-04-08T18:45:22Z")
  );
  let formatter = useDateFormatter({ dateStyle: "short", timeStyle: "long" });

  return (
    <div>
      <div className="mb-6">
        <p>1. Cơ bản</p>
        <div className="mt-2">
          <VkxTimeInput
            className="max-w-xs"
            defaultValue={new Time(11, 45)}
            label="Event Time"
          />
        </div>
      </div>
      <div className="mb-6">
        <p>2. Bắt buộc nhập</p>
        <div className="mt-2">
          <VkxTimeInput className="max-w-xs" isRequired />
        </div>
      </div>
      <div className="mb-6">
        <p>3. Vô hiệu hóa</p>
        <div className="mt-2">
          <VkxTimeInput className="max-w-xs" isDisabled />
        </div>
      </div>

      <div className="mb-6">
        <p>4. Với thông điệp lỗi</p>
        <div className="mt-2">
          <VkxTimeInput
            className="max-w-xs"
            isInvalid
            errorMessage="Please enter a valid time"
            label="Event Time"
          />
        </div>
      </div>

      <div className="mb-6">
        <p>5. Điều khiển</p>
        <div className="mt-2">
          <VkxTimeInput
            className="max-w-xs"
            label="Event Time"
            value={value}
            onChange={(value) => {
              setTime(value);
            }}
          />
        </div>
        <p className="mt-2 text-default-500 text-sm">
          {value instanceof ZonedDateTime
            ? (value.toDate && formatter.format(value.toDate())) ||
              (value && value.toString()) ||
              "--"
            : ""}
        </p>
      </div>

      <div className="mb-6">
        <p>6. Độ chi tiết</p>
        <p>
          Thuộc tính granularity cho phép bạn kiểm soát đơn vị nhỏ nhất được
          hiển thị bởi TimeInput. Mặc định, thời gian được hiển thị với độ chi
          tiết là "phút". Nếu muốn hiển thị thời gian chi tiết hơn, bạn có thể
          đặt thuộc tính granularity thành "giây"
        </p>
        <div className="mt-3 flex gap-2">
          <VkxTimeInput
            className="max-w-xs"
            label="Hour"
            value={value}
            granularity="hour"
            onChange={(value) => {
              setTime(value);
            }}
          />
          <VkxTimeInput
            className="max-w-xs"
            label="Minute"
            value={value}
            granularity="minute"
            onChange={(value) => {
              setTime(value);
            }}
          />
          <VkxTimeInput
            className="max-w-xs"
            label="Second"
            granularity="second"
            value={value}
            onChange={(value) => {
              setTime(value);
            }}
          />
        </div>
      </div>
      <div>
        <p>7. Giá trị nhỏ nhất, lớn nhất</p>
        <p>
          Thuộc tính maxValue cho phép bạn kiểm tra (xác thực) giá trị thời gian
          không được vượt quá một thời điểm nhất định. Thuộc tính minValue cho
          phép bạn kiểm tra (xác thực) giá trị thời gian không được nhỏ hơn một
          thời điểm nhất định.
        </p>
        <div className="mt-3 flex gap-3">
          <VkxTimeInput defaultValue={new Time(8)} minValue={new Time(9)} />
          <VkxTimeInput defaultValue={new Time(18)} maxValue={new Time(17)} />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4">
          VkxTimeInput Props
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
                <td className="border px-4 py-2">defaultValue</td>
                <td className="border px-4 py-2">Time</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The default time value.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">minValue</td>
                <td className="border px-4 py-2">Time</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The minimum allowed time value.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">maxValue</td>
                <td className="border px-4 py-2">Time</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The maximum allowed time value.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">granularity</td>
                <td className="border px-4 py-2">"hour" | "minute" | "second"</td>
                <td className="border px-4 py-2">"minute"</td>
                <td className="border px-4 py-2">Controls the smallest unit displayed.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Marks the input as required.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isDisabled</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Disables the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">isInvalid</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Marks the input as invalid.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">errorMessage</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Displays an error message.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
