import styles from "./Button.module.css";
import arrow from "../../../assets/icons/arrow-right.svg";

import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button className={`${styles.button} ${className ?? ""} text_16`} {...props}>
            <span className={styles.text}>
                {children}
            </span>

            <img
                src={arrow}
                alt=""
                className={styles.arrow}
            />
        </button>
    );
}

export default Button;
