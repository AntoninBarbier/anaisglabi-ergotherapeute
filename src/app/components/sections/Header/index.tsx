"use client";

import { useRef } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Button from "../../UI/Button";

const Header = () => {
	const heroImage = useRef(null);

	return (
		<header id='accueil' className='text-primary h-screen p-4 md:p-8 mb-12 md:mb-24'>
			<div className={`${styles.inner} rounded-[20px] size-full px-12 lg:px-28 flex items-center`}>
				<div className='w-full flex justify-between items-center gap-12 max-w-screen-xl 3xl:m-auto'>
					<div className='h-full flex flex-col justify-around gap-12'>
						<h1 className='title text-4xl xl:text-5xl font-black'>
							Anaïs Glabi • Ergothérapeute
							<br />
							<span className='text-2xl lg:text-4xl font-normal italic'>spécialisée en pédiatrie</span>
						</h1>
						<h2 className='text-xl font-normal'>À Lyon et Champagne-au-Mont-d&apos;Or</h2>
						<Button href='#prendre-rendez-vous'>Prendre rendez-vous</Button>
					</div>
					<div className='hidden md:block'>
						<Image src='/images/kid-playing.jpg' width={450} height={540} alt='Enfant qui joue' className='rounded-[20px]' ref={heroImage} priority />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
