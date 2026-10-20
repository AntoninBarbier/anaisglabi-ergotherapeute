import { asImageSrc, isFilled, type Content } from '@prismicio/client'
import { SITE_URL, toInternationalPhone } from '../../data/practice'

const practitionerId = `${SITE_URL}/#anais-glabi-mus`

// Schema.org data so search engines can show the practice (addresses, phone, prices) in local results
const buildStructuredData = (data: Content.HomepageDocumentData) => {
	const prices = data.fees_prices.filter((service) => service.label && service.price !== null)
	const priceValues = prices.map((service) => service.price as number)
	const image = isFilled.image(data.about_photo) ? asImageSrc(data.about_photo, { w: 960 }) : undefined
	const name = data.about_name || data.header_name

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': practitionerId,
				name,
				jobTitle: ['Ergothérapeute D.E.', 'Consultante en lactation IBCLC'],
				image,
				url: SITE_URL,
				knowsAbout: ['Ergothérapie pédiatrique', 'Troubles de l’alimentation', 'Allaitement', 'Troubles des apprentissages'],
			},
			...data.appointment_locations
				.filter((location) => location.city && isFilled.geoPoint(location.coordinates))
				.map((location) => ({
					'@type': 'MedicalBusiness',
					'@id': `${SITE_URL}/#cabinet-${location.postal_code}`,
					name: `${name} – Ergothérapeute et consultante en lactation IBCLC – ${location.city}`,
					url: SITE_URL,
					image,
					telephone: data.appointment_phone ? toInternationalPhone(data.appointment_phone) : undefined,
					email: data.appointment_email || undefined,
					priceRange: priceValues.length ? `${Math.min(...priceValues)} € – ${Math.max(...priceValues)} €` : undefined,
					address: {
						'@type': 'PostalAddress',
						streetAddress: location.street_address,
						postalCode: location.postal_code,
						addressLocality: location.locality,
						addressRegion: 'Auvergne-Rhône-Alpes',
						addressCountry: 'FR',
					},
					geo: {
						'@type': 'GeoCoordinates',
						latitude: location.coordinates.latitude,
						longitude: location.coordinates.longitude,
					},
					areaServed: ['Lyon', 'Ouest lyonnais'],
					employee: { '@id': practitionerId },
					makesOffer: prices.map((service) => ({
						'@type': 'Offer',
						price: service.price,
						priceCurrency: 'EUR',
						itemOffered: { '@type': 'Service', name: service.label },
					})),
				})),
		],
	}
}

const StructuredData = ({ data }: { data: Content.HomepageDocumentData }) => (
	<script
		type='application/ld+json'
		// Escape "<" so the JSON can never close the script tag
		dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(data)).replace(/</g, '\\u003c') }}
	/>
)

export default StructuredData
