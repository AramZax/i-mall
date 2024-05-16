import { useState } from "react";

export const useUserWishBasketSection = () => {
  const [menuBurger, setMenuBurger] = useState(false);

  const handleOpenMenuBurger = () => {
    setMenuBurger((prev) => !prev);
  };

  return { menuBurger, handleOpenMenuBurger };
};
