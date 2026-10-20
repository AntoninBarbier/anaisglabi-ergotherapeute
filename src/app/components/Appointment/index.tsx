import { asLink, isFilled, type Content } from '@prismicio/client'
import CityCard from '../UI/CityCard'
import Image from 'next/image'
import { Fragment } from 'react'
import { formatAddress, toInternationalPhone } from '../../data/practice'

const AppointmentSection = ({ data }: { data: Content.HomepageDocumentData }) => {
	const contactInfos = [
		{
			label: data.appointment_phone,
			href: `tel:${toInternationalPhone(data.appointment_phone ?? '')}`,
			icon: '/images/icones/phone.svg',
		},
		{
			label: data.appointment_email,
			href: `mailto:${data.appointment_email}`,
			icon: '/images/icones/mail.svg',
		},
	].filter((contact) => contact.label)

	const locations = data.appointment_locations.filter((location) => location.city && isFilled.geoPoint(location.coordinates))

	return (
		<section className='content-container p-4 md:p-8 mb-12 md:mb-16 xl:mb-24' id='prendre-rendez-vous'>
			<div
				className='px-4 py-8 md:px-12 md:py-16 xl:p-24 rounded-[20px]'
				style={{
					background: 'linear-gradient(135deg, rgba(255,247,233,1) 0%, rgba(218,247,166,1) 100%)',
				}}
			>
				<div className='content-container--inner'>
					<h2 className='title text-green text-center mb-12 md:mb-24 lg:mb-32'>{data.appointment_title}</h2>
					<div className='flex flex-col gap-12 lg:flex-row justify-between items-center mb-12 lg:mb-32'>
						{locations.map((location, index) => (
							<Fragment key={index}>
								{index > 0 && <div className='w-[25%] lg:w-[2px] h-[2px] lg:h-[250px] bg-green'></div>}
								<CityCard
									city={location.city as string}
									firstLink={asLink(location.doctolib_link) ?? ''}
									secondLink={asLink(location.docorga_link) ?? ''}
									address={formatAddress(location)}
									mapCenterCoordinates={[location.coordinates.latitude as number, location.coordinates.longitude as number]}
								/>
							</Fragment>
						))}
					</div>
					<div className='flex flex-col gap-8'>
						{contactInfos.map((contact) => (
							<div
								className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16'
								key={contact.href}
							>
								<Image className='w-[60px] md:w-[100px]' src={contact.icon} width={200} height={200} alt='' />
								<a href={contact.href} className='hover:underline text-green text-2xl lg:text-5xl font-semibold'>
									{contact.label}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AppointmentSection
