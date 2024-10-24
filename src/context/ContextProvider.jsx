import React, { useContext } from "react";

const StateContext = React.createContext(null);

const theme = {
  primary: "#DA774A",
  light_primary: "#FFF6E5",
  secondary: "#2D0F0F",
  secondary2: "#FFB017",
  success: "#477F24",
  light_success: "#E8EFF4",
  grey: "#EBEBEB",
  light_grey: "#F3F3F3",
  dark_grey: "#DEDEDE",
  pending: "#B37B10",
  pending_light: "#FFB01733",
  danger: "#D80C2F",
  danger_light: "#D80C2F33",
  dark: "#000000",
  dark_primary: "#5A5A5A",
  dark_secondary: "#857474",
  blue: "#4678E9",
  bottom_border: "#E8EFF4",
  // Primary Colors
  primary_b50: "#fbf1ed",
  primary_b75: "#f0c7b5",
  primary_b100: "#eab096",
  primary_b200: "#e08e69",
  primary_b300: "#da774a",
  primary_b400: "#995334",
  primary_b500: "#85492d",
  //Secondary Colors
  secondary_50: "#fff7e8",
  secondary_75: "#ffdfa0",
  secondary_100: "#ffd178",
  secondary_200: "#ffbd3e",
  secondary_300: "#ffb017",
  secondary_400: "#b37b10",
  secondary_500: "#9c6b0e",
  //Dark Colors
  dark_b50: "#eae7e7",
  dark_b75: "#a99d9d",
  dark_b100: "#857474",
  dark_b200: "#513838",
  dark_b300: "#2d0f0f",
  dark_b400: "#1f0b0b",
  dark_b500: "#1b0909",
  //Positive Confirmation Success Colors
  success_g50: "#f1faeb",
  success_g75: "#c6ecaf",
  success_g100: "#aee48d",
  success_g200: "#8cd95c",
  success_g300: "#74d13b",
  success_g400: "#519229",
  success_g500: "#477f24",
  //Information Colors Blue
  blue_b50: "#e9effc",
  blue_b75: "#a4bcf4",
  blue_b100: "#7ea0f0",
  blue_b200: "#4678e9",
  blue_b300: "#205ce5",
  blue_b400: "#1640a0",
  blue_b500: "#14388c",
  //Danger Colors
  danger_r50: "#fbe7ea",
  danger_r75: "#ef9baa",
  danger_r100: "#e87286",
  danger_r200: "#df3552",
  danger_r300: "#d80c2f",
  danger_r400: "#970821",
  danger_r500: "#84071d",
};

const ContextProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
