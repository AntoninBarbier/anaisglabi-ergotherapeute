import { preload } from "react-dom";
import { asImageSrc, asImageWidthSrcSet, isFilled, type Content } from "@prismicio/client";
import styles from "./styles.module.scss";
import Button from "../UI/Button";
import { InlineRichText } from "../UI/RichText";

// The hero picture is hidden on mobile: preload it for tablet/desktop only,
// so phones do not download it ahead of the title.
const HERO_MEDIA = "(min-width: 768px)";
const HERO_WIDTH = 450;

const Header = ({ data }: { data: Content.HomepageDocumentData }) => {
	const image = data.header_image;
	const hero = isFilled.image(image)
		? {
				src: asImageSrc(image, { w: HERO_WIDTH }) as string,
				srcSet: asImageWidthSrcSet(image, { widths: [HERO_WIDTH, HERO_WIDTH * 2] })?.srcset,
				height: Math.round((HERO_WIDTH * image.dimensions.height) / image.dimensions.width),
				alt: image.alt ?? "",
			}
		: null;

	if (hero) {
		preload(hero.src, { as: "image", imageSrcSet: hero.srcSet, imageSizes: `${HERO_WIDTH}px`, fetchPriority: "high", media: HERO_MEDIA });
	}

	return (
		<header id='accueil' className='text-primary h-screen p-4 md:p-8 mb-12 md:mb-24'>
			<div className={`${styles.inner} rounded-[20px] size-full px-12 lg:px-28 flex items-center`}>
				<div className='w-full flex justify-between items-center gap-12 max-w-screen-xl 3xl:m-auto'>
					<div className='h-full flex flex-col justify-around gap-12'>
						<h1 className='title text-3xl md:text-4xl font-black'>
							{data.header_name} <span className="hidden md:inline">•</span> {data.header_job}
							<br />
							<span className='text-xl md:text-2xl font-normal italic'>
								<InlineRichText field={data.header_subtitle} />
							</span>
						</h1>
						<p className='text-xl font-normal'>{data.header_location}</p>
						<Button href='#prendre-rendez-vous'>{data.header_cta_label}</Button>
					</div>
					{hero && (
						<div className='hidden md:block'>
							{/* eslint-disable-next-line @next/next/no-img-element -- Prismic (imgix) URLs, preloaded above for tablet/desktop only */}
							<img src={hero.src} srcSet={hero.srcSet} sizes={`${HERO_WIDTH}px`} width={HERO_WIDTH} height={hero.height} alt={hero.alt} className='rounded-[20px]' loading='lazy' fetchPriority='high' />
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
