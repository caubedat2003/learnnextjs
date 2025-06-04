"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  ButtonGroup,
} from "@heroui/react";
import { parseDate, CalendarDate } from "@internationalized/date";

import { FormDataType } from "./types";

//VKX Component
import VkxButton from "@/components/vkx-button/vkx-button";
import VkxCheckbox from "@/components/vkx-checkbox/vkx-checkbox";
import VkxPhoneInput from "@/components/vkx-phone-input/vkx-phone-input";
import { VkxForm } from "@/components/vkx-form/vkx-form";
import { VKXCard } from "@/components/vkx-card/vkx-card";
import { VkxInput } from "@/components/vkx-input";
import { VkxPasswordInput } from "@/components/vkx-password-input/vkx-password-input";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import { VkxRadio, VkxRadioGroup } from "@/components/vkx-radio/vkx-radio";
import { VkxNumberInput } from "@/components/vkx-number-input/vkx-number-input";
import { VkxMonthInput } from "@/components/vkx-month-input/vkx-month-input";
import { VkxYearInput } from "@/components/vkx-year-input/vkx-year-input";
import { VkxTextArea } from "@/components/vkx-text-area/vkx-text-area";
import { VkxCheckboxGroup } from "@/components/vkx-checkbox/vkx-checkbox-group";
import { VkxSelect } from "@/components/vkx-select/vkx-select";

//Object Data
const objData: FormDataType = {
  info: {
    id: "user-001",
    username: "nguyenvana",
    password: "password123",
    phone: "+84987654321",
    email: "nguyenvana@example.com",
    birthDate: "1990-05-15",
    gender: "Nam",
  },
  orther: {
    bio: "https://github.com/nguyenvana",
    exampleDate: "2025-06-15",
    weight: 70,
    month: "06",
    year: "2025",
    description:
      "Tôi là một lập trình viên full-stack với 5 năm kinh nghiệm trong việc phát triển ứng dụng web và mobile. Đam mê công nghệ mới và luôn học hỏi những kỹ thuật hiện đại.",
    groupOptions: ["a", "c"],
    emailNotifications: true,
  },
  products: [
    {
      id: "prod-001",
      name: "iPhone 15 Pro Max",
      importDate: new Date("2024-09-15"),
      status: "1",
      price: 29990000,
    },
    {
      id: "prod-002",
      name: "Samsung Galaxy S24 Ultra",
      importDate: new Date("2024-08-20"),
      status: "2",
      price: 26990000,
    },
    {
      id: "prod-003",
      name: "MacBook Air M3",
      importDate: new Date("2024-07-10"),
      status: "1",
      price: 28990000,
    },
    {
      id: "prod-004",
      name: "Dell XPS 13",
      importDate: new Date("2024-06-05"),
      status: "3",
      price: 25990000,
    },
    {
      id: "prod-005",
      name: "iPad Pro 12.9 inch",
      importDate: new Date("2024-05-25"),
      status: "1",
      price: 19990000,
    },
  ],
};

//variable
const optionsGroupCheckbox = [
  { label: "Lựa chọn A", value: "a" },
  { label: "Lựa chọn B", value: "b" },
  { label: "Lựa chọn C", value: "c" },
];

const labelPlacement = "outside";

