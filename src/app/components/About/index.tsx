import Image from "next/image";

const AboutSection = () => {
	return (
		<section id='qui-suis-je' className='content-container content-container--inner'>
			<h2 className='title text-primary'>Qui suis-je ?</h2>
			<p className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16'>Spécialisée en pédiatrie, j’accompagne les enfants tout au long de leur développement, de la naissance jusqu’aux études supérieures.<br/>Dans mon activité de consultante en lactation, j’accompagne les parents et leur bébé dans leur aventure d’allaitement, de la grossesse jusqu’au sevrage.</p>
			<div className='flex flex-col xl:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<div className='flex flex-col gap-5'>
					<Image src='/images/anais-glabi-ergotherapeute.jpg' className='rounded-[50%] w-3/4  md:w-full lg:w-1/2 m-auto lg:min-w-[450px]' alt='Anaïs Glabi | Ergothérapeute' width={500} height={500} />
					<p className='text-primary font-black text-center text-2xl'>Anaïs Glabi-Mus</p>
					<p className='text-xl text-secondary text-center font-light italic px-10'>Ergothérapeute D.E.</p>
				</div>
				<p className='text-base md:text-xl font-light'>
					Diplômée de l’ISTR de Lyon en juin 2018, je me suis dans un premier temps formée à l’accompagnement des enfants ayant des troubles des apprentissages, et à la rééducation de la motricité fine en pédiatrie (2019). En 2020, j’ai obtenu le Diplôme Universitaire de Neuropsychopathologie des Apprentissages Scolaires à la
					Faculté de Médecine de Lyon I. Pour compléter cet enseignement, je me suis aussi formée à la méthode ABC Boum, méthode de rééducation de l’écriture.
					<br />
					<br />
					Devenir maman a changé ma façon d’exercer et mon regard sur mes suivis: travailler avec les tout-petits, en partenariat avec les parents est devenu une évidence. Je me suis donc formée à l’accompagnement des enfants porteurs de troubles de l’alimentation avec Marie
					Ruffier-Bourdet, puis aux difficultés alimentaires du bébé et leur accompagnement en ergothérapie.<br/>
					<br/>
					Depuis janvier 2025, j’ai obtenu la certification de consultante en lactation IBCLC, cette certification vient compléter mon parcours pour accompagner les mamans et leur bébé dès la grossesse, et tout au long de leur allaitement.
				</p>
			</div>
			<Image src='/images/icones/ball.svg' alt='Icône ballon' width={500} height={500} className='icon absolute top-[-250px] left-[-150px] -z-10 hidden md:block' />
		</section>
	);
};

export default AboutSection;
