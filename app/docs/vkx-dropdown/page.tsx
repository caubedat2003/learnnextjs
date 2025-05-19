"use client";

import VKXDropdown, {
  VKXDropdownSection,
} from "@/components/vkx-dropdown/vkx-dropdown";
import { Button } from "@heroui/react";

export default function VKXTabsPage() {
  const handleAction = (key: string) => {
    console.log("Item clicked:", key);
  };

  const sections: Array<VKXDropdownSection> = [
    {
      key: "actions",
      title: "Actions",
      items: [
        {
          key: "new",
          label: "New file",
          description: "Create a new file",
          shortcut: "⌘N",
          onAction: () => handleAction("new"),
        },
        {
          key: "copy",
          label: "Copy link",
          shortcut: "⌘C",
          onAction: () => handleAction("copy"),
        },
        {
          key: "edit",
          label: "Edit",
          shortcut: "⌘E",
          onAction: () => handleAction("edit"),
        },
      ],
    },
    {
      key: "danger",
      title: "Danger zone",
      items: [
        {
          key: "delete",
          label: "Delete",
          description: "Permanently delete the file",
          onAction: () => handleAction("delete"),
        },
        {
          key: "report",
          label: "Report",
          isDisabled: true,
          onAction: () => handleAction("report"),
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Cách sử dụng</h2>
      <div className="bg-white dark:bg-gray-900 h-80 overflow-y-auto relative mb-10">
        <VKXDropdown
          triggerNode={<Button>Open Menu</Button>}
          sections={sections}
          variant="bordered"
          color="primary"
          disabledKeys={["report"]}
        />
      </div>
    </>
  );
}
