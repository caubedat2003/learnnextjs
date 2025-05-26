"use client";

import { VKXTabs } from "@/components/vkx-tabs/vkx-tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";

export default function TabsExample() {
  const [selected, setSelected] = React.useState<React.Key>("2");

  return (
    <>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Cơ bản</h1>
        <VKXTabs
          variant="solid"
          color="primary"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Kiểu hiển thị</h1>
        <VKXTabs
          variant="solid"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          variant="bordered"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          variant="light"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          variant="underlined"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Màu sắc</h1>
        <VKXTabs
          color="default"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          color="primary"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          color="secondary"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          color="success"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          color="warning"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          color="danger"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Kích cỡ</h1>
        <VKXTabs
          size="sm"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          size="md"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          size="lg"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Radius</h1>
        <VKXTabs
          radius="none"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          radius="sm"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          radius="md"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          radius="lg"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          radius="full"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Layout</h1>

        <VKXTabs
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          fullWidth
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Selection Control</h1>

        <VKXTabs
          disabledKeys={["2"]}
          items={[
            { id: "1", label: "Active Tab", content: "..." },
            { id: "2", label: "Disabled Tab", content: "..." },
          ]}
        />

        <VKXTabs
          items={[
            { id: "1", label: "Key none", content: "..." },
            { id: "2", label: "Key selected", content: "..." },
          ]}
          selectedKey={selected}
          onSelectionChange={setSelected}
        />

        <VKXTabs
          defaultSelectedKey="2"
          items={[
            { id: "1", label: "Key 1", content: "..." },
            { id: "2", label: "Key 2", content: "..." },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Tương tác</h1>
        <VKXTabs
          keyboardActivation="manual"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          disableCursorAnimation
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          disableAnimation
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          shouldSelectOnPressUp={false}
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Disabled State</h1>
        <VKXTabs
          isDisabled
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Vị trí</h1>
        <VKXTabs
          placement="top"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          placement="bottom"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          placement="start"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />

        <VKXTabs
          placement="end"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Vertical Tabs</h1>
        <VKXTabs
          isVertical
          placement="start"
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Tab Panel Behavior</h1>
        <VKXTabs
          destroyInactiveTabPanel
          items={[
            { id: "1", label: "Tab 1", content: "Nội dung Tab 1" },
            { id: "2", label: "Tab 2", content: "Nội dung Tab 2" },
            { id: "3", label: "Tab 3", content: "Nội dung Tab 3" },
          ]}
        />
      </div>
      <div className="space-y-8 mb-10">
        <h1 className="text-2xl font-bold">Tab Panel Behavior</h1>
        <VKXTabs
          variant="underlined"
          color="primary"
          size="lg"
          radius="none"
          fullWidth
          placement="bottom"
          defaultSelectedKey="profile"
          items={[
            {
              id: "home",
              label: "Home",
              content: <div>Welcome to the home page!</div>,
            },
            {
              id: "profile",
              label: "Profile",
              content: <div>User profile information</div>,
            },
            {
              id: "settings",
              label: "Settings",
              content: <div>Application settings</div>,
            },
          ]}
          onSelectionChange={(key) => console.log("Selected tab:", key)}
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">API</h2>
      <Table className="mb-10">
        <TableHeader>
          <TableColumn>Prop</TableColumn>
          <TableColumn>Kiểu</TableColumn>
          <TableColumn>Mặc định</TableColumn>
          <TableColumn>Mô tả</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>variant</TableCell>
            <TableCell>solid | bordered | light | underlined</TableCell>
            <TableCell>solid</TableCell>
            <TableCell>Kiểu hiển thị của tabs</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>color</TableCell>
            <TableCell>
              default | primary | secondary | success | warning | danger
            </TableCell>
            <TableCell>default</TableCell>
            <TableCell>Màu sắc chủ đạo của tabs</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>size</TableCell>
            <TableCell>sm | md | lg</TableCell>
            <TableCell>md</TableCell>
            <TableCell>Kích thước của tabs</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>radius</TableCell>
            <TableCell>none | sm | md | lg | full</TableCell>
            <TableCell>md</TableCell>
            <TableCell>Độ bo góc của tabs</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>className</TableCell>
            <TableCell>string</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Custom class cho tabs</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>fullWidth</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Tabs chiếm full width</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>disabledKeys</TableCell>
            <TableCell>Array&lt;string&gt;</TableCell>
            <TableCell>[]</TableCell>
            <TableCell>Danh sách key của tab bị vô hiệu hóa</TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>selectedKey</TableCell>
            <TableCell>React.Key</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Key của tab được chọn (controlled)</TableCell>
          </TableRow>
          <TableRow key="9">
            <TableCell>defaultSelectedKey</TableCell>
            <TableCell>string | number</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Key của tab được chọn mặc định (uncontrolled)</TableCell>
          </TableRow>
          <TableRow key="10">
            <TableCell>shouldSelectOnPressUp</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>true</TableCell>
            <TableCell>
              Chọn tab khi nhả phím (thay vì khi nhấn xuống)
            </TableCell>
          </TableRow>
          <TableRow key="11">
            <TableCell>keyboardActivation</TableCell>
            <TableCell>manual | automatic</TableCell>
            <TableCell>automatic</TableCell>
            <TableCell>Chế độ kích hoạt bằng bàn phím</TableCell>
          </TableRow>
          <TableRow key="12">
            <TableCell>disableCursorAnimation</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa animation của cursor</TableCell>
          </TableRow>
          <TableRow key="13">
            <TableCell>isDisabled</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa toàn bộ tabs</TableCell>
          </TableRow>
          <TableRow key="14">
            <TableCell>disableAnimation</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Vô hiệu hóa tất cả animation</TableCell>
          </TableRow>
          <TableRow key="15">
            <TableCell>placement</TableCell>
            <TableCell>top | bottom | start | end</TableCell>
            <TableCell>top</TableCell>
            <TableCell>Vị trí đặt tabs</TableCell>
          </TableRow>
          <TableRow key="16">
            <TableCell>isVertical</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>
              Tabs dọc (thường dùng với placement=start hoặc end)
            </TableCell>
          </TableRow>
          <TableRow key="17">
            <TableCell>destroyInactiveTabPanel</TableCell>
            <TableCell>boolean</TableCell>
            <TableCell>false</TableCell>
            <TableCell>Unmount nội dung tab khi không active</TableCell>
          </TableRow>
          <TableRow key="18">
            <TableCell>items</TableCell>
            <TableCell>Array&lt;VKXTabItem&gt;</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Danh sách các tab (bắt buộc)</TableCell>
          </TableRow>
          <TableRow key="19">
            <TableCell>onSelectionChange</TableCell>
            <TableCell>(key: React.Key) =&gt; void</TableCell>
            <TableCell>-</TableCell>
            <TableCell>Callback khi tab được chọn</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
