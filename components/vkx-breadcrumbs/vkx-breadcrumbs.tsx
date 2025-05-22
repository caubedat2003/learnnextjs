"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import { PressEvent } from "@react-types/shared";
import React from "react";

export interface VKXBreadcrumbItem {
  id: string | number; // Thêm id để làm key
  children: React.ReactNode;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  underline?: "none" | "active" | "hover" | "focus" | "always";
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  separator?: React.ReactNode;
  isCurrent?: boolean;
  isLast?: boolean;
  hideSeparator?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  className?: string;
  onPress?: (e: PressEvent) => void;
  onPressStart?: (e: PressEvent) => void;
  onPressEnd?: (e: PressEvent) => void;
}

export interface VKXBreadcrumbs {
  variant?: "solid" | "bordered" | "light";
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  underline?: "none" | "active" | "hover" | "focus" | "always";
  separator?: React.ReactNode;
  items: VKXBreadcrumbItem[];
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  hideSeparator?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  itemClasses?: Partial<Record<"base" | "item" | "separator", string>>;
  classNames?: Partial<
    Record<"base" | "list" | "ellipsis" | "separator", string>
  >;
  onAction?: (key: React.Key) => void;
}

export function VKXBreadcrumbs({
  variant = "solid",
  color = "foreground",
  size = "md",
  radius = "md",
  underline = "none",
  separator = "/",
  items,
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  hideSeparator = false,
  isDisabled = false,
  disableAnimation = false,
  itemClasses,
  classNames,
  onAction,
}: VKXBreadcrumbs) {
  return (
    <Breadcrumbs
      classNames={classNames}
      color={color}
      disableAnimation={disableAnimation}
      hideSeparator={hideSeparator}
      isDisabled={isDisabled}
      itemClasses={itemClasses}
      itemsAfterCollapse={itemsAfterCollapse}
      itemsBeforeCollapse={itemsBeforeCollapse}
      maxItems={maxItems}
      radius={radius}
      separator={separator}
      size={size}
      underline={underline}
      variant={variant}
      onAction={onAction}
    >
      {items.map((item) => (
        <BreadcrumbItem
          key={item.id}
          className={item.className}
          color={item.color ?? color}
          disableAnimation={item.disableAnimation ?? disableAnimation}
          endContent={item.endContent}
          hideSeparator={item.hideSeparator ?? hideSeparator}
          isCurrent={item.isCurrent ?? false}
          isDisabled={item.isDisabled ?? isDisabled}
          isLast={item.isLast ?? false}
          separator={item.separator ?? separator}
          size={item.size ?? size}
          startContent={item.startContent}
          underline={item.underline ?? underline}
          onPress={item.onPress}
          onPressEnd={item.onPressEnd}
          onPressStart={item.onPressStart}
        >
          {item.children}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}