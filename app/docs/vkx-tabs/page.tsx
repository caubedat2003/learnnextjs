"use client";

import { VKXTabs } from "@/components/vkx-tabs/vkx-tabs";
import React from "react";

export default function TabsExample() {
  const [selected, setSelected] = React.useState("2");

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
    </>
  );
}
