import { VkxSelect } from "../vkx-select/vkx-select";
import { VkxSelectItem } from "../vkx-select/vkx-select-item";
import { VkxSelectProps } from "../vkx-select/vkx-select-props";

interface VkxYearInputProps extends Omit<VkxSelectProps, "selectItems"> {
  selectItems?: VkxSelectItem[];
}

export const VkxYearInput: React.FC<VkxYearInputProps> = ({
  selectItems,
  ...props
}) => {
  getSelectItems();
  return (
    <VkxSelect
      ariaLabel="Year input"
      selectItems={selectItems ?? years}
      {...props}
    ></VkxSelect>
  );
};
let years: VkxSelectItem[] = [];

function getSelectItems() {
  if (years.length != 0) return;
  console.log("get time 1");
  const now = new Date();
  const year = now.getFullYear();

  years.push({
    key: `${year}`,
    children: `Năm ${year}`,
  });

  for (let i = 1; i <= 20; i++) {
    years.push({
      key: `${year + i}`,
      children: `Năm ${year + i}`,
    });

    years.push({
      key: `${year - i}`,
      children: `Năm ${year - i}`,
    });
  }

  years.sort((a, b) => a.key.localeCompare(b.key));
}
