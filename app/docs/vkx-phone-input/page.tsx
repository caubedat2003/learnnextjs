"use client";

import React from "react";
import { VkxPhoneInput } from "@/components/vkx-phone-input/vkx-phone-input";

export default function VkxPhoneInputPage() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  // Simple phone validation (Vietnam, 10-11 digits, starts with 0 or +84)
  const validatePhone = (val: string) => {
    if (!val) return "";
    const cleaned = val.replace(/\D/g, "");
    if (cleaned.length < 9 || cleaned.length > 11) {
      return "Số điện thoại phải từ 9-11 chữ số";
    }
    return "";
  };

  const handleChange = (val: string) => {
    setValue(val);
    setError(validatePhone(val));
  };

  return (
    <div className="flex w-full flex-col gap-y-10 pb-8">
      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          1. Phone Input cơ bản
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Trường nhập số điện thoại với type="tel". Hỗ trợ các props cơ bản như label, placeholder, value, v.v.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxPhoneInput label="Số điện thoại" placeholder="Nhập số điện thoại" />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          2. Disabled & Readonly
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng <code>isDisabled</code> để vô hiệu hóa và <code>readOnly</code> để chỉ cho phép đọc.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxPhoneInput label="Disabled" isDisabled defaultValue="0901234567" description="Không thể chỉnh sửa" />
        <VkxPhoneInput label="Readonly" readOnly defaultValue="0901234567" description="Chỉ đọc" />
      </div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          3. Xác thực và hiển thị lỗi
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng <code>isInvalid</code> và <code>errorMessage</code> để hiển thị lỗi xác thực.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxPhoneInput
          label="Số điện thoại"
          value={value}
          onValueChange={handleChange}
          isInvalid={!!error}
          errorMessage={error}
          placeholder="Nhập số điện thoại"
        />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">Giá trị hiện tại: {value}</div>

      <div>
        <h1 className="text-xl font-medium text-black dark:text-white">
          4. Theo dõi thay đổi giá trị
        </h1>
        <div className="mb-4">
          <p className="text-gray-600 dark:text-gray-400">
            Sử dụng <code>value</code> và <code>onValueChange</code> để kiểm soát giá trị input.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <VkxPhoneInput
          label="Số điện thoại (controlled)"
          value={value}
          onValueChange={setValue}
          placeholder="Nhập số điện thoại"
        />
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">Giá trị hiện tại: {value}</div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-6">
          Tài liệu về các thuộc tính (Props)
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-white mt-8 mb-4">
          VkxPhoneInput Props
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
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">label</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Nhãn hiển thị cho trường input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">value</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Giá trị của input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">defaultValue</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Giá trị mặc định ban đầu của input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">placeholder</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Văn bản gợi ý hiển thị khi input trống</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">description</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Văn bản mô tả thêm cho input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">errorMessage</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">string</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Thông báo lỗi hiển thị khi input không hợp lệ</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isInvalid</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Xác định trạng thái không hợp lệ của input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">isDisabled</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vô hiệu hóa input</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">readOnly</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">boolean</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">false</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Chỉ cho phép đọc, không thể chỉnh sửa</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">onValueChange</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">function</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">-</td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hàm được gọi khi giá trị input thay đổi</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">
            Lưu ý
          </h3>
          <p className="text-blue-700 dark:text-blue-300">
            VkxPhoneInput kế thừa tất cả các props từ <code>Input</code> của HeroUI, nhưng luôn có <code>type="tel"</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
