"use client";

import React from "react";
import { VkxRangeCalendar } from "@/components/vkx-calendar/vkx-range-calendar";

export default function VkxRangeCalendarPage() {
  const [range, setRange] = React.useState<any>(null);

  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Range Calendar cơ bản
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Range Calendar cho phép chọn một khoảng ngày trực tiếp trên giao diện lịch.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxRangeCalendar value={range} onChange={setRange} />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">
        Giá trị hiện tại: {range ? `${range?.start?.toString() || "-"} ~ ${range?.end?.toString() || "-"}` : "Chưa chọn"}
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Range Calendar disabled và readonly
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Có thể cấu hình để chỉ đọc hoặc vô hiệu hóa range calendar.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxRangeCalendar isDisabled />
        <VkxRangeCalendar isReadOnly />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Range Calendar với ngày không khả dụng
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng isDateUnavailable để đánh dấu các ngày không thể chọn.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxRangeCalendar
          isDateUnavailable={date => date.day === 1}
        />
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxRangeCalendar Props
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
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">any</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Khoảng ngày được chọn</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">onChange</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">(range: any) =&gt; void</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Callback khi giá trị thay đổi</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isDisabled</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vô hiệu hóa calendar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isReadOnly</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Chỉ đọc</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isDateUnavailable</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">(date: any) =&gt; boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Đánh dấu ngày không khả dụng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
