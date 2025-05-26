"use client";

import { VKXBreadcrumbs } from "@/components/vkx-breadcrumbs/vkx-breadcrumbs";
import { HomeIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
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
    <>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Cơ bản</h2>
        <VKXBreadcrumbs
          items={[
            { id: "home", children: "Home" },
            { id: "documents", children: "Documents" },
            {
              id: "project",
              children: "Project",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Kiểu hiển thị</h2>
        <VKXBreadcrumbs
          variant="solid"
          items={[
            { id: "solid", children: "Solid" },
            {
              id: "variant",
              children: "Variant",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          variant="bordered"
          items={[
            { id: "bordered", children: "Bordered" },
            {
              id: "variant",
              children: "Variant",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          variant="light"
          items={[
            { id: "light", children: "Light" },
            {
              id: "variant",
              children: "Variant",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Màu sắc</h2>
        <VKXBreadcrumbs
          color="success"
          items={[
            { id: "success1", children: "Success", color: "primary" },
            {
              id: "success2",
              children: "Success",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          color="secondary"
          items={[
            { id: "secondary1", children: "Secondary" },
            {
              id: "secondary2",
              children: "Secondary",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          color="danger"
          items={[
            { id: "danger1", children: "Danger" },
            {
              id: "danger2",
              children: "Danger",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Kích cỡ</h2>
        <VKXBreadcrumbs
          size="sm"
          items={[
            { id: "small", children: "Small" },
            { id: "size-sm", children: "Size", isCurrent: true, isLast: true },
          ]}
        />

        <VKXBreadcrumbs
          size="md"
          items={[
            { id: "medium", children: "Medium" },
            {
              id: "size-md",
              children: "Medium",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          size="lg"
          items={[
            { id: "large", children: "Large" },
            { id: "size-lg", children: "Size", isCurrent: true, isLast: true },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Radius</h2>
        <VKXBreadcrumbs
          radius="sm"
          items={[
            { id: "radius-sm", children: "Small" },
            {
              id: "radius-sm2",
              children: "Radius",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          radius="full"
          items={[
            { id: "radius-full", children: "Full" },
            {
              id: "radius-full2",
              children: "Radius",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Underline</h2>
        <VKXBreadcrumbs
          underline="hover"
          items={[
            { id: "underline-hover", children: "Hover" },
            {
              id: "underline-hover2",
              children: "Underline",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />

        <VKXBreadcrumbs
          underline="always"
          items={[
            { id: "underline-always", children: "Always" },
            {
              id: "underline-always2",
              children: "Underline",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Separator</h2>
        <VKXBreadcrumbs
          items={[
            { id: "custom", children: "Custom" },
            {
              id: "separator",
              children: "Separator",
              isCurrent: true,
              isLast: true,
            },
          ]}
          separator="→"
        />

        <VKXBreadcrumbs
          separator={<span className="mx-1">/</span>}
          items={[
            { id: "react", children: "React" },
            {
              id: "separator2",
              children: "Separator",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Max items</h2>
        <VKXBreadcrumbs
          maxItems={3}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={1}
          items={[
            { id: "home", children: "Home" },
            { id: "library", children: "Library" },
            { id: "data", children: "Data" },
            { id: "files", children: "Files" },
            {
              id: "documents",
              children: "Documents",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Disabled</h2>
        <VKXBreadcrumbs
          isDisabled
          items={[
            { id: "disabled", children: "Disabled" },
            {
              id: "breadcrumbs",
              children: "Breadcrumbs",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">With Animation Disabled</h2>
        <VKXBreadcrumbs
          disableAnimation
          items={[
            { id: "no", children: "No" },
            {
              id: "animation",
              children: "Animation",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Custom Class Names</h2>
        <VKXBreadcrumbs
          classNames={{
            base: "bg-gray-100 p-2 rounded-lg",
            separator: "text-red-500 mx-2",
          }}
          items={[
            { id: "custom", children: "Custom" },
            {
              id: "classes",
              children: "Classes",
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">Item Customization</h2>
        <VKXBreadcrumbs
          items={[
            {
              id: "home",
              children: "Home",
              color: "primary",
              size: "lg",
              startContent: <HomeIcon className="w-5 h-5" />,
              className: "font-bold",
            },
            {
              id: "settings",
              children: "Settings",
              color: "danger",
              underline: "hover",
              endContent: <Cog6ToothIcon className="w-5 h-5" />,
              isCurrent: true,
              isLast: true,
            },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-bold">With Press Events</h2>
        <VKXBreadcrumbs
          items={[
            {
              id: "clickable",
              children: "Clickable",
              onPress: () => console.log("Item pressed"),
            },
            {
              id: "current",
              children: "Current",
              isCurrent: true,
              isLast: true,
              onPressStart: () => console.log("Press started"),
              onPressEnd: () => console.log("Press ended"),
            },
          ]}
          onAction={(key) => console.log("Action on item:", key)}
        />
      </div>
      <h2 className="text-2xl font-bold mb-10">API</h2>
      <Table className="mb-10">
        <TableHeader>
          <TableColumn>Prop</TableColumn>
          <TableColumn>Kiểu</TableColumn>
          <TableColumn>Mặc định</TableColumn>
          <TableColumn>Mô tả</TableColumn>
        </TableHeader>
        <TableBody>
          {/* Props for VKXBreadcrumbs */}
          <TableRow key="1">
            <TableCell>variant</TableCell>
            <TableCell>solid | bordered | light</TableCell>
            <TableCell>solid</TableCell>
            <TableCell>Kiểu hiển thị của breadcrumbs</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>color</TableCell>
            <TableCell>
              foreground | primary | secondary | success | warning | danger
            </TableCell>
            <TableCell>foreground</TableCell>
            <TableCell>Màu sắc chủ đạo của breadcrumbs</TableCell>
            </TableRow>
            <TableRow key="3">
            <TableCell>size</TableCell>
            <TableCell>sm | md | lg</TableCell>
            <TableCell>md</TableCell>
            <TableCell>Kích thước của breadcrumbs</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>radius</TableCell>
            <TableCell>none | sm | md | lg | full</TableCell>
            <TableCell>md</TableCell>
            <TableCell>Độ bo góc của breadcrumbs</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>underline</TableCell>
            <TableCell>
              none | active | hover | focus | always
            </TableCell>
            <TableCell>none</TableCell>
            <TableCell>Kiểu gạch chân của breadcrumb items</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>separator</TableCell>
            <TableCell>React.ReactNode</TableCell>
            <TableCell>/</TableCell>
            <TableCell>Phần tử phân cách giữa các breadcrumb items</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>items</TableCell>
            <TableCell>Array&lt;VKXBreadcrumbItem&gt;</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Danh sách các breadcrumb items (bắt buộc)</TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>maxItems</TableCell>
            <TableCell>number</TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Số lượng items tối đa hiển thị trước khi bị collapse
            </TableCell>
          </TableRow>
          <TableRow key="9">
            <TableCell>itemsBeforeCollapse</TableCell>
            <TableCell>number</TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              Số lượng items hiển thị trước ellipsis khi bị collapse
            </TableCell>
          </TableRow>
          <TableRow key="10">
            <TableCell>itemsAfterCollapse</TableCell>
            <TableCell>number</TableCell>
            <TableCell>1</TableCell>
            <TableCell>
              Số lượng items hiển thị sau ellipsis khi bị collapse
            </TableCell>
          </TableRow>
          <TableRow key="11">
            <TableCell>hideSeparator</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Ẩn separator của tất cả items</TableCell>
          </TableRow>
          <TableRow key="12">
            <TableCell>isDisabled</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa toàn bộ breadcrumbs</TableCell>
          </TableRow>
          <TableRow key="13">
            <TableCell>disableAnimation</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa tất cả animation</TableCell>
          </TableRow>
          <TableRow key="14">
            <TableCell>itemClasses</TableCell>
            <TableCell>
              Partial&lt;Record&lt;&quot;base&quot; | &quot;item&quot; | &quot;separator&quot;, string&gt;&gt;
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>Custom classes cho các phần tử của item</TableCell>
          </TableRow>
          <TableRow key="15">
            <TableCell>classNames</TableCell>
            <TableCell>
              Partial&lt;Record&lt;&quot;base&quot; | &quot;list&quot; | &quot;ellipsis&quot; | &quot;separator&quot;,
              string&gt;&gt;
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Custom classes cho các phần tử của breadcrumbs
            </TableCell>
          </TableRow>
          <TableRow key="16">
            <TableCell>onAction</TableCell>
            <TableCell>(key: React.Key) =&gt; void</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Callback khi breadcrumb item được click</TableCell>
          </TableRow>

          {/* Props for VKXBreadcrumbItem */}
          <TableRow key="17">
            <TableCell>id</TableCell>
            <TableCell>string | number</TableCell>
            <TableCell>-</TableCell>
            <TableCell>ID duy nhất của item (bắt buộc)</TableCell>
          </TableRow>
          <TableRow key="18">
            <TableCell>children</TableCell>
            <TableCell>React.ReactNode</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Nội dung của breadcrumb item (bắt buộc)</TableCell>
          </TableRow>
          <TableRow key="19">
            <TableCell>color</TableCell>
            <TableCell>
              foreground | primary | secondary | success | warning | danger
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Màu sắc của item (kế thừa từ breadcrumbs nếu không set)
            </TableCell>
          </TableRow>
          <TableRow key="20">
            <TableCell>size</TableCell>
            <TableCell>sm | md | lg</TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Kích thước của item (kế thừa từ breadcrumbs nếu không set)
            </TableCell>
          </TableRow>
          <TableRow key="21">
            <TableCell>underline</TableCell>
            <TableCell>
              none | active | hover | focus | always
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Kiểu gạch chân của item (kế thừa từ breadcrumbs nếu không set)
            </TableCell>
          </TableRow>
          <TableRow key="22">
            <TableCell>startContent</TableCell>
            <TableCell>React.ReactNode</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Nội dung hiển thị ở đầu item</TableCell>
          </TableRow>
          <TableRow key="23">
            <TableCell>endContent</TableCell>
            <TableCell>React.ReactNode</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Nội dung hiển thị ở cuối item</TableCell>
          </TableRow>
          <TableRow key="24">
            <TableCell>separator</TableCell>
            <TableCell>React.ReactNode</TableCell>
            <TableCell>-</TableCell>
            <TableCell>
              Separator của item (ghi đè separator của breadcrumbs)
            </TableCell>
          </TableRow>
          <TableRow key="25">
            <TableCell>isCurrent</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              Đánh dấu item là current (thường là item cuối cùng)
            </TableCell>
          </TableRow>
          <TableRow key="26">
            <TableCell>isLast</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Đánh dấu item là cuối cùng</TableCell>
          </TableRow>
          <TableRow key="27">
            <TableCell>hideSeparator</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Ẩn separator của item này</TableCell>
          </TableRow>
          <TableRow key="28">
            <TableCell>isDisabled</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa item này</TableCell>
          </TableRow>
          <TableRow key="29">
            <TableCell>disableAnimation</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa animation cho item này</TableCell>
          </TableRow>
          <TableRow key="30">
            <TableCell>className</TableCell>
            <TableCell>string</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Custom class cho item</TableCell>
          </TableRow>
          <TableRow key="31">
            <TableCell>onPress</TableCell>
            <TableCell>(e: PressEvent) =&gt; void</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Callback khi item được press</TableCell>
          </TableRow>
          <TableRow key="32">
            <TableCell>onPressStart</TableCell>
            <TableCell>(e: PressEvent) =&gt; void</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Callback khi bắt đầu press item</TableCell>
          </TableRow>
          <TableRow key="33">
            <TableCell>onPressEnd</TableCell>
            <TableCell>(e: PressEvent) =&gt; void</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Callback khi kết thúc press item</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
