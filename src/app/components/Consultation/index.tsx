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
						<li>Troubles des apprentissages Troubles praxiques, graphiques: douleurs, lenteur d’écriture Difficultés sensorielles, retard sensori-moteur</li>
						<li>Troubles du spectre de l’autisme Faible autonomie dans les activités du quotidien, à la maison et/ou à l’école</li>
					</ul>
				</div>
			</section>
			<div>
				<div className={`${styles.grid} mb-32`}>
					<div className={styles.grid__item}>
						<Image src='/images/pens.jpg' alt='Crayons pour enfants' width={4356} height={4083} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/allaitement.jpg' alt='Maman qui allaite son bébé' width={640} height={852} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/bebe-alimentation.jpg' alt='Bébé mangeant des pâtes - Troubles de l&pos;alimentation' width={2832} height={4256} />
					</div>
					<div className={styles.grid__item}>
						<Image src='/images/bols-cuilleres.jpg' alt='Bols et cuillères en bois' width={4288} height={2848} />
					</div>
				</div>
			</div>
		</>
	);
};

export default ConsultationSection;
