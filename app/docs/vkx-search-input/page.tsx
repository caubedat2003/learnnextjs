"use client";

import { VkxSearchInput } from "@/components/vkx-search-input/vkx-search-input";
import React from "react";

export default function VkxSearchInputPage() {
  return (
    <div>
      <h1 className="mb-8 text-5xl">Search Input</h1>
      <div>
        <h1 className="mb-4">1. Cơ bản</h1>

        <VkxSearchInput
          className="max-w-xs"
          label="Tìm kiếm"
          placeholder="Nhập từ khoá"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4">
          VkxSearchInput Props
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
                <td className="border px-4 py-2">onValueChange</td>
                <td className="border px-4 py-2">(value: string) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback triggered when a search is performed.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
