"use client";

import React, { useState } from "react";
import {
  Navbar as HNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

export interface VKXNavbarItem {
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface VKXNavbarProps {
  //#region Properties
  className?: string;
  position?: "static" | "sticky";
  maxWidth: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  height: string | number;
  isBordered?: boolean;
  //#endregion
  //#region Start
  startClassName?: string;
  startBrand?: React.ReactNode;
  //#endregion
  //#region Center
  centerClassName?: string;
  centerItems?: Array<VKXNavbarItem>;
  //#endregion
  //#region End
  endClassName?: string;
  endItems?: Array<VKXNavbarItem>;
  //#endregion
  //#region Menu
  isMenuOpen?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
  menuItems?: VKXNavbarItem[];
  //#endregion
}
export default function VKXNavbar({
  //#region Properties
  className,
  position = "static",
  maxWidth = "lg",
  height = "4rem",
  isBordered = false,
  //#endregion
  //#region Brand
  startClassName,
  startBrand,
  //#endregion
  //#region Center
  centerClassName,
  centerItems = [],
  //#endregion
  //#region End
  endClassName,
  endItems = [],
  //#endregion
  //#region Menu
  menuItems = [],
  //#endregion
}: VKXNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hasCenter = centerItems.length > 0;
  const hasEnd = endItems.length > 0;
  const hasMenu = menuItems.length > 0;

  return (
    <HNavbar
      className={className}
      height={height}
      isBordered={isBordered}
      maxWidth={maxWidth}
      position={position}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Start */}
      <NavbarContent className={startClassName} justify="start">
        {hasMenu && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        )}
        {startBrand && <NavbarBrand>{startBrand}</NavbarBrand>}
      </NavbarContent>
      {/* Center */}
      {hasCenter && (
        <NavbarContent className={centerClassName} justify="center">
          {centerItems.map((item, index) => (
            <NavbarItem key={index} isActive={item.isActive}>
              {item.children}
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      {/* End */}
      {hasEnd && (
        <NavbarContent className={endClassName} justify="end">
          {endItems.map((item, index) => (
            <NavbarItem
              key={index}
              isActive={item.isActive}
              onClick={item.onClick}
            >
              {item.children}
            </NavbarItem>
          ))}
        </NavbarContent>
      )}
      {/* Mobile menu */}
      {hasMenu && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`menu-${index}`}
              isActive={item.isActive}
              onClick={item.onClick}
            >
              {item.children}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </HNavbar>
  );
}
