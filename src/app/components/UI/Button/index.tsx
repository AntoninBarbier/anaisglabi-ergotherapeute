import { ReactNode } from 'react'
import styles from './styles.module.css'

interface ButtonProps {
	children: ReactNode
	href: string
}

const Button = ({ children, href }: ButtonProps) => {
	return (
		<a
			href={href}
			className={`${styles.button} inline-block font-sans border border-primary uppercase p-3 lg:p-5 self-start tracking-[2px] md:tracking-[4px]`}
		>
			{children}
		</a>
	)
}

export default Button
