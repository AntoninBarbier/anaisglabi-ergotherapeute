import Image from "next/image";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../UI/RichText";

const ErgotherapySection = ({ data }: { data: Content.HomepageDocumentData }) => {
	return (
		<section id='ergotherapie' className='content-container content-container--inner'>
			<h2 className='title text-primary'>{data.ergo_title}</h2>
			<div className='flex flex-col lg:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<PrismicNextImage field={data.ergo_image} fallbackAlt='' className='rounded-[20px] w-full md:w-3/4 lg:min-w-[450px]' sizes='(min-width: 1024px) 50vw, (min-width: 768px) 75vw, 100vw' />
				<RichText field={data.ergo_text} className='text-base md:text-xl font-light' />
			</div>
			<Image
				src='/images/icones/puzzle.svg'
				alt=''
				width={400}
				height={400}
				className='icon icon--translation-reduced top-[-50px] right-[-0px] -z-10 rotate-[65deg] hidden md:block'
			/>
		</section>
	);
};

export default ErgotherapySection;
