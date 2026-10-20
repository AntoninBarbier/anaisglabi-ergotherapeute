import { Ref } from "react";
import styles from "./style.module.scss";

type BurgerProps = {
	onClick: () => void;
	isOpen: boolean;
	isSticky: boolean;
	isInvisible: boolean;
	ref?: Ref<HTMLButtonElement>;
};

const Burger = ({ onClick, isOpen = false, isSticky = false, isInvisible = false, ref }: BurgerProps) => {
	return (
		<button
			ref={ref}
			type='button'
			aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
			aria-expanded={isOpen}
			aria-controls='mobile-menu'
			className={`${styles.burger} ${isOpen ? styles["burger--open"] : ""} ${isSticky ? styles["burger--sticky"] : ""} ${isInvisible ? styles["burger--invisible"] : ""}`}
			onClick={onClick}
		>
			<div aria-hidden='true'>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>
	);
};

export default Burger;
