import Image from "next/image";
import type { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "../UI/RichText";
import styles from "./styles.module.scss";

const ConsultationSection = ({ data }: { data: Content.HomepageDocumentData }) => {
	return (
		<>
			<section id='pour-qui' className='content-container content-container--inner relative'>
				<h2 className='title text-primary'>{data.for_who_title}</h2>
				<div className='mt-12'>
					<RichText field={data.for_who_intro} className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16' />
					<ul className={`text-base md:text-xl font-light list`}>
						{data.for_who_ergo_items.map((item, index) => (
							<li key={index}>{item.text}</li>
						))}
					</ul>
					<RichText field={data.for_who_ibclc_intro} className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16' />
					<ul className={`text-base md:text-xl font-light list`}>
						{data.for_who_ibclc_items.map((item, index) => (
							<li key={index}>{item.text}</li>
						))}
					</ul>
					<RichText field={data.for_who_conclusion} className='text-base md:text-xl font-light mt-16' />
				</div>
				<Image
				src='/images/icones/pacifier.svg'
				alt=''
				width={250}
				height={250}
				className='icon top-[100px] right-[0] rotate-[65deg]'
				/>
				<Image
				src='/images/icones/toy-shapes.svg'
				alt=''
				width={250}
				height={250}
				className='icon top-[150px] left-[2%] rotate-[15deg]'
				/>
				<Image
				src='/images/icones/spoons.svg'
				alt=''
				width={250}
				height={250}
				className='icon icon--inverted top-[600px] left-[50%] rotate-[55deg]'
				/>
			</section>
			<div>
				<div className={`${styles.grid} mb-32`}>
					{data.for_who_gallery.map((item, index) => (
						<div className={styles.grid__item} key={index}>
							<PrismicNextImage field={item.image} fallbackAlt='' sizes='(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw' />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default ConsultationSection;
