import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count } from "../../store/features/counter/counterSelector";
import { userBasket } from "../../store/features/basket/basketSelector";
import { useForm } from "react-hook-form";
import { registerSchema } from "./components/registerModal/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { increment } from "../../store/features/counter/counterSlice";

export const useHeader = () => {
  const [saveUserBassket, setUsetBassket] = useState([]);
  const [saveUserWish, setSaveUserWish] = useState([]);
  const [registerModal, setRegisterModal] = useState(false);
  const userWishCount = useSelector(count);
  const userBasketCount = useSelector(userBasket);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  //function for get RegisterModal values
  const registerSubmit = (data) => {
    localStorage.setItem("userRgister", JSON.stringify(data));
    navigate("/UserWish");
    setRegisterModal((prev) => !prev);
  };

  //function for open registerModal
  const handleClickBasket = () => {
    const handleCheckUserRegister = localStorage.getItem("userRgister");
    if (!handleCheckUserRegister) {
      setRegisterModal((prev) => !prev);
      const body = document.body;
      body.style.overflow = "hidden";
    } else {
      navigate("/UserWish");
    }
  };

  //function for close register modal
  const handleCloseRegisterModal = () => {
    setRegisterModal((prev) => !prev);
  };

  //function for dont close modal in click inside
  const handleAoutSideClick = (event) => {
    event.stopPropagation();
  };

  //function for get userBasske and userWishLostt in local storage
  useEffect(() => {
    setUsetBassket(JSON.parse(localStorage.getItem("userBassket")));
    setSaveUserWish(JSON.parse(localStorage.getItem("productWish")));
  }, []);

  //function for handle register error
  useEffect(() => {
    Object.entries(errors).forEach(([fieldName, error]) => {
      toast.error(`${fieldName}: ${error.message}`);
    });
  }, [errors]);

  return {
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
  };
};
