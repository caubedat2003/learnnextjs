"use client";

import React from "react";
import { TableBody, TableBodyProps } from "@heroui/react";

interface VkxTableBodyProps<T> extends TableBodyProps<T> {}

export const VkxTableBody = <T,>({
  children,
  ...props
}: VkxTableBodyProps<T>) : JSX.Element => {
  return <TableBody {...props}>{children}</TableBody>;
};
