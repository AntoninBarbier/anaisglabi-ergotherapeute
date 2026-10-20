// Single source of truth for practice details: used by the page sections
// and by the structured data (JSON-LD) read by search engines.

export const SITE_URL = 'https://ergotherapeute-lyon.fr'

export const PRACTITIONER_NAME = 'Anaïs Glabi-Mus'

export const SITE_TITLE = 'Ergothérapeute et consultante en lactation IBCLC à Lyon | Anaïs Glabi'

export const SITE_DESCRIPTION =
	'Ergothérapeute et consultante en lactation certifiée IBCLC. Spécialisée en pédiatrie et en lactation humaine à Lyon et dans l’ouest Lyonnais.'

export const contact = {
	phone: '06 66 95 05 34',
	phoneInternational: '+33666950534',
	email: 'glabi.anais@gmail.com',
}

export type Location = {
	city: string
	streetAddress: string
	postalCode: string
	addressLocality: string
	coordinates: [number, number]
	doctolibUrl: string
	docorgaUrl: string
}

export const locations: Location[] = [
	{
		city: 'Lyon',
		streetAddress: '7 Rue Antoine Barbier',
		postalCode: '69006',
		addressLocality: 'Lyon',
		coordinates: [45.7715, 4.86036],
		doctolibUrl:
			'https://www.doctolib.fr/ergotherapeute/lyon/anais-glabi-charlene-monnin-cabinet-d-ergotherapie/booking/motives?specialityId=398&telehealth=false&placeId=practice-104929&profile_skipped=true&bookingFunnelSource=external_referral',
		docorgaUrl: 'https://docorga.com/praticien/5c880dc14a7124f3293bd25f',
	},
	{
		city: 'Champagne-au-Mont-d’Or',
		streetAddress: '7 Rue Dominique Vincent',
		postalCode: '69410',
		addressLocality: 'Champagne-au-Mont-d’Or',
		coordinates: [45.7984, 4.7927],
		doctolibUrl:
			'https://www.doctolib.fr/ergotherapeute/lyon/anais-glabi-charlene-monnin-cabinet-d-ergotherapie/booking/motives?specialityId=398&telehealth=false&placeId=practice-278026&profile_skipped=true&bookingFunnelSource=external_referral',
		docorgaUrl: 'https://docorga.com/praticien/5c880dc14a7124f3293bd25f',
	},
]

export const formatAddress = (location: Location) => `${location.streetAddress}, ${location.postalCode} ${location.addressLocality}`

export const services = [
	{ label: 'Bilan d’ergothérapie', price: 190 },
	{ label: 'Consultation alimentation ou allaitement', price: 70 },
	{ label: 'Séance d’ergothérapie au cabinet (45 minutes)', price: 48 },
	{ label: 'Séance d’ergothérapie à domicile ou à l’école (45 minutes)', price: 58 },
]
