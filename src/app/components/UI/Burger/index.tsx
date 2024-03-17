import styles from "./style.module.scss";
import { useState } from "react";

type BurgerProps = {
	onClick: () => void;
	isOpen: boolean;
	isSticky: boolean;
	isInvisible: boolean;
};

const Burger = ({ onClick, isOpen = false, isSticky = false, isInvisible = false }: BurgerProps) => {
	return (
		<li className={`${styles.burger} ${isOpen ? styles["burger--open"] : ""} ${isSticky ? styles["burger--sticky"] : ""} ${isInvisible ? styles["burger--invisible"] : ""}`} onClick={onClick}>
			<div>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</li>
	);
};

export default Burger;
