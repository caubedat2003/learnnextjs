"use client";

import VKXAlert from "@/components/vkx-alert/vkx-alert";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  BellAlertIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

export default function AlertPage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Alert Examples</h1>

      {/* Basic Alert */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Basic Alert
        </h2>
        <VKXAlert
          title="Default Alert"
          description="This is a basic alert with default settings"
        />
      </section>

      {/* Color Variants */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Colors</h2>
        <div className="flex flex-col gap-4">
          <VKXAlert
            color="primary"
            title="Primary Alert"
            icon={<InformationCircleIcon className="w-5 h-5" />}
          />
          <VKXAlert
            color="success"
            title="Success Alert"
            icon={<CheckCircleIcon className="w-5 h-5" />}
          />
          <VKXAlert
            color="warning"
            title="Warning Alert"
            icon={<ExclamationTriangleIcon className="w-5 h-5" />}
          />
          <VKXAlert
            color="danger"
            title="Danger Alert"
            icon={<XCircleIcon className="w-5 h-5" />}
          />
        </div>
      </section>

      {/* Variant Styles */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Variants</h2>
        <div className="flex flex-col gap-4">
          <VKXAlert variant="solid" color="success" title="Solid Alert" />
          <VKXAlert variant="bordered" color="warning" title="Bordered Alert" />
          <VKXAlert variant="faded" color="danger" title="Faded Alert" />
        </div>
      </section>

      {/* Radius Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Border Radius
        </h2>
        <div className="flex flex-col gap-4">
          <VKXAlert radius="none" title="No Radius" />
          <VKXAlert radius="sm" title="Small Radius" />
          <VKXAlert radius="lg" title="Large Radius" />
          <VKXAlert radius="full" title="Full Radius" />
        </div>
      </section>

      {/* Closable Alert */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Closable Alert
        </h2>
        <VKXAlert
          isClosable
          color="warning"
          title="Important Notice"
          description="This alert can be closed"
          icon={<BellAlertIcon className="w-5 h-5" />}
          onClose={() => console.log("Alert closed")}
        />
      </section>

      {/* Custom Content */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Custom Content
        </h2>
        <VKXAlert
          color="secondary"
          startContent={<ShieldCheckIcon className="w-6 h-6 mr-2" />}
          endContent={
            <button className="px-3 py-1 text-sm bg-blue-100 rounded-lg">
              Action
            </button>
          }
          title="Security Alert"
          description="Custom content on both sides"
        />
      </section>

      {/* Controlled Visibility */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Controlled Visibility
        </h2>
        {isVisible && (
          <VKXAlert
            isClosable
            color="danger"
            title="Dismissible Alert"
            icon={<XCircleIcon className="w-5 h-5" />}
            onClose={() => setIsVisible(false)}
          />
        )}
      </section>

      {/* Advanced Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Combined Props
        </h2>
        <VKXAlert
          variant="bordered"
          color="danger"
          radius="lg"
          icon={<XCircleIcon className="w-6 h-6" />}
          title="Critical Error"
          description="Something went wrong. Please try again later."
          isClosable
          endContent={
            <div className="flex gap-2 ml-4">
              <button className="px-3 py-1 text-sm rounded-lg bg-red-50">
                Retry
              </button>
              <button className="px-3 py-1 text-sm rounded-lg bg-gray-100">
                Cancel
              </button>
            </div>
          }
        />
      </section>
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">API(Props)</h2>
        <Table className="mb-10">
          <TableHeader>
            <TableColumn>Prop</TableColumn>
            <TableColumn>Kiểu</TableColumn>
            <TableColumn>Mặc định</TableColumn>
            <TableColumn>Mô tả</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>title</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Tiêu đề chính của alert</TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>icon</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Icon hiển thị bên trái (thường dùng icon từ thư viện bên ngoài)
              </TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>description</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung mô tả chi tiết</TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>color</TableCell>
              <TableCell>
                &quot;default&quot; | &quot;primary&quot; |
                &quot;secondary&quot; | &quot;success&quot; |
                &quot;warning&quot; | &quot;danger&quot;
              </TableCell>
              <TableCell>&quot;default&quot;</TableCell>
              <TableCell>Màu sắc chủ đạo của alert</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell>variant</TableCell>
              <TableCell>
                &quot;solid&quot; | &quot;bordered&quot; | &quot;flat&quot; |
                &quot;faded&quot;
              </TableCell>
              <TableCell>&quot;flat&quot;</TableCell>
              <TableCell>Kiểu hiển thị của alert</TableCell>
            </TableRow>

            <TableRow key="6">
              <TableCell>radius</TableCell>
              <TableCell>
                &quot;none&quot; | &quot;sm&quot; | &quot;md&quot; |
                &quot;lg&quot; | &quot;full&quot;
              </TableCell>
              <TableCell>&quot;md&quot;</TableCell>
              <TableCell>Độ bo góc viền</TableCell>
            </TableRow>

            <TableRow key="7">
              <TableCell>startContent</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Nội dung tùy chỉnh bên trái (override icon mặc định)
              </TableCell>
            </TableRow>

            <TableRow key="8">
              <TableCell>endContent</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung tùy chỉnh bên phải</TableCell>
            </TableRow>

            <TableRow key="9">
              <TableCell>isVisible</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Điều khiển hiển thị alert (controlled component)
              </TableCell>
            </TableRow>

            <TableRow key="10">
              <TableCell>isClosable</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Hiển thị nút đóng</TableCell>
            </TableRow>

            <TableRow key="11">
              <TableCell>hideIcon</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Ẩn icon mặc định</TableCell>
            </TableRow>

            <TableRow key="12">
              <TableCell>hideIconWrapper</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Ẩn cả khung chứa icon</TableCell>
            </TableRow>

            <TableRow key="13">
              <TableCell>onClose</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi click nút đóng</TableCell>
            </TableRow>

            <TableRow key="14">
              <TableCell>onVisibleChange</TableCell>
              <TableCell>(isVisible: boolean) =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi trạng thái hiển thị thay đổi</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
