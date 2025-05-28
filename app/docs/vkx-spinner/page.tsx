"use client";

import VKXSpinner from "@/components/vkx-spinner/vkx-spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

export default function SpinnerExamples() {
  return (
    <div className="min-h-screen">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">
        Spinner Examples
      </h1>

      {/* Size Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Sizes</h2>
        <div className="flex gap-6">
          <VKXSpinner size="sm" />
          <VKXSpinner size="md" />
          <VKXSpinner size="lg" />
        </div>
      </section>

      {/* Color Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Colors</h2>
        <div className="flex gap-6">
          <VKXSpinner color="default" />
          <VKXSpinner color="primary" />
          <VKXSpinner color="secondary" />
          <VKXSpinner color="success" />
          <VKXSpinner color="warning" />
          <VKXSpinner color="danger" />
        </div>
      </section>

      {/* Variant Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Variants</h2>
        <div className="flex flex-wrap gap-6">
          <VKXSpinner variant="default" />
          <VKXSpinner variant="simple" />
          <VKXSpinner variant="gradient" />
          <VKXSpinner variant="wave" />
          <VKXSpinner variant="dots" />
          <VKXSpinner variant="spinner" />
        </div>
      </section>

      {/* Label Examples */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Labels</h2>
        <div className="flex flex-col gap-4">
          <VKXSpinner label="Loading..." />
          <VKXSpinner
            label="Processing..."
            color="success"
            labelColor="success"
          />
          <VKXSpinner
            label="Authenticating..."
            color="danger"
            labelColor="danger"
            variant="wave"
          />
        </div>
      </section>

      {/* Combined Example */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">
          Combined Props
        </h2>
        <div className="flex gap-6">
          <VKXSpinner
            size="lg"
            color="warning"
            variant="gradient"
            label="Saving changes..."
            labelColor="warning"
          />
          <VKXSpinner
            size="sm"
            color="secondary"
            variant="dots"
            label="Fetching data..."
            labelColor="secondary"
          />
        </div>
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
              <TableCell>label</TableCell>
              <TableCell>string | undefined</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nhãn văn bản hiển thị cạnh spinner</TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>size</TableCell>
              <TableCell>
                &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
              </TableCell>
              <TableCell>&quot;md&quot;</TableCell>
              <TableCell>
                Kích thước spinner (sm=nhỏ, md=trung bình, lg=lớn)
              </TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>color</TableCell>
              <TableCell>
                &quot;default&quot; | &quot;primary&quot; |
                &quot;secondary&quot; | &quot;success&quot; |
                &quot;warning&quot; | &quot;danger&quot;
              </TableCell>
              <TableCell>&quot;primary&quot;</TableCell>
              <TableCell>Màu sắc chính của spinner</TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>variant</TableCell>
              <TableCell>
                &quot;default&quot; | &quot;simple&quot; | &quot;gradient&quot;
                | &quot;wave&quot; | &quot;dots&quot; | &quot;spinner&quot;
              </TableCell>
              <TableCell>&quot;default&quot;</TableCell>
              <TableCell>Kiểu hiển thị/spinner animation</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell>labelColor</TableCell>
              <TableCell>
                &quot;default&quot; | &quot;primary&quot; |
                &quot;secondary&quot; | &quot;success&quot; |
                &quot;warning&quot; | &quot;danger&quot;
              </TableCell>
              <TableCell>&quot;default&quot;</TableCell>
              <TableCell>
                Màu chữ của nhãn (mặc định dùng màu chữ theme)
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
