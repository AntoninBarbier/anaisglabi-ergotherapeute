// One-off migration: copies the content that used to be hardcoded in the site
// (texts, pictures, prices, practices) into the Prismic "homepage" document.
//
// Usage (Node 22+), from the project root:
//   PRISMIC_WRITE_TOKEN=<token> node scripts/prismic-migrate-homepage.mjs
//
// The token is created in Prismic: Settings → API & Security → Write APIs.
// The document lands in a "Migration release" in Prismic, unpublished: review it, then publish.

import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import * as prismic from '@prismicio/client'

const config = JSON.parse(await readFile(new URL('../slicemachine.config.json', import.meta.url), 'utf8'))
const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName
const writeToken = process.env.PRISMIC_WRITE_TOKEN

if (!writeToken) {
	console.error('PRISMIC_WRITE_TOKEN manquant. Voir les instructions en haut du fichier.')
	process.exit(1)
}

const writeClient = prismic.createWriteClient(repositoryName, { writeToken })

// Refuse to create a duplicate if the homepage has already been published
try {
	await writeClient.getSingle('homepage')
	console.error(`Une page d'accueil est déjà publiée dans "${repositoryName}" : migration annulée pour éviter un doublon.`)
	process.exit(1)
} catch (error) {
	if (!(error instanceof prismic.NotFoundError)) throw error
}

// Rich text paragraph. "**bold**" becomes strong, "\n" a line break (Shift+Enter in Prismic).
const paragraph = (source) => {
	let text = ''
	const spans = []
	for (const [index, part] of source.split('**').entries()) {
		if (index % 2 === 1) spans.push({ type: 'strong', start: text.length, end: text.length + part.length })
		text += part
	}
	return { type: 'paragraph', text, spans }
}
const richText = (...paragraphs) => paragraphs.map(paragraph)

const migration = prismic.createMigration()
const asset = async (file, alt) => migration.createAsset(await readFile(join('public/images', file)), file, { alt })
const webLink = (url) => ({ link_type: 'Web', url, target: '_blank' })

const doctolib = (placeId) =>
	`https://www.doctolib.fr/ergotherapeute/lyon/anais-glabi-charlene-monnin-cabinet-d-ergotherapie/booking/motives?specialityId=398&telehealth=false&placeId=${placeId}&profile_skipped=true&bookingFunnelSource=external_referral`
const docorga = 'https://docorga.com/praticien/5c880dc14a7124f3293bd25f'

