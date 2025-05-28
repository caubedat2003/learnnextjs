"use client";

import { TableCell, TableCellProps } from "@heroui/react";
import React from "react";

interface VkxTableCellProps extends TableCellProps {}

export const VkxTableCell = ({ ...props }: VkxTableCellProps): JSX.Element => {
  return <TableCell {...props}></TableCell>;
};
