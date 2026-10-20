"use client";

import { useEffect, useRef, useState } from "react";
import Burger from "../UI/Burger";

const Navigation = () => {
	const [activeItem, setActiveItem] = useState(0);
	const [isInvisible, setIsInvisible] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const burgerRef = useRef(null);
	const firstLinkRef = useRef(null);

	const toggleNavigation = () => {
		setIsOpen((open) => !open);
	};

	const closeNavigation = () => {
		setIsOpen(false);
	};

	// Mobile menu behaves like a modal: page content is inert while it is open,
	// focus moves into the menu, and Escape closes it.
	useEffect(() => {
		const pageContent = document.querySelectorAll("header, main");
		pageContent.forEach((element) => (element.inert = isOpen));

		if (!isOpen) return;

		firstLinkRef.current?.focus();

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
				burgerRef.current?.focus();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			pageContent.forEach((element) => (element.inert = false));
		};
	}, [isOpen]);

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
			<nav aria-label='Menu principal' className={`navigation ${isSticky ? "navigation--sticky" : ""} ${isInvisible ? "navigation--invisible" : ""}`}>
				<ul className='text-primary w-full justify-center gap-6 xl:gap-12 hidden lg:flex whitespace-nowrap'>
					<li className={`navigation__item ${activeItem === 0 ? "navigation__item--active" : ""}`}>
						<a href='#accueil'>Accueil</a>
					</li>
					<li className={`navigation__item ${activeItem === 1 ? "navigation__item--active" : ""}`}>
						<a href='#ergotherapie'>L&apos;ergothérapie</a>
					</li>
					<li className={`navigation__item ${activeItem === 2 ? "navigation__item--active" : ""}`}>
						<a href='#ibcl'>Lactation IBCLC</a>
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
			<Burger ref={burgerRef} onClick={toggleNavigation} isOpen={isOpen} isSticky={isSticky} isInvisible={isInvisible} />
			<div className={`navigation_side_panel ${isOpen ? "navigation_side_panel--open" : ""}`}>
				<div className='backdrop' aria-hidden='true' onClick={closeNavigation}></div>
				<nav id='mobile-menu' aria-label='Menu principal' inert={!isOpen}>
					<ul className='panel'>
						<li className={`navigation__item`}>
							<a href='#ergotherapie' onClick={closeNavigation} ref={firstLinkRef}>L&apos;ergothérapie</a>
						</li>
						<li className={`navigation__item`}>
							<a href='#ibcl' onClick={closeNavigation}>Lactation IBCLC</a>
						</li>
						<li className={`navigation__item`}>
							<a href='#pour-qui' onClick={closeNavigation}>Pour qui ?</a>
						</li>
						<li className={`navigation__item`}>
							<a href='#qui-suis-je' onClick={closeNavigation}>Qui suis-je ?</a>
						</li>
						<li className={`navigation__item`}>
							<a href='#prendre-rendez-vous' onClick={closeNavigation}>Prendre rendez-vous</a>
						</li>
						<li className={`navigation__item`}>
							<a href='#financements' onClick={closeNavigation}>Financements</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Navigation;
