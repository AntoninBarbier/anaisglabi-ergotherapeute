import Image from "next/image";
import styles from "./styles.module.scss";

const ConsultationSection = () => {
	return (
		<>
			<section id='pour-qui' className='content-container content-container--inner relative'>
				<h2 className='title text-primary'>Pour qui ?</h2>
				<div className='mt-12'>
					<p className='text-center font-light text-xl md:text-3xl px-4 xl:px-32 my-16'>Deux cabinets à <strong>Lyon</strong> et <strong>Champagne-au-Mont-d’Or</strong>, et une équipe de plusieurs ergothérapeutes diplômées d’Etat avec différentes spécialités pour mieux répondre à vos besoins:</p>
					<ul className={`text-base md:text-xl font-light ${styles.motives_list}`}>
						<li>Troubles de l’alimentation: bébé/enfant qui a des difficultés pour s’alimenter, refuse certaines textures, panel alimentaire restreint, sélectionne des aliments etc.</li>
						<li>Aide à la mise en place de l’allaitement et accompagnement des éventuelles difficultés: Difficultés de début d’allaitement, difficultés de mise au sein, difficulté de passage au biberon, sevrage</li>
						<li>Troubles des apprentissages</li>
						<li>Troubles praxiques, graphiques: douleurs, lenteur d’écriture</li> 
						<li>Difficultés sensorielles, retard sensori-moteur</li>
						<li>Troubles du spectre de l’autisme</li>
						<li>Faible autonomie dans les activités du quotidien, à la maison et/ou à l’école</li>
					</ul>
				</div>
				<Image
				src='/images/icones/pacifier.svg'
				alt='Icône hochet'
				width={250}
				height={250}
				className='icon top-[100px] right-[0] rotate-[65deg]'
				/>
				<Image
				src='/images/icones/toy-shapes.svg'
				alt='Icône formes jouet'
				width={250}
				height={250}
				className='icon top-[150px] left-[2%] rotate-[15deg]'
				/>
				<Image
				src='/images/icones/spoons.svg'
				alt='Icônes cuillères'
				width={250}
				height={250}
				className='icon icon--inverted top-[600px] left-[50%] rotate-[55deg]'
				/>
			</section>
			<div>
				<div className={`${styles.grid} mb-32`}>
					<div className={styles.grid__item}>
						<Image src='/images/enfant-crayon.jpg' alt='Crayons pour enfants' width={640} height={853} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/allaitement.jpg' alt='Maman qui allaite son bébé' width={640} height={852} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/bebe-alimentation.jpg' alt='Bébé mangeant des pâtes - Troubles de l&pos;alimentation' width={640} height={961} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/enfant-boulier.jpg' alt='Enfant jouant avec un boulier' width={640} height={960} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ConsultationSection;
