import { preload } from "react-dom";
import { getImageProps } from "next/image";
import styles from "./styles.module.scss";
import Button from "../UI/Button";

// The hero picture is hidden on mobile: preload it for tablet/desktop only,
// so phones do not download it ahead of the title.
const HERO_MEDIA = "(min-width: 768px)";

const Header = () => {
	const { props: heroImage } = getImageProps({ src: "/images/kid-playing.jpg", width: 450, height: 540, alt: "Enfant qui joue", sizes: "450px" });

	preload(heroImage.src, { as: "image", imageSrcSet: heroImage.srcSet, imageSizes: heroImage.sizes, fetchPriority: "high", media: HERO_MEDIA });

	return (
		<header id='accueil' className='text-primary h-screen p-4 md:p-8 mb-12 md:mb-24'>
			<div className={`${styles.inner} rounded-[20px] size-full px-12 lg:px-28 flex items-center`}>
				<div className='w-full flex justify-between items-center gap-12 max-w-screen-xl 3xl:m-auto'>
					<div className='h-full flex flex-col justify-around gap-12'>
						<h1 className='title text-3xl md:text-4xl font-black'>
							Anaïs Glabi-Mus <span className="hidden md:inline">•</span> Ergothérapeute
							<br />
							<span className='text-xl md:text-2xl font-normal italic'>Ergothérapeute et consultante en lactation certifiée IBCLC<br/>Spécialisée en pédiatrie et en lactation humaine à Lyon et dans l’ouest Lyonnais.</span>
						</h1>
						<p className='text-xl font-normal'>À Lyon et Champagne-au-Mont-d&apos;Or</p>
						<Button href='#prendre-rendez-vous'>Prendre rendez-vous</Button>
					</div>
					<div className='hidden md:block'>
						{/* eslint-disable-next-line @next/next/no-img-element -- optimized src/srcSet come from getImageProps */}
						<img {...heroImage} alt={heroImage.alt} className='rounded-[20px]' loading='lazy' fetchPriority='high' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
