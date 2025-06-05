"use client";

import {
  CalendarDate,
  DateValue,
  parseDate,
  today,
} from "@internationalized/date";
import { useRouter } from "next/navigation";
import React from "react";
import {
  ButtonGroup,
  Checkbox,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@heroui/react";

import VkxButton from "@/components/vkx-button/vkx-button";
import { VKXCard } from "@/components/vkx-card/vkx-card";
import VkxCheckbox from "@/components/vkx-checkbox/vkx-checkbox";
import VkxCheckboxGroup from "@/components/vkx-checkbox/vkx-checkbox-group";
import VkxDateInput from "@/components/vkx-date-input/vkx-date-input";
import { VkxDatePicker } from "@/components/vkx-date-picker/vkx-date-picker";
import { VkxForm } from "@/components/vkx-form/vkx-form";
import { VkxInput } from "@/components/vkx-input";
import { VkxMonthInput } from "@/components/vkx-month-input/vkx-month-input";
import { VkxNumberInput } from "@/components/vkx-number-input/vkx-number-input";
import { VkxPasswordInput } from "@/components/vkx-password-input/vkx-password-input";
import VkxPhoneInput from "@/components/vkx-phone-input/vkx-phone-input";
import { VkxRadio, VkxRadioGroup } from "@/components/vkx-radio/vkx-radio";
import { VkxSelect } from "@/components/vkx-select/vkx-select";
import { VkxTextArea } from "@/components/vkx-text-area/vkx-text-area";
import { VkxYearInput } from "@/components/vkx-year-input/vkx-year-input";
import { VkxModal } from "@/components/vkx-modal/vkx-modal";
import { VkxLink } from "@/components/vkx-link/vkx-link";
import { FormDataType, formMapper, Product } from "./types";

const fakeData: FormDataType = {
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

const optionsGroupCheckbox = [
  { label: "Lựa chọn A", value: "a" },
  { label: "Lựa chọn B", value: "b" },
  { label: "Lựa chọn C", value: "c" },
];

export default function Page() {
  const router = useRouter();
  const [readOnly, setReadOnly] = React.useState(true);
  const [groupChecked, setGroupChecked] = React.useState<string[]>(
    fakeData.orther.groupOptions
  );
  const [products, setProducts] = React.useState<Product[]>(fakeData.products);
  const [formData, setFormData] = React.useState<FormDataType>(fakeData);
  const [formModal, setFormModal] = React.useState({});
  const [isModal, setIsModal] = React.useState(false);

  const labelPlacement = "outside";
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onOpenChange: onFormOpenChange,
    onClose: onFormClose,
  } = useDisclosure();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".") as [keyof FormDataType, string];

    if (section && field) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: value,
        },
      }));
    }
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split(".") as [keyof FormDataType, string];

    if (section && field) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: value.toString(),
        },
      }));
    }
  };
  const handleDateChange = (name: any, date: any) => {
    const [section, field] = name.split(".") as [keyof FormDataType, string];

    if (section && field) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [field]: date.toString(),
        },
      }));
    }
  };
  const handleInputChangeProd = (
    index: number,
    field: keyof Product,
    value: any
  ) => {
    const updated = [...products];

    updated[index] = { ...updated[index], [field]: value };
    setProducts(updated);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //code
    const mappingObj = formMapper(data);

    console.log(mappingObj);
    setReadOnly(true);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  const handleEdit = () => {
    setIsModal(true);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold mb-0">Thông tin người dùng</h2>
        {readOnly ? (
          <ButtonGroup>
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
            <VkxButton color="primary" type="submit" form="formUserInfo">
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
      <VkxForm className="w-full" id="formUserInfo" onSubmit={handleSubmit}>
        <VKXCard className="w-full">
          <div className="w-full">
            <h3 className="text-md font-semibold mb-2">Thông tin cơ bản</h3>
            <Divider className="mb-5" />
            <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
              <VkxInput
                isRequired
                isReadOnly={readOnly}
                label="Tên đăng nhập"
                labelPlacement={labelPlacement}
                name="info.username"
                placeholder="Nhập tên đăng nhập"
                type="text"
                validate={(value) => {
                  if (value.length < 3) {
                    return "Tên đăng nhập ít nhất 6 kí tự";
                  }

                  return null;
                }}
                value={formData.info.username}
                onChange={handleInputChange}
              />
              <VkxPasswordInput
                isRequired
                isReadOnly={readOnly}
                label="Mật khẩu"
                labelPlacement={labelPlacement}
                name="info.password"
                placeholder="Nhập mật khẩu mới (để trống nếu không đổi)"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Mật khẩu ít nhất 6 kí tự";
                  }

                  return null;
                }}
                value={formData.info.password}
                onChange={handleInputChange}
              />
              <VkxPhoneInput
                isRequired
                isReadOnly={readOnly}
                label="Số điện thoại"
                labelPlacement={labelPlacement}
                name="info.phone"
                placeholder="Nhập số điện thoại của bạn"
                value={formData.info.phone}
                onChange={handleInputChange}
                validate={(value) => {
                  if (
                    (value.match(/^\+[1-9]{1,3}[0-9]{4,14}$/) || []).length < 1
                  ) {
                    return "Số điện thoại không hợp lệ";
                  }

                  return null;
                }}
              />
              <VkxInput
                isRequired
                label="Email"
                labelPlacement={labelPlacement}
                name="info.email"
                placeholder="Nhập email của bạn"
                isReadOnly={readOnly}
                type="email"
                value={formData.info.email}
                onChange={handleInputChange}
                validate={(value) => {
                  if (
                    (
                      value.match(
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                      ) || []
                    ).length < 1
                  ) {
                    return "Email không hợp lệ";
                  }

                  return null;
                }}
              />
              <VkxDateInput
                isReadOnly={readOnly}
                label="Ngày sinh"
                labelPlacement={labelPlacement}
                name="info.birthDate"
                value={parseDate(formData.info.birthDate)}
              />
              <VkxRadioGroup
                isReadOnly={readOnly}
                label="Giới tính"
                name="info.gender"
                value={formData.info.gender}
                onChange={handleInputChange}
              >
                <VkxRadio value="Nam">Nam</VkxRadio>
                <VkxRadio value="Nữ">Nữ</VkxRadio>
                <VkxRadio value="Khác">Khác</VkxRadio>
              </VkxRadioGroup>
            </div>

            <h3 className="text-md font-semibold mb-2">Khác</h3>
            <Divider className="mb-5" />
            <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
              <VkxInput
                label="Bio"
                labelPlacement={labelPlacement}
                name="orther.bio"
                placeholder="Nhập url bio của bạn"
                isReadOnly={readOnly}
                type="url"
                value={formData.orther.bio}
                onChange={handleInputChange}
                validate={(value) => {
                  if (
                    (value.match(/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/) || [])
                      .length < 1
                  ) {
                    return "Email không hợp lệ";
                  }

                  return null;
                }}
              />
              <VkxDatePicker
                isReadOnly={readOnly}
                label="Example"
                labelPlacement={labelPlacement}
                minValue={new CalendarDate(2025, 5, 1)}
                name="orther.exampleDate"
                placeholder={today("UTC")}
                value={parseDate(formData.orther.exampleDate)}
                onChange={(date) =>
                  handleDateChange("orther.exampleDate", date)
                }
              />
              <VkxNumberInput
                isReadOnly={readOnly}
                label="Cân nặng"
                labelPlacement={labelPlacement}
                name="orther.weight"
                placeholder="Nhập số cân của bạn"
                value={formData.orther.weight}
              />
              <VkxMonthInput
                description="Chọn tháng"
                isDisabled={readOnly}
                label="Tháng"
                labelPlacement={labelPlacement}
                name="orther.month"
                value={formData.orther.month}
              />
              <VkxYearInput
                description="Chọn năm"
                isDisabled={readOnly}
                label="Năm"
                labelPlacement={labelPlacement}
                name="orther.year"
                value={formData.orther.year}
              />
              <VkxTextArea
                label="Mô tả"
                labelPlacement={labelPlacement}
                maxRows={6}
                minRows={2}
                name="orther.description"
                placeholder="Nhập mô tả..."
                isReadOnly={readOnly}
                value={formData.orther.description}
                onChange={handleInputChange}
              />
            </div>

            <h3 className="text-md font-semibold mb-2">Điều khoản</h3>
            <Divider className="mb-5" />
            <div className="grid gap-x-2 gap-y-3 grid-cols-1">
              <VkxCheckboxGroup
                isReadOnly={readOnly}
                label="Chọn các mục phù hợp"
                name="orther.groupOptions"
                value={groupChecked}
                onChange={setGroupChecked}
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
              <p className="mt-2 text-sm text-gray-500">
                Đã chọn:{" "}
                {groupChecked.length > 0
                  ? groupChecked.map((k) => k.toUpperCase()).join(", ")
                  : "Không có"}
              </p>
              <VkxCheckbox
                name="emailNotifications"
                readOnly={readOnly}
                isSelected={formData.orther.emailNotifications}
              >
                Nhận thông báo qua email
              </VkxCheckbox>
            </div>
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
              <TableColumn>Giá(VNĐ)</TableColumn>
              <TableColumn> </TableColumn>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <VkxInput
                      aria-label={`Tên sản phẩm ${product.name}`}
                      readOnly={readOnly}
                      type="text"
                      name={`products[${index}].name`}
                      value={product.name}
                      onChange={(e) =>
                        handleInputChangeProd(index, "name", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <VkxDatePicker
                      aria-label={`Ngày nhập sản phẩm ${product.name}`}
                      isReadOnly={readOnly}
                      minValue={parseDate("1945-01-01")}
                      name={`products[${index}].date`}
                      value={parseDate(
                        product.importDate.toISOString().split("T")[0]
                      )}
                    />
                  </TableCell>
                  <TableCell className="w-40">
                    <VkxSelect
                      aria-label={`Trạng thái sản phẩm ${product.name}`}
                      isDisabled={readOnly}
                      name={`products[${index}].status`}
                      selectItems={[
                        { key: "1", children: "Còn hàng" },
                        { key: "2", children: "Sắp hết hàng" },
                        { key: "3", children: "Hết hàng" },
                      ]}
                      selectedKeys={new Set(product.status)}
                      onSelect={(e) => {
                        console.log(event?.target);
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <VkxNumberInput
                      aria-label={`Giá sản phẩm ${product.name}`}
                      name={`products[${index}].price`}
                      isReadOnly={readOnly}
                      maxValue={1000000000}
                      minValue={0}
                      value={product.price}
                    />
                  </TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <VkxButton
                        color="warning"
                        isDisabled={!readOnly}
                        onPress={handleEdit}
                      >
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
      <VkxModal
        backdrop="blur"
        footer={
          <>
            <VkxButton color="danger" variant="flat" onPress={onCloseModal}>
              Đóng
            </VkxButton>
            <VkxButton color="primary" onPress={onCloseModal}>
              Lưu
            </VkxButton>
          </>
        }
        isOpen={isModal}
        placement="top-center"
        scrollBehavior="inside"
        size="md"
        title="Sửa sản phẩm"
        onClose={onCloseModal}
        onOpenChange={onFormOpenChange}
      >
        <VkxInput
          label="Tên"
          labelPlacement="inside"
          name="name"
          readOnly={readOnly}
          type="text"
        />
        <VkxDatePicker
          label="Ngày nhập"
          labelPlacement="inside"
          isReadOnly={readOnly}
          name="date"
          minValue={parseDate("1945-01-01")}
        />
        <VkxSelect
          label="Trạng thái"
          labelPlacement="inside"
          isDisabled={readOnly}
          name="status"
          selectItems={[
            { key: "1", children: "Còn hàng" },
            { key: "2", children: "Sắp hết hàng" },
            { key: "3", children: "Hết hàng" },
          ]}
        />
        <VkxNumberInput
          label="Giá(VND)"
          labelPlacement="inside"
          isReadOnly={readOnly}
          maxValue={1000000000}
          minValue={0}
          name="price"
        />
      </VkxModal>
    </>
  );
}
