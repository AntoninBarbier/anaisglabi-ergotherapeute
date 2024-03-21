import Image from "next/image";

const FundingSection = () => {
	const tags = [
		{ text: "Financement par votre mutuelle", color: "#EDF8C9" },
		{ text: "Demande de prestation extra-légale aurpès de la sécurité sociale", color: "#F9F8DE" },
		{
			text: "Financement par la maison départementale des personnes handicapées (MDPH) via l’Allocation Education Enfant Handicapé (AEEH)",
			color: "#FFF5E5",
		},
		{ text: "Financement par les plateformes de coordination et d’orientation (PCO)", color: "#FFE9E2" },
		{ text: "Financement par les Pôles de Compétences et de prestations externalisées (PCPE)", color: "#FFE4E2" },
	];

	const services = [
		{ label: "Bilan d’ergothérapie", price: 180 },
		{ label: "Consultation alimentation", price: 60 },
		{ label: "Séance d’ergothérapie au cabinet (45 minutes)", price: 45 },
		{ label: "Séance à domicile ou à l’école (45 minutes)", price: 55 },
	];
	return (
		<section id='financements' className='content-container content-container--inner'>
			<Image src='/images/icones/document.svg' alt='Icône document' width={400} height={400} className='icon absolute w-[300px] md:w-[400px] top-[-500px] md:top-[-150px] right-0 transform rotate-12 translate-x-[30px] -z-10' />
			<h2 className='title text-green mb-8 md:mb-12'>Honoraires et financements</h2>
			<p className='mb-8 md:mb-12 text-base md:text-xl font-light'>L’ergothérapie est une profession de santé non remboursée par la sécurité sociale. Cependant, des aides existent et peuvent être mises en place :</p>
			<div className='flex flex-wrap gap-5 mb-16'>
				{tags.map((tag, index) => (
					<div key={`funding-tag-${index}`} style={{ backgroundColor: tag.color }} className='p-2 md:p-4 rounded-[10px] font-light'>
						{tag.text}
					</div>
				))}
			</div>
			<h3 className='title text-primary text-center text-2xl xl:text-3xl mb-8 md:mb-12'>Les tarifs au cabinet</h3>
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12'>
				{services.map((service, index) => (
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
