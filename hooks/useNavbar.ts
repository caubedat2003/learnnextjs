import React from "react";

// Hook để quản lý trạng thái navbar (optional)
export default function useNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = React.useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = React.useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    openMenu,
    setIsMenuOpen,
  };
}
