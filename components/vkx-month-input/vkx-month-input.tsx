"use client"
import { VkxSelect } from "../vkx-select/vkx-select";
import { VkxSelectItem } from "../vkx-select/vkx-select-item";
import { VkxSelectProps } from "../vkx-select/vkx-select-props";

interface VkxMonthInputProps extends Omit<VkxSelectProps, "selectItems"> {
  selectItems?: VkxSelectItem[];
}

export const VkxMonthInput: React.FC<VkxMonthInputProps> = ({
  selectItems,
  ...props
}) => {
  return (
    <VkxSelect
      ariaLabel="Month input"
      selectItems={selectItems ?? months}
      {...props}
    ></VkxSelect>
  );
};

let months: VkxSelectItem[] = [
  {
    key: "1",
    children: "Tháng 1",
  },
  {
    key: "2",
    children: "Tháng 2",
  },
  {
    key: "3",
    children: "Tháng 3",
  },
  {
    key: "4",
    children: "Tháng 4",
  },
  {
    key: "5",
    children: "Tháng 5",
  },
  {
    key: "6",
    children: "Tháng 6",
  },
  {
    key: "7",
    children: "Tháng 7",
  },
  {
    key: "8",
    children: "Tháng 8",
  },
  {
    key: "9",
    children: "Tháng 9",
  },
  {
    key: "10",
    children: "Tháng 10",
  },
  {
    key: "11",
    children: "Tháng 11",
  },
  {
    key: "12",
    children: "Tháng 12",
  },
];
