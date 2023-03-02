import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/WordSlice";

const ButtonLanguage = () => {
  const selectedLanguage = useSelector((state) => state.apps.selectedLanguage);
  const dispatch = useDispatch();
  return (
    <select
      name="lang"
      id="lang"
      value={selectedLanguage}
      onChange={(e) => dispatch(changeLanguage(e.target.value))}
    >
      <option value="TR">Türkçe</option>
      <option value="ENG">English</option>
    </select>
  );
};

export default ButtonLanguage;
