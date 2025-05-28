"use client";

import React from "react";
import { TableColumn, TableColumnProps } from "@heroui/react";

interface VkxTableColumnProps<T> extends TableColumnProps<T> {}

export const VkxTableColumn = <T,>({
  children,
  ...props
}: VkxTableColumnProps<T>): JSX.Element => {
  return <TableColumn {...props}>{children}</TableColumn>;
};
