"use client";

import { useCallback, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";

export interface VKXNavbarMenuItem {
  id: React.Key;
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
}

export interface VKXNavbarItem {
  id: React.Key;
  content: React.ReactNode;
  hideOnMobile?: boolean;
  className?: string;
}

export interface VKXNavbarProps {
  // Navbar props
  className?: string;
  classNames?: {
    base?: string;
    wrapper?: string;
    brand?: string;
    content?: string;
    toggle?: string;
    toggleIcon?: string;
    menu?: string;
    menuItem?: string;
  };
  height?: string | number;
  isBordered?: boolean;
  isBlurred?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  position?: "static" | "sticky";
  shouldHideOnScroll?: boolean;
  isMenuOpen?: boolean;
  disableAnimation?: boolean;
  disableScrollHandler?: boolean;
  motionProps?: any;

  // Brand props
  brand?: {
    content: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
  };

  // Nav desktop
  leftItems?: VKXNavbarItem[];
  centerItems?: VKXNavbarItem[];
  rightItems?: VKXNavbarItem[];

  // Menu mobile
  menuItems?: VKXNavbarMenuItem[];

  // Toggle menu
  showMenuToggle?: boolean;

  // Event
  onMenuOpenChange?: (isOpen: boolean) => void;
}

export default function VKXNavbar({
  className,
  classNames,
  height,
  isBordered = false,
  isBlurred = true,
  maxWidth = "lg",
  position = "sticky",
  shouldHideOnScroll = false,
  isMenuOpen,
  disableAnimation = false,
  disableScrollHandler = false,
  motionProps,
  brand,
  leftItems = [],
  centerItems = [],
  rightItems = [],
  menuItems = [],
  showMenuToggle = true,
  onMenuOpenChange,
  ...props
}: VKXNavbarProps) {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);

  const handleMenuToggle = useCallback(
    (isOpen: boolean) => {
      setIsMenuOpenState(isOpen);
      onMenuOpenChange?.(isOpen);
    },
    [onMenuOpenChange]
  );

  const renderNavbarItems = (items: VKXNavbarItem[]) => {
    return items.map((item) => (
      <NavbarItem key={item.id} className={item.className} isActive={false}>
        {item.content}
      </NavbarItem>
    ));
  };

  return (
    <Navbar
      className={className}
      classNames={classNames}
      disableAnimation={disableAnimation}
      disableScrollHandler={disableScrollHandler}
      height={height}
      isBlurred={isBlurred}
      isBordered={isBordered}
      isMenuOpen={isMenuOpen ?? isMenuOpenState}
      maxWidth={maxWidth}
      motionProps={motionProps}
      position={position}
      shouldHideOnScroll={shouldHideOnScroll}
      onMenuOpenChange={handleMenuToggle}
      {...props}
    >
      {/* Brand */}
      {brand && (
        <NavbarBrand className={brand.className}>
          {brand.href ? (
            <a href={brand.href} onClick={brand.onClick}>
              {brand.content}
            </a>
          ) : (
            <button
              type="button"
              onClick={brand.onClick}
              className={brand.onClick ? "cursor-pointer" : "cursor-default"}
            >
              {brand.content}
            </button>
          )}
        </NavbarBrand>
      )}

      {/* Left Content */}
      {leftItems.length > 0 && (
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          {renderNavbarItems(leftItems)}
        </NavbarContent>
      )}

      {/* Center Content */}
      {centerItems.length > 0 && (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {renderNavbarItems(centerItems)}
        </NavbarContent>
      )}

      {/* Right Content */}
      {rightItems.length > 0 && (
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {renderNavbarItems(rightItems)}
        </NavbarContent>
      )}

      {/* Mobile Menu Toggle */}
      {showMenuToggle && menuItems.length > 0 && (
        <NavbarMenuToggle
          aria-label={isMenuOpenState ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      )}

      {/* Mobile Menu */}
      {menuItems.length > 0 && (
        <NavbarMenu>
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.id} className={item.className}>
              {item.href ? (
                <a
                  className={`w-full ${item.isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  href={item.href}
                  onClick={item.isDisabled ? undefined : item.onClick}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  className={`w-full text-left ${item.isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={item.isDisabled}
                  onClick={item.isDisabled ? undefined : item.onClick}
                >
                  {item.label}
                </button>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