//Page
export default function Page() {
  //hooks
  const router = useRouter();
  const [readOnly, setReadOnly] = React.useState<boolean>(true);
  const [formData, setFormData] = React.useState<FormDataType>();

  //function

  return (
    <>
      <nav className="w-full flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold mb-0">Thông tin người dùng</h2>
        {readOnly ? (
          <ButtonGroup>
            <VkxButton color="warning" type="button">
              Thêm mới SP
            </VkxButton>
            <VkxButton
              color="primary"
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setReadOnly(false);
              }}
            >
              Sửa
            </VkxButton>
            <VkxButton type="button" onPress={() => router.back()}>
              Thoát
            </VkxButton>
          </ButtonGroup>
        ) : (
          <ButtonGroup>
            <VkxButton color="primary" form="formUserInfo" type="submit">
              Lưu
            </VkxButton>
            <VkxButton
              color="danger"
              type="button"
              onPress={() => {
                setReadOnly(true);
              }}
            >
              Trở lại
            </VkxButton>
          </ButtonGroup>
        )}
      </nav>
      <Divider className="mb-10" />
      <VkxForm className="w-full" id="formUserInfo">
        {/* Thông tin cơ bản */}
        <VKXCard className="w-full mb-6">
          <div className="w-full">
            <h3 className="text-md font-semibold mb-2">Thông tin cơ bản</h3>
            <Divider className="mb-5" />
            <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
              <VkxInput
                aria-label="Enter username"
                isReadOnly={readOnly}
                label="Tên đăng nhập"
                labelPlacement={labelPlacement}
                name="info.username"
                placeholder="Nhập tên đăng nhập"
                type="text"
              />
              <VkxPasswordInput
                aria-label="Enter password"
                isReadOnly={readOnly}
                label="Mật khẩu"
                labelPlacement={labelPlacement}
                name="info.password"
                placeholder="Nhập mật khẩu mới (để trống nếu không đổi)"
              />
              <VkxPhoneInput
                aria-label="Enter phone number"
                isReadOnly={readOnly}
                label="Số điện thoại"
                labelPlacement={labelPlacement}
                name="info.phone"
                placeholder="Nhập số điện thoại của bạn"
              />
              <VkxInput
                aria-label="Enter email"
                isReadOnly={readOnly}
                label="Email"
                labelPlacement={labelPlacement}
                name="info.email"
                placeholder="Nhập email của bạn"
                type="email"
              />

              <VkxDatePicker
                aria-label="Select your desired birthDate"
                isReadOnly={readOnly}
                label="Ngày sinh"
                labelPlacement={labelPlacement}
                minValue={new CalendarDate(1900, 1, 1)}
              />

              <VkxRadioGroup
                isReadOnly={readOnly}
                label="Giới tính"
                name="info.gender"
              >
                <VkxRadio value="Nam">Nam</VkxRadio>
                <VkxRadio value="Nữ">Nữ</VkxRadio>
                <VkxRadio value="Khác">Khác</VkxRadio>
              </VkxRadioGroup>
            </div>
          </div>
        </VKXCard>

        <VKXCard className="w-full mb-6">
          <h3 className="text-md font-semibold mb-2">Khác</h3>
          <Divider className="mb-5" />
          <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
            <VkxInput
              isReadOnly={readOnly}
              label="Bio"
              labelPlacement={labelPlacement}
              name="orther.bio"
              placeholder="Nhập url bio của bạn"
              type="url"
            />

            <VkxDatePicker
              aria-label="Select your desired exampleDate"
              isReadOnly={readOnly}
              label="Example"
              labelPlacement={labelPlacement}
              minValue={new CalendarDate(2025, 5, 1)}
            />

            <VkxNumberInput
              isReadOnly={readOnly}
              label="Cân nặng"
              labelPlacement={labelPlacement}
              name="orther.weight"
              placeholder="Nhập số cân của bạn"
            />

            <VkxMonthInput
              description="Chọn tháng"
              isDisabled={readOnly}
              label="Tháng"
              labelPlacement={labelPlacement}
            />

            <VkxYearInput
              description="Chọn năm"
              isDisabled={readOnly}
              label="Năm"
              labelPlacement={labelPlacement}
            />

            <VkxTextArea
              isReadOnly={readOnly}
              label="Mô tả"
              labelPlacement={labelPlacement}
              maxRows={6}
              minRows={2}
              placeholder="Nhập mô tả..."
            />
          </div>
        </VKXCard>

        <VKXCard className="w-full mb-6">
          <h3 className="text-md font-semibold mb-2">Điều khoản</h3>
          <Divider className="mb-5" />
          <div className="grid gap-x-2 gap-y-3 grid-cols-1">
            <VkxCheckboxGroup
              isReadOnly={readOnly}
              label="Chọn các mục phù hợp"
              name="orther.groupOptions"
            >
              {optionsGroupCheckbox.map((option) => (
                <Checkbox
                  key={option.value}
                  isReadOnly={readOnly}
                  value={option.value}
                >
                  {option.label}
                </Checkbox>
              ))}
            </VkxCheckboxGroup>

            <VkxCheckbox isReadOnly={readOnly}>
              Đăng kí để nhận thông tin mới nhất
            </VkxCheckbox>
          </div>
        </VKXCard>

        <VKXCard className="w-full">
          <h3 className="text-md font-semibold mb-2">Danh sách sản phẩm</h3>
          <Divider className="mb-5" />
          <Table aria-label="Product list table">
            <TableHeader>
              <TableColumn>Tên</TableColumn>
              <TableColumn>Ngày nhập</TableColumn>
              <TableColumn>Trạng thái</TableColumn>
              <TableColumn>Giá (VNĐ)</TableColumn>
              <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
              {products.map((prod, index) => (
                <TableRow key={prod.id}>
                  <TableCell>
                    <VkxInput
                      aria-label={`Product name ${index}`}
                      isReadOnly={readOnly}
                      name={`products.${index}.name`}
                      type="text"
                    />
                  </TableCell>
                  <TableCell>
                    <VkxDatePicker
                      aria-label={`Product import date ${index}`}
                      isReadOnly={readOnly}
                      minValue={parseDate("1945-01-01")}
                    />
                  </TableCell>
                  <TableCell className="w-40">
                    <VkxSelect
                      aria-label={`Product status ${index}`}
                      isDisabled={readOnly}
                      name={`products.${index}.status`}
                      selectItems={[
                        { key: "1", children: "Còn hàng" },
                        { key: "2", children: "Sắp hết hàng" },
                        { key: "3", children: "Hết hàng" },
                      ]}
                    />
                  </TableCell>
                  <TableCell>
                    <VkxNumberInput
                      aria-label={`Product price ${index}`}
                      isReadOnly={readOnly}
                      maxValue={1000000000}
                      minValue={0}
                    />
                  </TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <VkxButton color="warning" isDisabled={!readOnly}>
                        Sửa
                      </VkxButton>
                      <VkxButton color="danger" isDisabled={!readOnly}>
                        Xoá
                      </VkxButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </VKXCard>
      </VkxForm>
    </>
  );
}
