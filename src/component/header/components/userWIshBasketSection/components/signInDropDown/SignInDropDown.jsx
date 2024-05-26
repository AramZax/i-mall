import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaJediOrder } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const SignInDropDown = ({ modalRef, navigate, handleLogAuth }) => {
  return (
    <div className="header-menu-burger-wrapper" ref={modalRef}>
      <ul>
        <li onClick={() => navigate("/profile")}>
          <CgProfile className="drop-icons" style={{ fontSize: 22 }} />
          my profile
        </li>
        <li onClick={() => navigate("/orders")}>
          <FaJediOrder className="drop-icons" style={{ fontSize: 22 }} />
          my orders
        </li>
        <li onClick={() => navigate("/settings")}>
          <IoSettingsOutline className="drop-icons" style={{ fontSize: 22 }} />
          settings
        </li>
        <li onClick={handleLogAuth}>
          <CiLogout className="drop-icons" style={{ fontSize: 22 }} />
          log out
        </li>
      </ul>
    </div>
  );
};

export default SignInDropDown;
