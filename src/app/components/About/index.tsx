import Image from "next/image";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../UI/RichText";

const AboutSection = ({ data }: { data: Content.HomepageDocumentData }) => {
	return (
		<section id='qui-suis-je' className='content-container content-container--inner'>
			<h2 className='title text-primary'>{data.about_title}</h2>
			<RichText field={data.about_intro} className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16' />
			<div className='flex flex-col xl:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<div className='flex flex-col gap-5'>
					<PrismicNextImage field={data.about_photo} fallbackAlt='' className='rounded-[50%] w-3/4  md:w-full lg:w-1/2 m-auto lg:min-w-[450px] border-2 border-primary' width={500} height={500} sizes='(min-width: 768px) 500px, 75vw' />
					<p className='text-primary font-black text-center text-2xl'>{data.about_name}</p>
					<p className='text-xl text-secondary text-center font-light italic px-10'>{data.about_job_title}</p>
				</div>
				<RichText field={data.about_text} className='text-base md:text-xl font-light' />
			</div>
			<Image src='/images/icones/ball.svg' alt='' width={500} height={500} className='icon absolute top-[-250px] left-[-150px] -z-10 hidden md:block' />
		</section>
	);
};

export default AboutSection;
