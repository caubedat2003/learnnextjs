"use client";

import { useState } from "react";
import { Button, Link, Avatar } from "@heroui/react";
import VKXNavbar from "@/components/vkx-navbar/vkx-navbar";

export default function AppNavbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cấu hình brand với logo và tên ứng dụng
  const brandConfig = {
    content: (
      <div className="flex items-center gap-2">
        <Avatar
          src="/logo.png"
          alt="App Logo"
          size="sm"
          className="border-2 border-primary-500"
        />
        <span className="font-bold text-lg hidden sm:inline">MyApp</span>
      </div>
    ),
    href: "/",
    onClick: () => console.log("Navigated to home"),
  };

  // Các item bên trái (navigation links)
  const leftItems = [
    {
      id: "home",
      content: (
        <Link
          color={activeItem === "home" ? "primary" : "foreground"}
          href="#home"
          onClick={() => setActiveItem("home")}
        >
          Trang chủ
        </Link>
      ),
    },
    {
      id: "products",
      content: (
        <Link
          color={activeItem === "products" ? "primary" : "foreground"}
          href="#products"
          onClick={() => setActiveItem("products")}
        >
          Sản phẩm
        </Link>
      ),
    },
    {
      id: "about",
      content: (
        <Link
          color={activeItem === "about" ? "primary" : "foreground"}
          href="#about"
          onClick={() => setActiveItem("about")}
        >
          Giới thiệu
        </Link>
      ),
      hideOnMobile: true, // Ẩn trên mobile
    },
  ];

  // Các item bên phải (action buttons)
  const rightItems = [
    {
      id: "notifications",
      content: (
        <Button isIconOnly variant="light" aria-label="Notifications">
          <BellIcon />
        </Button>
      ),
    },
    {
      id: "user",
      content: (
        <Avatar
          src="/user-avatar.jpg"
          alt="User"
          size="sm"
          className="cursor-pointer"
        />
      ),
    },
  ];

  // Menu items cho mobile
  const menuItems = [
    {
      id: "home-mobile",
      label: "Trang chủ",
      href: "#home",
      onClick: () => {
        setActiveItem("home");
        setIsMenuOpen(false);
      },
    },
    {
      id: "products-mobile",
      label: "Sản phẩm",
      href: "#products",
      onClick: () => {
        setActiveItem("products");
        setIsMenuOpen(false);
      },
    },
    {
      id: "about-mobile",
      label: "Giới thiệu",
      href: "#about",
      onClick: () => {
        setActiveItem("about");
        setIsMenuOpen(false);
      },
    },
    {
      id: "divider",
      label: <div className="border-t my-2 border-default-200"></div>,
      isDisabled: true,
    },
    {
      id: "login-mobile",
      label: "Đăng nhập",
      onClick: () => {
        console.log("Login clicked");
        setIsMenuOpen(false);
      },
    },
  ];

  return (
    <VKXNavbar
      // Cấu hình cơ bản
      brand={brandConfig}
      leftItems={leftItems}
      rightItems={rightItems}
      menuItems={menuItems}
      
      // Kiểu dáng
      isBordered
      isBlurred
      maxWidth="xl"
      position="sticky"
      
      // Điều khiển menu mobile
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      
      // Custom classNames
      classNames={{
        base: "shadow-sm",
        menu: "py-4",
        menuItem: "px-4 py-2 hover:bg-default-100 rounded-md",
      }}
    />
  );
}

// Icon helper component
function BellIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6981 21.5547 10.4458 21.3031 10.27 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}