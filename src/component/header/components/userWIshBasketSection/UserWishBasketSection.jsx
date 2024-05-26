import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useUserWishBasketSection } from "./useUserWishBasketSection";
import SignInDropDown from "./components/signInDropDown/SignInDropDown";
import DropDownHeader from "./components/dropDown/DropDownHeader";

const UserWishBAsketSection = ({
  userBasketCount,
  saveUserBassket,
  userWishCount,
  saveUserWish,
  handleClickBasket,
  navigate,
}) => {
  const {
    handleLogAuth,
    handleOpenMenuBurger,
    modalRef,
    checkUserRegister,
    menuBurger,
  } = useUserWishBasketSection(navigate);

  return (
    <div className="header-basket-section">
      <div className="header-bassket-wrapper">
        {!userBasketCount?.length && !saveUserBassket?.length ? (
          <CgShoppingCart style={{ fontSize: 24, color: "white" }} />
        ) : (
          <span>
            {userBasketCount?.length || saveUserBassket?.length} Bassket
          </span>
        )}
      </div>
      <div className="header-wish-wrapper" onClick={handleClickBasket}>
        {!userWishCount.length && !saveUserWish?.length ? (
          <AiOutlineLike style={{ fontSize: 24, color: "white" }} />
        ) : (
          <span>{userWishCount?.length || saveUserWish?.length} Wish</span>
        )}
      </div>
      <button onClick={handleOpenMenuBurger} >
        <RxHamburgerMenu style={{ fontSize: 24, color: "white" }} />
      </button>

      {menuBurger && checkUserRegister?.email ? (
        <SignInDropDown
          modalRef={modalRef}
          navigate={navigate}
          handleLogAuth={handleLogAuth}
        />
      ) : (
        menuBurger && (
          <DropDownHeader
            modalRef={modalRef}
            navigate={navigate}
            checkUserRegister={checkUserRegister}
          />
        )
      )}
    </div>
  );
};
export default UserWishBAsketSection;
