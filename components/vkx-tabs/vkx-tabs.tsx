"use client";

import { Tabs, Tab } from "@heroui/react";
import { useState } from "react";

interface VKXtab {
  key: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface VKXTabsProps {
  className?: string;
  tabs: Array<VKXtab>;
  tabActive?: string;
}

export default function VKXTabs({ tabs, className, tabActive }: VKXTabsProps) {
  const [selected, setSelected] = useState<string | undefined>(tabActive);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        className={className}
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(String(key))}
      >
        {tabs.map((item) => (
          <Tab key={item.key} title={item.title}>
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.content}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
