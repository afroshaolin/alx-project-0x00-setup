
import { ButtonProps } from "../interfaces/index"; //Adjust the import path as necessary
import React from "react";
// import { ButtonProps } from "./interfaces/index"; // Adjust the import path as necessary


const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return <button className={styles}>{title}</button>;
};

export default Button;
// Compare this snippet from interfaces/index.ts:
// export interface ButtonProps {
//   title: string;
//   styles: string;
// }