migration.createDocument(
	{
		type: 'homepage',
		lang: 'fr-fr',
		data: {
			// Accueil
			header_name: 'Anaïs Glabi-Mus',
			header_job: 'Ergothérapeute',
			header_subtitle: richText(
				'Ergothérapeute et consultante en lactation certifiée IBCLC\nSpécialisée en pédiatrie et en lactation humaine à Lyon et dans l’ouest Lyonnais.',
			),
			header_location: "À Lyon et Champagne-au-Mont-d'Or",
			header_cta_label: 'Prendre rendez-vous',
			header_image: await asset('kid-playing.jpg', 'Enfant qui joue'),

			// Ergothérapie
			ergo_title: "Qu'est-ce que l'ergothérapie ?",
			ergo_text: richText(
				'L’ergothérapeute est un **professionnel de santé.**',
				'L’ergothérapie est une pratique fondée sur le lien entre **l’activité humaine** et **la santé**.',
				'L’objectif de l’ergothérapie est de **maintenir, restaurer et permettre les activités humaines** de manière sécurisée, autonome et efficace.',
				'Pour cela, elle prévient, réduit ou supprime les situations de handicap en tenant compte des habitudes de vie des personnes et de leur environnement. L’ergothérapeute est l’intermédiaire entre les besoins d’adaptation de la personne et les exigences de la vie en société.',
			),
			ergo_image: await asset('kid-playing-2.jpg', 'Enfant jouant avec un boulier'),

			// IBCLC
			ibclc_title: "Qu'est-ce qu'un consultant en lactation IBCLC ?",
			ibclc_text: richText(
				'Un consultant en lactation IBCLC est un professionnel de santé spécialiste de l’allaitement maternel et de la lactation humaine. Une formation approfondie permet d’accompagner et de résoudre la plupart des problèmes d’allaitement. Un consultant en lactation a une capacité d’écoute et est une aide de qualité pour les mamans et les bébés. La certification IBCLC (International Board Certified Lactation Consultant) est délivrée par l’IBLCE (International Board of Lactation Consultant Examiners). Elle est revalidée tous les 5 ans par de la formation continue, et tous les 10 ans par examens, cela garantit aux consultants en lactation IBCLC d’être informés des dernières connaissances en matière d’allaitement.',
			),

			// Pour qui
			for_who_title: 'Pour qui ?',
			for_who_intro: richText(
				'Deux cabinets à **Lyon** et **Champagne-au-Mont-d’Or**, et une équipe de plusieurs ergothérapeutes diplômées d’État avec différentes spécialités pour mieux répondre à vos besoins :',
			),
			for_who_ergo_items: [
				'Troubles de l’alimentation : bébé/enfant qui a des difficultés pour s’alimenter, refuse certaines textures, panel alimentaire restreint, sélectionne des aliments etc.',
				'Aide à la mise en place de l’allaitement et accompagnement des éventuelles difficultés : Difficultés de début d’allaitement, difficultés de mise au sein, difficulté de passage au biberon, sevrage',
				'Troubles des apprentissages',
				'Troubles praxiques, graphiques : douleurs, lenteur d’écriture',
				'Difficultés sensorielles, retard sensori-moteur',
				'Troubles du spectre de l’autisme',
				'Faible autonomie dans les activités du quotidien, à la maison et/ou à l’école',
			].map((text) => ({ text })),
			for_who_ibclc_intro: richText('En tant que consultante en lactation IBCLC, je propose :'),
			for_who_ibclc_items: [
				'Des consultations d’accompagnement à l’allaitement à domicile ou au cabinet',
				'Des séances d’information sur l’allaitement pendant la grossesse',
			].map((text) => ({ text })),
			for_who_conclusion: richText(
				'Ma spécificité est d’être à la fois ergothérapeute spécialisée en trouble de l’alimentation en pédiatrie, et consultante en lactation IBCLC. Je suis donc en mesure d’accompagner les mamans et leur bébé dans une vision globale, et ce depuis la grossesse, jusqu’au sevrage naturel.',
			),
			for_who_gallery: [
				{ image: await asset('enfant-crayon.jpg', 'Crayons pour enfants') },
				{ image: await asset('allaitement.jpg', 'Maman qui allaite son bébé') },
				{ image: await asset('bebe-alimentation.jpg', 'Bébé mangeant des pâtes') },
				{ image: await asset('enfant-boulier.jpg', 'Enfant jouant avec un boulier') },
			],

			// Qui suis-je
			about_title: 'Qui suis-je ?',
			about_intro: richText(
				'Spécialisée en pédiatrie, j’accompagne les enfants tout au long de leur développement, de la naissance jusqu’aux études supérieures.\nDans mon activité de consultante en lactation, j’accompagne les parents et leur bébé dans leur aventure d’allaitement, de la grossesse jusqu’au sevrage.',
			),
			about_photo: await asset('anais-glabi-ergotherapeute.jpg', 'Anaïs Glabi-Mus, ergothérapeute'),
			about_name: 'Anaïs Glabi-Mus',
			about_job_title: 'Ergothérapeute D.E.',
			about_text: richText(
				'Diplômée de l’ISTR de Lyon en juin 2018, je me suis dans un premier temps formée à l’accompagnement des enfants ayant des troubles des apprentissages, et à la rééducation de la motricité fine en pédiatrie (2019). En 2020, j’ai obtenu le Diplôme Universitaire de Neuropsychopathologie des Apprentissages Scolaires à la Faculté de Médecine de Lyon I. Pour compléter cet enseignement, je me suis aussi formée à la méthode ABC Boum, méthode de rééducation de l’écriture.',
				'Devenir maman a changé ma façon d’exercer et mon regard sur mes suivis : travailler avec les tout-petits, en partenariat avec les parents est devenu une évidence. Je me suis donc formée à l’accompagnement des enfants porteurs de troubles de l’alimentation avec Marie Ruffier-Bourdet, puis aux difficultés alimentaires du bébé et leur accompagnement en ergothérapie.',
				'Depuis janvier 2025, j’ai obtenu la certification de consultante en lactation IBCLC, cette certification vient compléter mon parcours pour accompagner les mamans et leur bébé dès la grossesse, et tout au long de leur allaitement.',
			),

			// Rendez-vous
			appointment_title: 'Prendre rendez-vous',
			appointment_locations: [
				{
					city: 'Lyon',
					street_address: '7 Rue Antoine Barbier',
					postal_code: '69006',
					locality: 'Lyon',
					coordinates: { latitude: 45.7715, longitude: 4.86036 },
					doctolib_link: webLink(doctolib('practice-104929')),
					docorga_link: webLink(docorga),
				},
				{
					city: 'Champagne-au-Mont-d’Or',
					street_address: '7 Rue Dominique Vincent',
					postal_code: '69410',
					locality: 'Champagne-au-Mont-d’Or',
					coordinates: { latitude: 45.7984, longitude: 4.7927 },
					doctolib_link: webLink(doctolib('practice-278026')),
					docorga_link: webLink(docorga),
				},
			],
			appointment_phone: '06 66 95 05 34',
			appointment_email: 'glabi.anais@gmail.com',

			// Honoraires
			fees_title: 'Honoraires et financements',
			fees_intro: richText(
				'L’ergothérapie est une profession de santé non remboursée par la sécurité sociale. Cependant, des aides existent et peuvent être mises en place :',
			),
			fees_fundings: [
				'Financement par votre mutuelle',
				'Demande de prestation extra-légale auprès de la sécurité sociale',
				'Financement par la Maison Départementale des Personnes Handicapées (MDPH) via l’Allocation Education Enfant Handicapé (AEEH)',
				'Financement par les Plateformes de Coordination et d’Orientation (PCO)',
				'Financement par les Pôles de Compétences et de Prestations Externalisées (PCPE)',
			].map((text) => ({ text })),
			fees_prices_title: 'Les tarifs au cabinet',
			fees_prices: [
				{ label: 'Bilan d’ergothérapie', price: 190 },
				{ label: 'Consultation alimentation ou allaitement', price: 70 },
				{ label: 'Séance d’ergothérapie au cabinet (45 minutes)', price: 48 },
				{ label: 'Séance d’ergothérapie à domicile ou à l’école (45 minutes)', price: 58 },
			],

			// SEO
			meta_title: 'Ergothérapeute et consultante en lactation IBCLC à Lyon | Anaïs Glabi',
			meta_description:
				'Ergothérapeute et consultante en lactation certifiée IBCLC. Spécialisée en pédiatrie et en lactation humaine à Lyon et dans l’ouest Lyonnais.',
		},
	},
	'Page d’accueil',
)

await writeClient.migrate(migration, {
	reporter: (event) => {
		if (['start', 'assets:creating', 'documents:creating', 'end'].includes(event.type)) console.log(event.type, event.data ?? '')
	},
})

console.log(`\nTerminé. Dans Prismic (${repositoryName}) : ouvrir la release « Migration release », vérifier la page d’accueil, puis la publier.`)
