import Image from "next/image";

const IBCLCSection = () => {
	return (
		<section id='ibcl' className='content-container content-container--inner'>
			<h2 className='title text-primary'>Qu&apos;est ce qu&apos;un consultant en lactation IBCLC ?</h2>
			<div className='flex flex-col lg:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<p className='text-base md:text-xl font-light'>
					Un consultant en lactation IBCLC est un professionnel de santé spécialiste de l’allaitement maternel et de la lactation humaine. Une formation approfondie permet d’accompagner et de résoudre la plupart des problèmes d’allaitement. Un consultant en lactation a une capacité
					d’écoute et est une aide de qualité pour les mamans et les bébés. La certification IBCLC (International Board Certified Lactation Consultant) est délivrée par l’IBLCE (International Board of Lactation Consultant Examiners). Elle est revalisée tous les 5 ans par de la formation
					continue, et tous les 10 ans par examens, cela garantie aux consultants en lactation IBCLC d’être informés des dernières connaissances en matière d’allaitement.
				</p>
				{/* <Image src='/images/kid-playing-2.jpg' className='rounded-[20px] w-full md:w-3/4 lg:min-w-[450px]' alt='Enfant jouant avec un boulier' width={640} height={540} /> */}
			</div>
		</section>
	);
};

export default IBCLCSection;
