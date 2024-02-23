import Image from 'next/image'

const AboutSection = () => {
	return (
		<section className='content-container content-container--inner relative'>
			<h2 className='title text-primary'>Qui suis-je ?</h2>
			<p className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16'>
				Spécialisée en pédiatrie, j’accompagne les enfants tout au long de leur développement, de la naissance jusqu’aux études
				supérieures.
			</p>
			<div className='flex flex-col xl:flex-row items-center mt-12 gap-8 lg:gap-20'>
				<div className='flex flex-col gap-5'>
					<Image
						src='/images/anais-glabi-ergotherapeute.jpg'
						className='rounded-[50%] w-3/4  md:w-full lg:w-1/2 m-auto lg:min-w-[450px]'
						alt='Anaïs Glabi | Ergothérapeute'
						width={500}
						height={500}
					/>
					<p className='text-primary font-black text-center text-2xl'>Anaïs Glabi</p>
					<p className='text-xl text-secondary text-center font-light italic px-10'>
						Ergothérapeute D.E. diplômée de l’ISTR de Lyon en juin 2018
					</p>
				</div>
				<p className='text-base md:text-xl font-light'>
					Je me suis dans un premier temps formée à l’accompagnement des enfants ayant des troubles des apprentissages, et à la
					rééducation de la motricité fine en pédiatrie (2019). En 2020, j’ai obtenu le diplôme universitaire de
					neuropsychopathologie des apprentissages scolaires à la faculté de médecine de Lyon I. Pour compléter cette formation,
					je me suis aussi formée à la méthode ABC Boum, méthode de rééducation de l’écriture.
					<br />
					<br />
					Devenir maman a changé ma façon d’exercer et mon regard sur mes accompagnements: travailler avec les tous petits, en
					partenariat avec les parents est devenu une évidence. Je me suis donc formée à l’accompagnement des enfants porteurs de
					troubles de l’alimentation avec Marie Ruffier-Bourdet, puis aux difficultés alimentaires du bébé et leur accompagnement
					en ergothérapie. Cette année 2024, j’aspire à devenir consultante en lactation IBCLC, je me forme donc actuellement en
					vue de passer cette certification qui viendra compléter mon parcours pour accompagner les mamans et leur bébé dès la
					grossesse, et tout au long de leur allaitement. Aux cabinets, je travaille avec mes collègues Delphine Admirat, Alice
					Colas, Camille Grandjean, Charlène Monnin et Sarah Piron.
				</p>
			</div>
			<Image
				src='/images/icones/ball.svg'
				alt='Icône ballon'
				width={500}
				height={500}
				className='icon absolute top-[50px] left-[-150px] -z-10'
			/>
		</section>
	)
}

export default AboutSection
