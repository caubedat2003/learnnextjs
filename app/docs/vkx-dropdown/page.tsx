"use client";

import VKXDropdown, {
  VKXDropdownSection,
} from "@/components/vkx-dropdown/vkx-dropdown";
import { Button } from "@heroui/react";
import {
  DocumentIcon,
  Cog6ToothIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

export default function VKXTabsPage() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Cơ bản</h2>
        <VKXDropdown
          sections={[
            {
              key: "basic-section",
              items: [
                { key: "new", label: "New File" },
                { key: "copy", label: "Copy Link" },
                { key: "edit", label: "Edit File" },
                { key: "delete", label: "Delete File" },
              ],
            },
          ]}
          triggerNode={<Button>Menu</Button>}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Nhiều Section</h2>
        <VKXDropdown
          sections={[
            {
              key: "actions",
              title: "Actions",
              items: [
                { key: "new", label: "New" },
                { key: "edit", label: "Edit" },
              ],
            },
            {
              key: "danger",
              title: "Danger Zone",
              items: [{ key: "delete", label: "Delete" }],
            },
          ]}
          triggerNode={<Button>Actions</Button>}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Icon & Shortcut</h2>
        <VKXDropdown
          triggerNode={<Button>Advanced</Button>}
          sections={[
            {
              key: "advanced",
              items: [
                {
                  key: "new",
                  label: "New Project",
                  startContent: <DocumentIcon className="size-4" />,
                  shortcut: "⌘N",
                },
                {
                  key: "settings",
                  label: "Settings",
                  startContent: <Cog6ToothIcon className="size-4" />,
                  shortcut: "⌘S",
                },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Variant & Color</h2>
        <VKXDropdown
          color="success"
          variant="bordered"
          triggerNode={
            <Button color="success" variant="bordered">
              Theme
            </Button>
          }
          sections={[
            {
              key: "theme",
              items: [
                { key: "light", label: "Light" },
                { key: "dark", label: "Dark" },
                { key: "system", label: "System" },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Disabled Items</h2>
        <VKXDropdown
          triggerNode={<Button>User</Button>}
          disabledKeys={["logout"]}
          sections={[
            {
              key: "user",
              items: [
                { key: "profile", label: "Profile" },
                { key: "settings", label: "Settings" },
                { key: "logout", label: "Logout", isDisabled: true },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Href & Target</h2>
        <VKXDropdown
          triggerNode={<Button>Links</Button>}
          sections={[
            {
              key: "links",
              items: [
                {
                  key: "docs",
                  label: "Documentation",
                  href: "http://example.com",
                  target: "_blank",
                },
                {
                  key: "support",
                  label: "Support",
                  href: "http://example.com",
                },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">className & closeOnSelect</h2>
        <VKXDropdown
          className="custom-dropdown"
          triggerNode={<Button>Options</Button>}
          sections={[
            {
              key: "options",
              items: [
                {
                  key: "notify",
                  label: "Enable Notifications",
                  closeOnSelect: false,
                  onAction: () => alert("Toggle notifications"),
                },
                {
                  key: "preferences",
                  label: "Preferences",
                  className: "text-danger",
                },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-2">onAction & onClose</h2>
        <p className="mb-5">Mở console để xem log</p>
        <VKXDropdown
          triggerNode={<Button>Actions</Button>}
          onAction={() => console.log("Item selected")}
          sections={[
            {
              key: "actions",
              items: [
                {
                  key: "download",
                  label: "Download",
                  onAction: () => console.log("Download started"),
                  onClose: () => console.log("Dropdown closed after download"),
                },
                {
                  key: "share",
                  label: "Share",
                  onAction: () => console.log("Sharing..."),
                },
              ],
            },
          ]}
        />
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">endContent</h2>
        <VKXDropdown
          triggerNode={<Button>More</Button>}
          sections={[
            {
              key: "more",
              items: [
                {
                  key: "stats",
                  label: "Statistics",
                  endContent: <span className="text-sm opacity-50">⌘S</span>,
                },
                {
                  key: "upgrade",
                  label: "Upgrade",
                  endContent: <ArrowTopRightOnSquareIcon />,
                  description: "Get access to all features",
                },
              ],
            },
          ]}
        />
      </div>
      <div className="border-t border-gray-300 pt-10">
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
              <TableCell>
                solid | bordered | light | flat | faded | shadow
              </TableCell>
              <TableCell>solid</TableCell>
              <TableCell>Kiểu hiển thị menu</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>color</TableCell>
              <TableCell>
                default | primary | secondary | success | warning | danger
              </TableCell>
              <TableCell>default</TableCell>
              <TableCell>Màu sắc chủ đạo</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>isDisabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Vô hiệu hóa menu</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>disabledKeys</TableCell>
              <TableCell>Array&lt;string&gt;</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Danh sách key bị vô hiệu hóa</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>triggerNode</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Phần tử kích hoạt dropdown</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>onAction</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi item được chọn</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 className="text-2xl font-bold mb-4">
          &apos;sections&apos; type VKXDropdownSection
        </h2>
        <Table className="mb-10">
          <TableHeader>
            <TableColumn>Prop</TableColumn>
            <TableColumn>Kiểu</TableColumn>
            <TableColumn>Mặc định</TableColumn>
            <TableColumn>Mô tả</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>key</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Key section
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>title</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Danh sách tiêu đề của section</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>items</TableCell>
              <TableCell>Array&lt;VKXDropdownItem&gt;</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Danh sách item trong section</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2 className="text-2xl font-bold mb-4">
          &apos;items&apos; type VKXDropdownItem
        </h2>
        <Table className="mb-10">
          <TableHeader>
            <TableColumn>Prop</TableColumn>
            <TableColumn>Kiểu</TableColumn>
            <TableColumn>Mặc định</TableColumn>
            <TableColumn>Mô tả</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>key</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                Key item
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>className</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Tuỳ chỉnh class</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>href</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Liên kết đến trang khác</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>target</TableCell>
              <TableCell>HTMLAttributeAnchorTarget</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Giá trị của thuộc tính target trong thẻ a</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>startContent</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung before</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>endContent</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung after</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>description</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Mô tả phụ</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>shortcut</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Phím tắt hiển thị</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>isDisabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Vô hiệu hóa item</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>onAction</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi item được chọn</TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>onClose</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi item bị đóng</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
