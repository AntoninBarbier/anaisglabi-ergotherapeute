import Image from "next/image";
import type { Content } from "@prismicio/client";
import RichText from "../UI/RichText";

// Background of the funding tags, cycled in order
const TAG_COLORS = ["#EDF8C9", "#F9F8DE", "#FFF5E5", "#FFE9E2", "#FFE4E2"];

const FundingSection = ({ data }: { data: Content.HomepageDocumentData }) => {
	const prices = data.fees_prices.filter((service) => service.label && service.price !== null);

	return (
		<section id='financements' className='content-container content-container--inner'>
			<Image src='/images/icones/document.svg' alt='' width={400} height={400} className='icon absolute w-[300px] md:w-[400px] top-[-500px] md:top-[-150px] right-0 transform rotate-12 translate-x-[30px] -z-10' />
			<h2 className='title text-green mb-8 md:mb-12'>{data.fees_title}</h2>
			<RichText field={data.fees_intro} className='mb-8 md:mb-12 text-base md:text-xl font-light' />
			<ul className='flex flex-wrap gap-5 mb-16'>
				{data.fees_fundings.map((tag, index) => (
					<li key={`funding-tag-${index}`} style={{ backgroundColor: TAG_COLORS[index % TAG_COLORS.length] }} className='p-2 md:p-4 rounded-[10px] font-light'>
						{tag.text}
					</li>
				))}
			</ul>
			<h3 className='title text-primary text-center text-2xl xl:text-3xl mb-8 md:mb-12'>{data.fees_prices_title}</h3>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12'>
				{prices.map((service, index) => (
					<div
						key={`price-card-${index}`}
						style={{
							background: "linear-gradient(135deg, #FFE3E1 0%, #FFF5E4 100%)",
						}}
						className='p-2.5 xl:p-4 rounded-[20px] grid grid-rows-[2fr_3fr] md:grid-rows-[1fr_2fr]'
					>
						<p className='text-primary text-sm md:text-lg font-bold mb-4 text-center self-center'>{service.label}</p>
						<div className='bg-white rounded-[10px] flex items-center justify-center'>
							<span className='text-primary font-bold text-3xl md:text-5xl'>{service.price}€</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FundingSection;
