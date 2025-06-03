"use client";

import React from "react";
import { Table, TableProps } from "@heroui/react";

interface VkxTableProps extends TableProps {}

export const VkxTable: React.FC<VkxTableProps & { ariaLabel?: string }> = ({ ariaLabel = "VkxTable", ...props }) => {
  return <Table aria-label={ariaLabel} {...props}></Table>;
};
