"use client";

import React from "react";
import {
  TableHeader,
  TableHeaderProps,
} from "@heroui/react";

interface VkxTableHeaderProps<T> extends TableHeaderProps<T> {}

export const VkxTableHeader = <T,>({
  children,
  ...props
}: VkxTableHeaderProps<T>) : JSX.Element => {
  return <TableHeader {...props}>{children}</TableHeader>;
};
