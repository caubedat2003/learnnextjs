"use client";

import React from "react";
import { VkxSkeleton } from "@/components/vkx-skeleton/vkx-skeleton";

export default function VkxSkeletonPage() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Skeleton cơ bản
        </h1>
        <VkxSkeleton className="w-40 h-6" isLoaded={false} />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Skeleton avatar
        </h1>
        <VkxSkeleton className="w-16 h-16 rounded-full" isLoaded={false} />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Skeleton text
        </h1>
        <div className="space-y-2">
          <VkxSkeleton className="w-48 h-4" isLoaded={false} />
          <VkxSkeleton className="w-40 h-4" isLoaded={false} />
          <VkxSkeleton className="w-32 h-4" isLoaded={false} />
        </div>
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Skeleton hình tròn
        </h1>
        <VkxSkeleton className="w-12 h-12 rounded-full" isLoaded={false} />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          5. Skeleton với loading
        </h1>
        <VkxSkeleton className="w-40 h-6" isLoaded={true} />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          6. Skeleton custom màu sắc
        </h1>
        <VkxSkeleton className="w-40 h-6 bg-blue-300 dark:bg-blue-700" isLoaded={false}>
          <div>Lưu Mạnh Cường</div>
        </VkxSkeleton>
      </div>

      <div>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxSkeleton Props
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
                <td className="border px-4 py-2">isAnimated</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Hiệu ứng chuyển động</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">className</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Tuỳ chỉnh class Tailwind</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">children</td>
                <td className="border px-4 py-2">ReactNode</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">
                  Nội dung hiển thị khi loading=false
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">loading</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">true</td>
                <td className="border px-4 py-2">Ẩn/hiện skeleton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
