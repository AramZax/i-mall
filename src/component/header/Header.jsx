import React from "react";
import "../header/header.scss";
import { useHeader } from "./useHeader";
import UserWishBAsketSection from "./components/userWIshBasketSection/UserWishBasketSection";
import RegisterModal from "./components/registerModal/RegisterModal";

const Header = () => {
  const {
    saveUserBassket,
    userWishCount,
    userBasketCount,
    saveUserWish,
    registerModal,
    errors,
    handleClickBasket,
    handleCloseRegisterModal,
    handleAoutSideClick,
    registerSubmit,
    handleSubmit,
    register,
    navigate,
  } = useHeader();

  return (
    <div className="header-wrapper">
      <div className="header-title-section" onClick={() => navigate("/")}>
        <h1>SIA - Shop</h1>
      </div>
      <div className="header-category-sectoion">
        <ul>
          <li>For Man</li>
          <li>For Woman</li>
          <li>For Kids</li>
        </ul>
      </div>
      <UserWishBAsketSection
        userBasketCount={userBasketCount}
        saveUserBassket={saveUserBassket}
        userWishCount={userWishCount}
        saveUserWish={saveUserWish}
        handleClickBasket={handleClickBasket}
        navigate={navigate}
      />
      <RegisterModal
        registerModal={registerModal}
        errors={errors}
        handleCloseRegisterModal={handleCloseRegisterModal}
        handleAoutSideClick={handleAoutSideClick}
        registerSubmit={registerSubmit}
        handleSubmit={handleSubmit}
        register={register}
      />
    </div>
  );
};
export default Header;
