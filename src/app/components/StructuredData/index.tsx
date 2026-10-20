import { PRACTITIONER_NAME, SITE_URL, contact, locations, services } from '../../data/practice'

const prices = services.map((service) => service.price)

const practitionerId = `${SITE_URL}/#anais-glabi-mus`

// Schema.org data so search engines can show the practice (addresses, phone, prices) in local results
const structuredData = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': practitionerId,
			name: PRACTITIONER_NAME,
			jobTitle: ['Ergothérapeute D.E.', 'Consultante en lactation IBCLC'],
			image: `${SITE_URL}/images/anais-glabi-ergotherapeute.jpg`,
			url: SITE_URL,
			knowsAbout: ['Ergothérapie pédiatrique', 'Troubles de l’alimentation', 'Allaitement', 'Troubles des apprentissages'],
		},
		...locations.map((location) => ({
			'@type': 'MedicalBusiness',
			'@id': `${SITE_URL}/#cabinet-${location.postalCode}`,
			name: `${PRACTITIONER_NAME} – Ergothérapeute et consultante en lactation IBCLC – ${location.city}`,
			url: SITE_URL,
			image: `${SITE_URL}/images/anais-glabi-ergotherapeute.jpg`,
			telephone: contact.phoneInternational,
			email: contact.email,
			priceRange: `${Math.min(...prices)} € – ${Math.max(...prices)} €`,
			address: {
				'@type': 'PostalAddress',
				streetAddress: location.streetAddress,
				postalCode: location.postalCode,
				addressLocality: location.addressLocality,
				addressRegion: 'Auvergne-Rhône-Alpes',
				addressCountry: 'FR',
			},
			geo: {
				'@type': 'GeoCoordinates',
				latitude: location.coordinates[0],
				longitude: location.coordinates[1],
			},
			areaServed: ['Lyon', 'Ouest lyonnais'],
			employee: { '@id': practitionerId },
			makesOffer: services.map((service) => ({
				'@type': 'Offer',
				price: service.price,
				priceCurrency: 'EUR',
				itemOffered: { '@type': 'Service', name: service.label },
			})),
		})),
	],
}

const StructuredData = () => (
	<script
		type='application/ld+json'
		// Escape "<" so the JSON can never close the script tag
		dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
	/>
)

export default StructuredData
