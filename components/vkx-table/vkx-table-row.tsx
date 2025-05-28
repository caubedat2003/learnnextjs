"use client";

import React from "react";
import { TableRow, TableRowProps } from "@heroui/react";

interface VkxTableRowProps extends TableRowProps {}

export const VkxTableRow: React.FC<VkxTableRowProps> = ({ ...props }) : JSX.Element => {
  return <TableRow {...props}></TableRow>;
};
