"use client";

import VKXTabs from "@/components/vkx-tabs/vkx-tabs";

export default function VKXTabsPage() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Cách sử dụng</h2>
      <div className="bg-white dark:bg-gray-900 h-80 overflow-y-auto relative mb-10">
        <VKXTabs
          tabActive="tab1"
          tabs={[
            { key: "tab1", title: "Tab 1", content: (<div>Content 1</div>) },
            { key: "tab2", title: "Tab 2", content: (<div>Content 2</div>) },
            { key: "tab3", title: "Tab 3", content: (<div>Content 3</div>) },
          ]}
        />
      </div>
    </>
  );
}
