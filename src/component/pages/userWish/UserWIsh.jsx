import React from "react";
import { useUSerWish } from "./useUserWish";
import "./userWish.scss";

const UserWish = () => {
  const { userWishCount, saveUserWish } = useUSerWish();

  return (
    <div className="user-wish-wrapper">
      <div className="user-wish-content"></div>
    </div>
  );
};
export default UserWish;
