import { ReactNode } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
	children: ReactNode;
	href: string;
	color?: "primary" | "green";
	size?: "small" | "medium" | "large";
	shape?: "normal" | "rounded";
	target?: "_blank";
};

const baseClasses = "inline-block w-fit text-center font-sans border tracking-[2px] md:tracking-[4px] uppercase xl:hover:text-white";

const colorClasses: Record<Required<ButtonProps>["color"], string> = {
	primary: `text-primary border-primary ${styles.shadow_primary}`,
	green: `text-green border-green ${styles.shadow_green}`,
};

const sizeClasses: Record<Required<ButtonProps>["size"], string> = {
	small: "text-sm p-3 lg:p-4",
	medium: "text-base p-3 lg:p-5",
	large: "text-lg p-4 lg:p-6",
};

const shapeClasses: Record<Required<ButtonProps>["shape"], string> = {
	normal: "",
	rounded: "rounded-md",
};

const Button = ({ children, href, size = "medium", color = "primary", shape = "normal", target }: ButtonProps) => {
	return (
		<a href={href} target={target} rel={target === "_blank" ? "noopener" : undefined} className={`${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${shapeClasses[shape]}`}>
			{children}
			{target === "_blank" && <span className='sr-only'> (nouvel onglet)</span>}
		</a>
	);
};

export default Button;
