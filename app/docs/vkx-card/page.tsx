"use client";

import VKXCard from "@/components/vkx-card/vkx-card";
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
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Cơ bản</h2>
        <VKXCard>
          <p>This is a basic card with default styling.</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Shadow</h2>
        <div className="flex gap-4">
          <VKXCard shadow="none">
            <p>No shadow</p>
          </VKXCard>

          <VKXCard shadow="sm">
            <p>Small shadow</p>
          </VKXCard>

          <VKXCard shadow="md">
            <p>Medium shadow (default)</p>
          </VKXCard>

          <VKXCard shadow="lg">
            <p>Large shadow</p>
          </VKXCard>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Border radius</h2>
        <div className="flex gap-4">
          <VKXCard radius="none">
            <p>Square corners</p>
          </VKXCard>

          <VKXCard radius="sm">
            <p>Small rounded corners</p>
          </VKXCard>

          <VKXCard radius="md">
            <p>Medium rounded corners</p>
          </VKXCard>

          <VKXCard radius="lg">
            <p>Large rounded corners (default)</p>
          </VKXCard>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">fullWidth</h2>
        <VKXCard fullWidth>
          <p>This card will expand to fill its container width</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Hoverable</h2>
        <VKXCard isHoverable>
          <p>Hover over me to see hover effects</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Pressable(Nhấn)</h2>
        <VKXCard isPressable onPress={() => alert("Card pressed!")}>
          <p>Click me like a button</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Blurred Background(Nền trong suốt)</h2>
        <div className="bg-blue-500 p-8">
          <VKXCard isBlurred>
            <p>This card has a blurred background</p>
          </VKXCard>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Header & Footer</h2>
        <VKXCard header="Card Header" footer="Card Footer">
          <p>Main card content goes here</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Blurred Footer(Nền footer trong suốt)</h2>
        <div className="bg-blue-500 p-8">
          <VKXCard isFooterBlurred footer="This footer is blurred">
            <p>Main card content</p>
          </VKXCard>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Disabled(Vô hiệu hoá)</h2>
        <VKXCard
          isDisabled
          isPressable
          onPress={() => alert("This won't trigger")}
        >
          <p>This card is disabled and can not be interacted with</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Disabling Animations and Ripple(Tắt hiệu ứng)
        </h2>
        <VKXCard
          isPressable
          disableAnimation
          disableRipple
          onPress={() => alert("Pressed with no animations")}
        >
          <p>No animations or ripple effects on press</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Allow Text Selection(Cho phép chọn văn bản)</h2>
        <VKXCard
          isPressable
          allowTextSelectionOnPress
          onPress={() => alert("You can select text in this card")}
        >
          <p>Try selecting this text while clicking</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Custom Class Names(Tuỳ chỉnh class)</h2>
        <VKXCard
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          headerClassName="text-xl font-bold"
          footerClassName="text-sm text-gray-200"
          bodyClassName="text-gray-800"
          header="Styled Header"
          footer="Styled Footer"
        >
          <p>Custom styled card content</p>
        </VKXCard>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">All Press Events(Tất cả sự kiện nhấn)</h2>
        <VKXCard
          isPressable
          onPress={() => console.log("Press")}
          onPressStart={() => console.log("Press Start")}
          onPressEnd={() => console.log("Press End")}
          onPressChange={() => console.log("Press Change")}
          onPressUp={() => console.log("Press Up")}
        >
          <p>Check console for press events</p>
        </VKXCard>
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
              <TableCell>className</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Class name tùy chỉnh cho Card</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>shadow</TableCell>
              <TableCell>none | sm | md | lg</TableCell>
              <TableCell>md</TableCell>
              <TableCell>Độ đổ bóng của Card</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>radius</TableCell>
              <TableCell>none | sm | md | lg</TableCell>
              <TableCell>lg</TableCell>
              <TableCell>Độ bo góc của Card</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>fullWidth</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Card có chiều rộng đầy đủ hay không</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>isHoverable</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Hiệu ứng khi di chuột qua</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>isPressable</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Card có thể nhấn được hay không</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>isBlurred</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Hiệu ứng làm mờ toàn bộ Card</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>isFooterBlurred</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Hiệu ứng làm mờ phần footer</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>isDisabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Vô hiệu hóa tương tác với Card</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>disableAnimation</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Tắt tất cả hiệu ứng animation</TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>disableRipple</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Tắt hiệu ứng ripple khi nhấn</TableCell>
            </TableRow>
            <TableRow key="12">
              <TableCell>allowTextSelectionOnPress</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Cho phép chọn văn bản khi nhấn</TableCell>
            </TableRow>
            <TableRow key="13">
              <TableCell>onPress</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi nhấn vào Card</TableCell>
            </TableRow>
            <TableRow key="14">
              <TableCell>onPressStart</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi bắt đầu nhấn</TableCell>
            </TableRow>
            <TableRow key="15">
              <TableCell>onPressEnd</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi kết thúc nhấn</TableCell>
            </TableRow>
            <TableRow key="16">
              <TableCell>onPressChange</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi trạng thái nhấn thay đổi</TableCell>
            </TableRow>
            <TableRow key="17">
              <TableCell>onPressUp</TableCell>
              <TableCell>() =&gt; void</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Callback khi nhả nút nhấn</TableCell>
            </TableRow>
            <TableRow key="18">
              <TableCell>headerClassName</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Class name tùy chỉnh cho header</TableCell>
            </TableRow>
            <TableRow key="19">
              <TableCell>header</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung header của Card</TableCell>
            </TableRow>
            <TableRow key="20">
              <TableCell>bodyClassName</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Class name tùy chỉnh cho body</TableCell>
            </TableRow>
            <TableRow key="21">
              <TableCell>children</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung chính của Card</TableCell>
            </TableRow>
            <TableRow key="22">
              <TableCell>footerClassName</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Class name tùy chỉnh cho footer</TableCell>
            </TableRow>
            <TableRow key="23">
              <TableCell>footer</TableCell>
              <TableCell>React.ReactNode</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Nội dung footer của Card</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
