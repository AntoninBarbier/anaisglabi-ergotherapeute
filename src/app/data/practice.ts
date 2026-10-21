import type { Content } from '@prismicio/client'

export const SITE_URL = 'https://ergotherapeute-lyon.fr'

// Defaults when the SEO tab of the Prismic homepage is left empty
export const SITE_TITLE = 'Ergothérapeute et consultante en lactation IBCLC à Lyon | Anaïs Glabi'

export const SITE_DESCRIPTION =
	'Ergothérapeute et consultante en lactation certifiée IBCLC. Spécialisée en pédiatrie et en lactation humaine à Lyon et dans l’ouest Lyonnais.'

export type Location = Content.HomepageDocumentDataAppointmentLocationsItem

export const formatAddress = (location: Location) =>
	`${location.street_address ?? ''}, ${location.postal_code ?? ''} ${location.locality ?? ''}`.trim()

// "06 66 95 05 34" -> "+33666950534" for tel: links and structured data
export const toInternationalPhone = (phone: string) => {
	const digits = phone.replace(/[^\d+]/g, '')
	return /^0\d{9}$/.test(digits) ? `+33${digits.slice(1)}` : digits
}
