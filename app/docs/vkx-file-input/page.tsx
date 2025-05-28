"use client";

import { VkxFileInput } from "@/components/vkx-file-input/vkx-file-input";
import { VkxInput } from "@/components/vkx-input";
import React from "react";

export default function VkxFileInputPage() {
  const [files, setFiles] = React.useState<FileList>();

  return (
    <div>
      <div className="mb-7">
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Tải lên một hoặc nhiều file
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Kiểm tra xem đuôi file có
        </p>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxFileInput
          isRequired
          multiple
          label="Tải lên file của bạn"
          labelPlacement="outside"
          onChange={(e) => {
            if (e.target.files) {
              setFiles(e.target.files);
            }
          }}
        />
      </div>
      <div className="text-gray-600 dark:text-gray-400">
        {files
          ? Array.from(files).map((item, index) => (
              <div
                key={`${item.name} + ${index}`}
                className="mt-3 p-2 border-b-1"
              >
                <span>
                  Tên file: <strong>{files?.item(0)?.name}</strong>
                </span>
                <br />
                <span>
                  Kích cỡ:<strong>{files?.item(0)?.size}</strong>{" "}
                </span>
                <br />
                <span>
                  Loại: <strong>{files?.item(0)?.type}</strong>
                </span>
                <br />
                <strong>..v.v.</strong>
              </div>
            ))
          : ""}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-medium text-black dark:text-white mb-4">
          VkxFileInput Props
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
                <td className="border px-4 py-2">isRequired</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Marks the input as required.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">multiple</td>
                <td className="border px-4 py-2">boolean</td>
                <td className="border px-4 py-2">false</td>
                <td className="border px-4 py-2">Allows multiple file uploads.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">label</td>
                <td className="border px-4 py-2">string</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">The label for the input.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">labelPlacement</td>
                <td className="border px-4 py-2">"inside" | "outside" | "outside-left"</td>
                <td className="border px-4 py-2">"outside"</td>
                <td className="border px-4 py-2">Controls the placement of the label.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">onChange</td>
                <td className="border px-4 py-2">(event: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; void</td>
                <td className="border px-4 py-2">-</td>
                <td className="border px-4 py-2">Callback triggered when the file input changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
