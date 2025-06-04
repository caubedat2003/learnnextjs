"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, SubmitHandler, useWatch } from "react-hook-form";
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
} from "@heroui/react";
import { CalendarDate, parseDate, today } from "@internationalized/date";

import VkxButton from "@/components/vkx-button/vkx-button";
import { VKXCard } from "@/components/vkx-card/vkx-card";
import VkxCheckbox from "@/components/vkx-checkbox/vkx-checkbox";
import VkxCheckboxGroup from "@/components/vkx-checkbox/vkx-checkbox-group";
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

import { FormDataType, Product } from "./types";
import { VkxModal } from "@/components/vkx-modal/vkx-modal";

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
  const [readOnly, setReadOnly] = React.useState<boolean>(true);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<Product | null>(null);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  // Chuyển products.importDate thành string "YYYY-MM-DD" để dùng dễ với RHF
  const productsDefault = fakeData.products.map((p) => ({
    id: p.id,
    name: p.name,
    importDate: p.importDate,
    status: p.status,
    price: p.price,
  }));

  // Khởi tạo useForm
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormDataType>({
    defaultValues: {
      ...fakeData,
      products: productsDefault,
    },
    mode: "onTouched",
  });

  const products = useWatch({ control, name: "products" });

  const onNewTableForm = () => {
    setIsEditMode(false);
    setModalData({
      id: `prod-${Date.now()}`,
      name: "",
      importDate: new Date(),
      status: "1",
      price: 0,
    });
    setIsOpenModal(true);
  };

  const onEditTableForm = (prodId: any) => {
    const currentProducts = getValues("products");
    const index = currentProducts.findIndex((p) => p.id === prodId);

    if (index !== -1) {
      setIsEditMode(true);
      setModalData(getValues(`products.${index}`));
      setIsOpenModal(true);
    }
  };

  const onRemoveTableForm = (prodId: any) => {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không???")) {
      const currentProducts = getValues("products");
      const updatedProducts = currentProducts.filter((p) => p.id !== prodId);

      setValue("products", updatedProducts);
    }
  };

  const handleSave = () => {
    if (modalData) {
      const currentProducts = getValues("products");

      if (isEditMode) {
        // Chế độ chỉnh sửa - cập nhật sản phẩm hiện có
        const index = currentProducts.findIndex((p) => p.id === modalData.id);

        if (index !== -1) {
          setValue(`products.${index}`, {
            id: modalData.id,
            name: modalData.name,
            importDate: modalData.importDate,
            status: modalData.status,
            price: modalData.price,
          });
        }
      } else {
        // Chế độ thêm mới - thêm sản phẩm vào cuối danh sách
        const newProduct = {
          id: modalData.id,
          name: modalData.name,
          importDate: modalData.importDate,
          status: modalData.status,
          price: modalData.price,
        };

        setValue("products", [...currentProducts, newProduct]);
      }

      console.log("Updated data:", getValues());
      onCloseModal();
    }
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
    setModalData(null);
    setIsEditMode(false);
  };

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log("Dữ liệu form gửi lên:", data);
    // Ở đây bạn có thể gọi API để update
    setReadOnly(true);
  };

  const labelPlacement = "outside";

  return (
    <>
      <nav className="w-full flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold mb-0">Thông tin người dùng</h2>
        {readOnly ? (
          <ButtonGroup>
            <VkxButton color="warning" type="button" onClick={onNewTableForm}>
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
      <VkxForm
        className="w-full"
        id="formUserInfo"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Thông tin cơ bản */}
        <VKXCard className="w-full mb-6">
          <div className="w-full">
            <h3 className="text-md font-semibold mb-2">Thông tin cơ bản</h3>
            <Divider className="mb-5" />
            <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
              <VkxInput
                aria-label="Enter username"
                {...register("info.username", {
                  required: "Không được để trống",
                })}
                isRequired
                errorMessage={errors.info?.username?.message}
                isInvalid={!!errors.info?.username}
                isReadOnly={readOnly}
                label="Tên đăng nhập"
                labelPlacement={labelPlacement}
                name="info.username"
                placeholder="Nhập tên đăng nhập"
                type="text"
              />
              <VkxPasswordInput
                aria-label="Enter password"
                {...register("info.password")}
                isRequired
                errorMessage={errors.info?.password?.message}
                isInvalid={!!errors.info?.password}
                isReadOnly={readOnly}
                label="Mật khẩu"
                labelPlacement={labelPlacement}
                name="info.password"
                placeholder="Nhập mật khẩu mới (để trống nếu không đổi)"
              />
              <VkxPhoneInput
                aria-label="Enter phone number"
                {...register("info.phone", {
                  required: "SĐT không được để trống",
                  pattern: {
                    value: /^\+?\d{9,15}$/,
                    message: "Số điện thoại không hợp lệ",
                  },
                })}
                isRequired
                errorMessage={errors.info?.phone?.message}
                isInvalid={!!errors.info?.phone}
                isReadOnly={readOnly}
                label="Số điện thoại"
                labelPlacement={labelPlacement}
                name="info.phone"
                placeholder="Nhập số điện thoại của bạn"
              />
              <VkxInput
                aria-label="Enter email"
                {...register("info.email", {
                  required: "Email không được để trống",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
                errorMessage={errors.info?.email?.message}
                isInvalid={!!errors.info?.email}
                isReadOnly={readOnly}
                label="Email"
                labelPlacement={labelPlacement}
                name="info.email"
                placeholder="Nhập email của bạn"
                type="email"
              />

              {/* Ngày sinh dùng Controller + VkxDatePicker */}
              <Controller
                control={control}
                name="info.birthDate"
                render={({ field }) => {
                  const dateObj = field.value ? parseDate(field.value) : null;

                  return (
                    <VkxDatePicker
                      aria-label="Select your desired birthDate"
                      errorMessage={errors.info?.birthDate?.message}
                      isInvalid={!!errors.info?.birthDate}
                      isReadOnly={readOnly}
                      label="Ngày sinh"
                      labelPlacement={labelPlacement}
                      minValue={new CalendarDate(1900, 1, 1)}
                      value={dateObj}
                      onChange={(date) => field.onChange(date?.toString())}
                    />
                  );
                }}
                rules={{ required: "Ngày sinh là bắt buộc" }}
              />

              {/* Giới tính */}
              <Controller
                control={control}
                name="info.gender"
                render={({ field }) => (
                  <VkxRadioGroup
                    {...field}
                    errorMessage={errors.info?.gender?.message}
                    isInvalid={!!errors.info?.gender}
                    isReadOnly={readOnly}
                    label="Giới tính"
                    name="info.gender"
                    value={field.value}
                    onChange={field.onChange}
                  >
                    <VkxRadio value="Nam">Nam</VkxRadio>
                    <VkxRadio value="Nữ">Nữ</VkxRadio>
                    <VkxRadio value="Khác">Khác</VkxRadio>
                  </VkxRadioGroup>
                )}
                rules={{ required: "Hãy chọn giới tính" }}
              />
            </div>
          </div>
        </VKXCard>

        {/* Thông tin khác */}
        <VKXCard className="w-full mb-6">
          <h3 className="text-md font-semibold mb-2">Khác</h3>
          <Divider className="mb-5" />
          <div className="grid gap-x-2 gap-y-3 grid-cols-1 md:grid-cols-3 mb-10">
            <VkxInput
              {...register("orther.bio")}
              errorMessage={errors.orther?.bio?.message}
              isInvalid={!!errors.orther?.bio}
              isReadOnly={readOnly}
              label="Bio"
              labelPlacement={labelPlacement}
              name="orther.bio"
              placeholder="Nhập url bio của bạn"
              type="url"
            />

            {/* Example Date */}
            <Controller
              control={control}
              name="orther.exampleDate"
              render={({ field }) => {
                const dateObj = field.value ? parseDate(field.value) : null;

                return (
                  <VkxDatePicker
                    aria-label="Select your desired exampleDate"
                    errorMessage={errors.orther?.exampleDate?.message}
                    isInvalid={!!errors.orther?.exampleDate}
                    isReadOnly={readOnly}
                    label="Example"
                    labelPlacement={labelPlacement}
                    minValue={new CalendarDate(2025, 5, 1)}
                    placeholder={today("UTC")}
                    value={dateObj}
                    onChange={(date) => field.onChange(date?.toString())}
                  />
                );
              }}
              rules={{ required: "Vui lòng chọn ngày" }}
            />

            <Controller
              control={control}
              name="orther.weight"
              render={({ field }) => (
                <VkxNumberInput
                  {...field}
                  errorMessage={errors.orther?.weight?.message}
                  isInvalid={!!errors.orther?.weight}
                  isReadOnly={readOnly}
                  label="Cân nặng"
                  labelPlacement={labelPlacement}
                  name="orther.weight"
                  placeholder="Nhập số cân của bạn"
                  value={field.value}
                  onValueChange={(value: any) => field.onChange(value)}
                />
              )}
              rules={{
                min: { value: 0, message: "Cân nặng không hợp lệ" },
                required: "Cân nặng là bắt buộc",
              }}
            />

            {/* Tháng */}
            <Controller
              control={control}
              name="orther.month"
              render={({ field }) => (
                <VkxMonthInput
                  {...field}
                  description="Chọn tháng"
                  errorMessage={errors.orther?.month?.message}
                  isDisabled={readOnly}
                  isInvalid={!!errors.orther?.month}
                  label="Tháng"
                  labelPlacement={labelPlacement}
                  onChange={field.onChange}
                />
              )}
            />

            {/* Năm */}
            <Controller
              control={control}
              name="orther.year"
              render={({ field }) => (
                <VkxYearInput
                  {...field}
                  description="Chọn năm"
                  errorMessage={errors.orther?.year?.message}
                  isDisabled={readOnly}
                  isInvalid={!!errors.orther?.year}
                  label="Năm"
                  labelPlacement={labelPlacement}
                  onChange={field.onChange}
                />
              )}
            />

            <Controller
              control={control}
              name="orther.description"
              render={({ field }) => (
                <VkxTextArea
                  {...field}
                  errorMessage={errors.orther?.description?.message}
                  isInvalid={!!errors.orther?.description}
                  isReadOnly={readOnly}
                  label="Mô tả"
                  labelPlacement={labelPlacement}
                  maxRows={6}
                  minRows={2}
                  placeholder="Nhập mô tả..."
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </VKXCard>

        {/* Điều khoản */}
        <VKXCard className="w-full mb-6">
          <h3 className="text-md font-semibold mb-2">Điều khoản</h3>
          <Divider className="mb-5" />
          <div className="grid gap-x-2 gap-y-3 grid-cols-1">
            <Controller
              control={control}
              name="orther.groupOptions"
              render={({ field }) => (
                <VkxCheckboxGroup
                  {...field}
                  errorMessage={errors.orther?.groupOptions?.message}
                  isInvalid={!!errors.orther?.groupOptions}
                  isReadOnly={readOnly}
                  label="Chọn các mục phù hợp"
                  name="orther.groupOptions"
                  value={field.value}
                  onChange={field.onChange}
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
              )}
            />
            <Controller
              control={control}
              name="orther.emailNotifications"
              render={({ field }) => (
                <VkxCheckbox
                  checked={field.value}
                  isReadOnly={readOnly}
                  name={field.name}
                  onBlur={field.onBlur}
                  onChange={field.onChange}
                >
                  Đăng kí để nhận thông tin mới nhất
                </VkxCheckbox>
              )}
            />
          </div>
        </VKXCard>

        {/* Danh sách sản phẩm */}
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
                      {...register(`products.${index}.name` as const, {
                        required: "Tên sản phẩm là bắt buộc",
                      })}
                      errorMessage={errors.products?.[index]?.name?.message}
                      isInvalid={!!errors.products?.[index]?.name}
                      isReadOnly={readOnly}
                      name={`products.${index}.name`}
                      type="text"
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      control={control}
                      name={`products.${index}.importDate` as const}
                      render={({ field }) => {
                        const dateObj =
                          typeof field.value === "string"
                            ? parseDate(field.value)
                            : parseDate(
                                field.value.toISOString().split("T")[0]
                              );

                        return (
                          <VkxDatePicker
                            aria-label={`Product import date ${index}`}
                            errorMessage={
                              errors.products?.[index]?.importDate?.message
                            }
                            isInvalid={!!errors.products?.[index]?.importDate}
                            isReadOnly={readOnly}
                            minValue={parseDate("1945-01-01")}
                            value={dateObj}
                            onChange={(date) =>
                              field.onChange(date?.toString())
                            }
                          />
                        );
                      }}
                      rules={{ required: "Chọn ngày nhập" }}
                    />
                  </TableCell>
                  <TableCell className="w-40">
                    <Controller
                      control={control}
                      name={`products.${index}.status` as const}
                      render={({ field }) => (
                        <VkxSelect
                          aria-label={`Product status ${index}`}
                          {...field}
                          isDisabled={readOnly}
                          name={`products.${index}.status`}
                          selectItems={[
                            { key: "1", children: "Còn hàng" },
                            { key: "2", children: "Sắp hết hàng" },
                            { key: "3", children: "Hết hàng" },
                          ]}
                          selectedKeys={new Set(field.value)}
                          onChange={field.onChange}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <Controller
                      control={control}
                      name={`products.${index}.price`}
                      render={({ field, fieldState }) => (
                        <VkxNumberInput
                          aria-label={`Product price ${index}`}
                          errorMessage={fieldState.error?.message}
                          isInvalid={!!fieldState.error}
                          isReadOnly={readOnly}
                          maxValue={1000000000}
                          minValue={0}
                          name={field.name}
                          value={field.value}
                          onBlur={field.onBlur}
                          onChange={field.onChange} // onChange sẽ nhận số, đúng định dạng
                        />
                      )}
                      rules={{
                        min: {
                          value: 0,
                          message: "Giá phải >= 0",
                        },
                        max: {
                          value: 1000000000,
                          message: "Giá phải <= 1.000.000.000",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <ButtonGroup>
                      <VkxButton
                        color="warning"
                        isDisabled={!readOnly}
                        onClick={() => onEditTableForm(prod.id)}
                      >
                        Sửa
                      </VkxButton>
                      <VkxButton
                        color="danger"
                        isDisabled={!readOnly}
                        onClick={() => onRemoveTableForm(prod.id)}
                      >
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
            <VkxButton color="primary" onPress={handleSave}>
              Lưu
            </VkxButton>
          </>
        }
        isDismissable={false}
        isOpen={isOpenModal}
        placement="top-center"
        scrollBehavior="inside"
        size="md"
        title={isEditMode ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
        onClose={onCloseModal}
      >
        {/* Input Tên sản phẩm */}
        <VkxInput
          label="Tên"
          labelPlacement="inside"
          name="name"
          type="text"
          value={modalData?.name || ""} // Đổ dữ liệu vào đây
          onChange={(e) =>
            setModalData((prev) =>
              prev ? { ...prev, name: e.target.value } : null
            )
          }
        />

        {/* DatePicker Ngày nhập */}
        <VkxDatePicker
          label="Ngày nhập"
          labelPlacement="inside"
          minValue={parseDate("1945-01-01")}
          name="date"
          value={
            modalData?.importDate
              ? parseDate(modalData.importDate.toISOString().split("T")[0])
              : null
          }
          onChange={(dateValue) =>
            setModalData((prev) =>
              prev
                ? {
                    ...prev,
                    importDate: dateValue
                      ? new Date(dateValue.toString())
                      : prev.importDate, // or handle as needed
                  }
                : null
            )
          }
        />

        {/* Select Trạng thái */}
        <VkxSelect
          label="Trạng thái"
          labelPlacement="inside"
          name="status"
          selectItems={[
            { key: "1", children: "Còn hàng" },
            { key: "2", children: "Sắp hết hàng" },
            { key: "3", children: "Hết hàng" },
          ]}
          selectedKeys={new Set(modalData?.status)} // Đổ dữ liệu trạng thái
          onChange={(e) =>
            setModalData((prev) =>
              prev ? { ...prev, status: e.target.value } : null
            )
          }
        />

        {/* NumberInput Giá sản phẩm */}
        <VkxNumberInput
          label="Giá(VND)"
          labelPlacement="inside"
          maxValue={1000000000}
          minValue={0}
          name="price"
          value={modalData?.price || 0} // Đổ dữ liệu giá
          onChange={(eOrValue) =>
            setModalData((prev) =>
              prev
                ? {
                    ...prev,
                    price:
                      typeof eOrValue === "number"
                        ? eOrValue
                        : Number(eOrValue.target.value),
                  }
                : null
            )
          }
        />
      </VkxModal>
    </>
  );
}
