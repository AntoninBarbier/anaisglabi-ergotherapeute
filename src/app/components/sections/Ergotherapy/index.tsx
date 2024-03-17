import Image from "next/image";

const ErgotherapySection = () => {
	return (
		<section id='ergotherapie' className='content-container content-container--inner'>
			<h2 className='title text-primary'>Qu&apos;est-ce que l&apos;ergothérapie ?</h2>
			<div className='flex flex-col lg:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<Image src='/images/kid-playing-2.png' className='rounded-[20px] w-full md:w-3/4 lg:min-w-[450px]' alt='Enfant jouant avec un boulier' width={490} height={437} />
				<p className='text-base md:text-xl font-light'>
					L’ergothérapeute est un <strong>professionnel de santé.</strong>
					<br />
					<br />
					L’ergothérapie est une pratique fondée sur le lien entre <strong>l’activité humaine</strong> et <strong>la santé</strong>.
					<br />
					<br />
					L’objectif de l’ergothérapie est de <strong>maintenir, restaurer et permettre les activités humaines</strong> de manière sécurisée, autonome et efficace.
					<br />
					<br />
					Pour cela, elle prévient, réduit ou supprime les situations de handicap en tenant compte des habitudes de vie des personnes et de leur environnement. L’ergothérapeute est l’intermédiaire entre les besoins d’adaptation de la personne et les exigences de la vie en société.
				</p>
			</div>
			<Image
				src='/images/icones/puzzle.svg'
				alt='Icône puzzle'
				width={500}
				height={500}
				className='icon top-[-50px] right-[-0px] -z-10 rotate-[65deg]'
			/>
		</section>
	);
};

export default ErgotherapySection;
