import { useSelector } from "react-redux";
import { count } from "../../../store/features/counter/counterSelector";
import { useEffect, useState } from "react";

export const useUSerWish = () => {
  const userWishCount = useSelector(count);
  const [saveUserWish, setSaveUserWish] = useState([]);

  //function for get userBasske and userWishLostt in local storage
  useEffect(() => {
    setSaveUserWish(JSON.parse(localStorage.getItem("productWish")));
  }, []);

  return { userWishCount, saveUserWish };
};
