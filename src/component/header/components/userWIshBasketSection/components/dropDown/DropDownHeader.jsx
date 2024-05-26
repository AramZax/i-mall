import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaJediOrder } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

const DropDownHeader = ({ modalRef, navigate, checkUserRegister }) => {
  return (
    <div className="header-menu-burger-wrapper" ref={modalRef}>
      <ul>
        <li
          onClick={() =>
            !checkUserRegister?.email
              ? navigate("/register")
              : navigate("/profile")
          }
        >
          <CgProfile className="drop-icons" style={{ fontSize: 22 }} />
          my profile
        </li>
        <li
          onClick={() =>
            !checkUserRegister?.email
              ? navigate("/register")
              : navigate("/orders")
          }
        >
          <FaJediOrder className="drop-icons" style={{ fontSize: 22 }} />
          my orders
        </li>
        <li
          onClick={() =>
            !checkUserRegister?.email
              ? navigate("/register")
              : navigate("/settings")
          }
        >
          <IoSettingsOutline className="drop-icons" style={{ fontSize: 22 }} />
          settings
        </li>
        <li onClick={() => navigate("/register")}>
          <CiLogout className="drop-icons" style={{ fontSize: 22 }} /> sign In
        </li>
      </ul>
    </div>
  );
};
export default DropDownHeader;
