"use client";

import VKXCircularProgress from "@/components/vkx-circular-progress/vkx-circular-progress";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

export default function Page() {
  return (
    <div className="min-h-screen space-y-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Circular Progress Examples</h1>
      {/* Label Example */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Label</h2>
        <VKXCircularProgress label="Processing..." value={75} />
      </div>

      {/* Size Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Sizes</h2>
        <div className="flex gap-4">
          <VKXCircularProgress size="sm" value={30} />
          <VKXCircularProgress size="md" value={50} />
          <VKXCircularProgress size="lg" value={70} />
        </div>
      </div>

      {/* Color Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Colors</h2>
        <div className="flex flex-wrap gap-4">
          <VKXCircularProgress color="default" value={20} />
          <VKXCircularProgress color="primary" value={40} />
          <VKXCircularProgress color="secondary" value={60} />
          <VKXCircularProgress color="success" value={80} />
          <VKXCircularProgress color="warning" value={90} />
          <VKXCircularProgress color="danger" value={100} />
        </div>
      </div>

      {/* Value Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Value</h2>
        <VKXCircularProgress value={45} />
        <VKXCircularProgress value={75} color="success" />
      </div>

      {/* Custom Value Range */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Custom Value Range</h2>
        <VKXCircularProgress
          minValue={20}
          maxValue={80}
          value={50}
          color="warning"
        />
      </div>

      {/* Indeterminate State */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Indeterminate</h2>
        <VKXCircularProgress isIndeterminate />
      </div>

      {/* Hidden Value Label */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Hidden Value Label</h2>
        <VKXCircularProgress showValueLabel={false} value={65} />
      </div>

      {/* Custom Stroke Width */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Stroke Width</h2>
        <VKXCircularProgress strokeWidth={4} value={85} color="secondary" />
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Disabled</h2>
        <VKXCircularProgress isDisabled value={50} />
      </div>

      {/* Disabled Animation */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Disabled Animation</h2>
        <VKXCircularProgress disableAnimation value={75} color="danger" />
      </div>

      {/* Custom Value Label */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Custom Value Label</h2>
        <VKXCircularProgress
          value={25}
          valueLabel={<span className="text-sm text-gray-600">25/100</span>}
        />
      </div>
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
              <TableCell>label</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Nội dung hiển thị phía dưới thanh tiến trình
              </TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>size</TableCell>
              <TableCell>sm | md | lg</TableCell>
              <TableCell>md</TableCell>
              <TableCell>Kích thước component (nhỏ/trung bình/lớn)</TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>color</TableCell>
              <TableCell>
                default | primary | secondary | success | warning | danger
              </TableCell>
              <TableCell>primary</TableCell>
              <TableCell>Màu sắc của thanh tiến trình</TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>value</TableCell>
              <TableCell>number</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Giá trị tiến trình hiện tại (0-100)</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell>valueLabel</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Custom content hiển thị giá trị</TableCell>
            </TableRow>

            <TableRow key="6">
              <TableCell>minValue</TableCell>
              <TableCell>number</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Giá trị tối thiểu của tiến trình</TableCell>
            </TableRow>

            <TableRow key="7">
              <TableCell>maxValue</TableCell>
              <TableCell>number</TableCell>
              <TableCell>100</TableCell>
              <TableCell>Giá trị tối đa của tiến trình</TableCell>
            </TableRow>

            <TableRow key="8">
              <TableCell>isIndeterminate</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Chế độ loading không xác định</TableCell>
            </TableRow>

            <TableRow key="9">
              <TableCell>showValueLabel</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>true</TableCell>
              <TableCell>Hiển thị nhãn giá trị mặc định</TableCell>
            </TableRow>

            <TableRow key="10">
              <TableCell>strokeWidth</TableCell>
              <TableCell>number</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Độ dày của thanh tiến trình</TableCell>
            </TableRow>

            <TableRow key="11">
              <TableCell>isDisabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Vô hiệu hóa component</TableCell>
            </TableRow>

            <TableRow key="12">
              <TableCell>disableAnimation</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Tắt tất cả hiệu ứng animation</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
