import { Fragment } from 'react'
import CityCard from '../UI/CityCard'
import Image from 'next/image'
import { contact, formatAddress, locations } from '../../data/practice'

const AppointmentSection = () => {
	const contactInfos = [
		{
			label: contact.phone,
			href: `tel:${contact.phoneInternational}`,
			icon: '/images/icones/phone.svg',
		},
		{
			label: contact.email,
			href: `mailto:${contact.email}`,
			icon: '/images/icones/mail.svg',
		},
	]
	return (
		<section className='content-container p-4 md:p-8 mb-12 md:mb-16 xl:mb-24' id='prendre-rendez-vous'>
			<div
				className='px-4 py-8 md:px-12 md:py-16 xl:p-24 rounded-[20px]'
				style={{
					background: 'linear-gradient(135deg, rgba(255,247,233,1) 0%, rgba(218,247,166,1) 100%)',
				}}
			>
				<div className='content-container--inner'>
					<h2 className='title text-green text-center mb-12 md:mb-24 lg:mb-32'>Prendre rendez-vous</h2>
					<div className='flex flex-col gap-12 lg:flex-row justify-between items-center mb-12 lg:mb-32'>
						{locations.map((location, index) => (
							<Fragment key={location.city}>
								{index > 0 && <div className='w-[25%] lg:w-[2px] h-[2px] lg:h-[250px] bg-green'></div>}
								<CityCard
									city={location.city}
									firstLink={location.doctolibUrl}
									secondLink={location.docorgaUrl}
									address={formatAddress(location)}
									mapCenterCoordinates={location.coordinates}
								/>
							</Fragment>
						))}
					</div>
					<div className='flex flex-col gap-8'>
						{contactInfos.map((contact) => (
							<div
								className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16'
								key={contact.label}
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
