import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../../helpers/outhSideClick";

export const useUserWishBasketSection = (navigate) => {
  const [menuBurger, setMenuBurger] = useState(false);
  const [checkUserRegister, setCheckUserRegister] = useState(null);
  const modalRef = useRef();

  const handleOpenMenuBurger = () => {
    setMenuBurger((prev) => !prev);
  };

  useOutsideClick(modalRef, handleOpenMenuBurger);

  const handleLogAuth = () => {
    localStorage.removeItem("userRgister");
    setMenuBurger((prev) => !prev);
    navigate("/");
  };

  useEffect(() => {
    setCheckUserRegister(JSON.parse(localStorage.getItem("userRgister")));
  }, []);

  return {
    handleLogAuth,
    handleOpenMenuBurger,
    modalRef,
    checkUserRegister,
    menuBurger,
  };
};
