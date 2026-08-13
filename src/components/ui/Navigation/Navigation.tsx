import navItems from "../../../data/navigation";

import styles from "./Navigation.module.css";

type NavigationProps = {
    variant?: "light" | "dark";
};

const Navigation = ({ variant = "light" }: NavigationProps) => {
    return (
        <nav className={`${styles.navigation} ${styles[variant]}`}>
            <ul className={`${styles.menu} text_16`}>
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;