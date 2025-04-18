"use client";

import { useEffect, useState } from "react";
import useIsMobile from "@/app/hooks/useIsMobile";
import Burger from "../UI/Burger";

const Navigation = () => {
	const [activeItem, setActiveItem] = useState(0);
	const [isInvisible, setIsInvisible] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const isMobile = useIsMobile();

	const toggleNavigation = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			const sections = document.querySelectorAll("header, section");
			const scrollPosition = window.scrollY;

			if (!isInvisible && scrollPosition > 200) {
				setIsInvisible(true);
			}

			if (isInvisible && scrollPosition < 200) {
				setIsInvisible(false);
			}

			if (!isSticky && scrollPosition > window.innerHeight) {
				setIsSticky(true);
			}

			if (isSticky && scrollPosition < window.innerHeight) {
				setIsSticky(false);
			}

			sections.forEach((section, index) => {
				const top = section.offsetTop - 150;
				const bottom = top + section.offsetHeight;

				if (scrollPosition >= top && scrollPosition < bottom) {
					setActiveItem(index);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isSticky, isInvisible]);
	return (
		<>
			<nav className={`navigation ${isSticky ? "navigation--sticky" : ""} ${isInvisible ? "navigation--invisible" : ""}`}>
				<ul className='text-primary w-full justify-end md:justify-center gap-12 hidden md:flex'>
					<li className={`navigation__item ${activeItem === 0 ? "navigation__item--active" : ""}`}>
						<a href='#accueil'>Accueil</a>
					</li>
					<li className={`navigation__item ${activeItem === 1 ? "navigation__item--active" : ""}`}>
						<a href='#ergotherapie'>L&apos;ergothérapie</a>
					</li>
					<li className={`navigation__item ${activeItem === 2 ? "navigation__item--active" : ""}`}>
						<a href='#ergotherapie'>Lactation IBCLC</a>
					</li>
					<li className={`navigation__item ${activeItem === 3 ? "navigation__item--active" : ""}`}>
						<a href='#pour-qui'>Pour qui ?</a>
					</li>
					<li className={`navigation__item ${activeItem === 4 ? "navigation__item--active" : ""}`}>
						<a href='#qui-suis-je'>Qui suis-je ?</a>
					</li>
					<li className={`navigation__item ${activeItem === 5 ? "navigation__item--active" : ""}`}>
						<a href='#prendre-rendez-vous'>Prendre rendez-vous</a>
					</li>
					<li className={`navigation__item ${activeItem === 6 ? "navigation__item--active" : ""}`}>
						<a href='#financements'>Financements</a>
					</li>
				</ul>
			</nav>
			<Burger onClick={toggleNavigation} isOpen={isOpen} isSticky={isSticky} isInvisible={isInvisible} />
			<div className={`navigation_side_panel ${isOpen ? "navigation_side_panel--open" : ""}`}>
				<div className='backdrop' onClick={toggleNavigation}></div>
				<ul className='panel'>
					{/* <li className={`navigation__item`}>
						<a href='#accueil' onClick={toggleNavigation}>Accueil</a>
					</li> */}
					<li className={`navigation__item`}>
						<a href='#ergotherapie' onClick={toggleNavigation}>L&apos;ergothérapie</a>
					</li>
					<li className={`navigation__item`}>
						<a href='#pour-qui' onClick={toggleNavigation}>Pour qui ?</a>
					</li>
					<li className={`navigation__item`}>
						<a href='#qui-suis-je' onClick={toggleNavigation}>Qui suis-je ?</a>
					</li>
					<li className={`navigation__item`}>
						<a href='#prendre-rendez-vous' onClick={toggleNavigation}>Prendre rendez-vous</a>
					</li>
					<li className={`navigation__item`}>
						<a href='#financements' onClick={toggleNavigation}>Financements</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
