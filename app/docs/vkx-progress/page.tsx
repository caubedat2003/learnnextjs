"use client";

import VKXProgress from "@/components/vkx-progress/vkx-progress";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

export default function ProgressPage() {
  return (
    <div className="min-h-screen">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Progress Examples
      </h1>

      {/* Size Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Sizes</h2>
        <div className="flex flex-col gap-4">
          <VKXProgress size="sm" value={30} />
          <VKXProgress size="md" value={50} />
          <VKXProgress size="lg" value={70} />
        </div>
      </section>

      {/* Color Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Colors</h2>
        <div className="flex flex-col gap-4">
          <VKXProgress color="default" value={20} />
          <VKXProgress color="primary" value={40} />
          <VKXProgress color="secondary" value={60} />
          <VKXProgress color="success" value={80} />
          <VKXProgress color="warning" value={90} />
          <VKXProgress color="danger" value={100} />
        </div>
      </section>

      {/* Radius Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Border Radius
        </h2>
        <div className="flex flex-col gap-4">
          <VKXProgress radius="none" value={30} />
          <VKXProgress radius="sm" value={50} />
          <VKXProgress radius="md" value={70} />
          <VKXProgress radius="lg" value={90} />
          <VKXProgress radius="full" value={100} />
        </div>
      </section>

      {/* Label & Value Label */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Labels</h2>
        <div className="flex flex-col gap-4">
          <VKXProgress
            label="Upload progress"
            value={45}
            valueLabel="45/100 MB"
          />
          <VKXProgress
            label={<span className="text-red-500">Critical Update</span>}
            value={75}
            valueLabel={<span className="font-bold">75%</span>}
          />
        </div>
      </section>

      {/* Min/Max Values */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Custom Range
        </h2>
        <div className="flex flex-col gap-4">
          <VKXProgress
            minValue={20}
            maxValue={80}
            value={50}
            label="Temperature (20-80°C)"
          />
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">States</h2>
        <div className="grid grid-cols-2 gap-4">
          <VKXProgress
            isIndeterminate
            label="Processing..."
            color="secondary"
          />
          <VKXProgress isStriped value={65} label="Striped Progress" />
          <VKXProgress isDisabled value={40} label="Disabled State" />
          <VKXProgress disableAnimation value={85} label="Without Animation" />
        </div>
      </section>

      {/* Combined Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Combined</h2>
        <VKXProgress
          size="lg"
          color="success"
          radius="md"
          label="System Installation"
          value={88}
          valueLabel="Almost done!"
          isStriped
          showValueLabel={false}
        />
      </section>
      <section className="mb-12">
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
              <TableCell>Nhãn chính hiển thị phía trên progress bar</TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>size</TableCell>
              <TableCell>
                &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
              </TableCell>
              <TableCell>&quot;md&quot;</TableCell>
              <TableCell>Chiều cao của progress bar</TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>color</TableCell>
              <TableCell>
                &quot;default&quot; | &quot;primary&quot; |
                &quot;secondary&quot; | &quot;success&quot; |
                &quot;warning&quot; | &quot;danger&quot;
              </TableCell>
              <TableCell>&quot;primary&quot;</TableCell>
              <TableCell>Màu sắc chính của progress bar</TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>radius</TableCell>
              <TableCell>
                &quot;none&quot; | &quot;sm&quot; | &quot;md&quot; |
                &quot;lg&quot; | &quot;full&quot;
              </TableCell>
              <TableCell>&quot;full&quot;</TableCell>
              <TableCell>Độ bo góc của progress bar</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell>value</TableCell>
              <TableCell>number | undefined</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Giá trị hiện tại (bắt buộc trừ khi dùng chế độ indeterminate)
              </TableCell>
            </TableRow>

            <TableRow key="6">
              <TableCell>valueLabel</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung hiển thị thay thế giá trị mặc định</TableCell>
            </TableRow>

            <TableRow key="7">
              <TableCell>minValue</TableCell>
              <TableCell>number</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Giá trị tối thiểu của phạm vi</TableCell>
            </TableRow>

            <TableRow key="8">
              <TableCell>maxValue</TableCell>
              <TableCell>number</TableCell>
              <TableCell>100</TableCell>
              <TableCell>Giá trị tối đa của phạm vi</TableCell>
            </TableRow>

            <TableRow key="9">
              <TableCell>isIndeterminate</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>
                Chế độ không xác định tiến trình (hoạt ảnh loading liên tục)
              </TableCell>
            </TableRow>

            <TableRow key="10">
              <TableCell>isStriped</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Hiển thị hiệu ứng sọc trên progress bar</TableCell>
            </TableRow>

            <TableRow key="11">
              <TableCell>showValueLabel</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>true</TableCell>
              <TableCell>Hiển thị nhãn giá trị tự động</TableCell>
            </TableRow>

            <TableRow key="12">
              <TableCell>isDisabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Vô hiệu hóa tương tác và làm mờ component</TableCell>
            </TableRow>

            <TableRow key="13">
              <TableCell>disableAnimation</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Tắt tất cả hiệu ứng chuyển động</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
