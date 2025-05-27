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
    </div>
  );
}
