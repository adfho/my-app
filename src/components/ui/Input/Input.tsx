import styles from "./Input.module.css";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  return <input className={`${styles.input} ${className ?? ""} text_16`} {...props} />;
};

export default Input;
