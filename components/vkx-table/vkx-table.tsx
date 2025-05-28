"use client";

import React from "react";
import { Table, TableProps } from "@heroui/react";

interface VkxTableProps extends TableProps {}

export const VkxTable: React.FC<VkxTableProps> = ({ ...props }) => {
  return <Table {...props}></Table>;
};
