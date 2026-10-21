import type { Content } from "@prismicio/client";
import RichText from "../UI/RichText";

const IBCLCSection = ({ data }: { data: Content.HomepageDocumentData }) => {
	return (
		<section id='ibcl' className='content-container content-container--inner'>
			<h2 className='title text-primary'>{data.ibclc_title}</h2>
			<div className='flex flex-col lg:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<RichText field={data.ibclc_text} className='text-base md:text-xl font-light' />
			</div>
		</section>
	);
};

export default IBCLCSection;
