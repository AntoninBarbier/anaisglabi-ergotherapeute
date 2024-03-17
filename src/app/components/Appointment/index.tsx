import CityCard from '../UI/CityCard'
import Image from 'next/image'

const AppointmentSection = () => {
	const contactInfos = [
		{
			type: 'phone',
			label: '06 66 95 05 34',
			icon: '/images/icones/phone.svg',
			alt: 'Icône téléphone',
		},
		{
			type: 'mail',
			label: 'glabi.anais@gmail.com',
			icon: '/images/icones/mail.svg',
			alt: 'Icône email',
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
						<CityCard
							city='Lyon'
							firstLink='https://www.doctolib.fr/ergotherapeute/lyon/anais-glabi-charlene-monnin-cabinet-d-ergotherapie'
							secondLink='http://google.com'
							address='7 Rue Antoine Barbier, 69006 Lyon'
							mapCenterCoordinates={[45.7715, 4.86036]}
						/>
						<div className='w-[25%] lg:w-[2px] h-[2px] lg:h-[250px] bg-green'></div>
						<CityCard
							city='Champagne-au-Mont-d’Or'
							firstLink='https://www.doctolib.fr/ergotherapeute/lyon/anais-glabi-charlene-monnin-cabinet-d-ergotherapie/booking/motives?specialityId=398&telehealth=false&placeId=practice-278026&profile_skipped=true&bookingFunnelSource=external_referral'
							secondLink='http://google.com'
							address='7 Rue Dominique Vincent, 69410'
							mapCenterCoordinates={[45.7984, 4.7927]}
						/>
					</div>
					<div className='flex flex-col gap-8'>
						{contactInfos.map((contact) => (
							<div
								className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16'
								key={contact.label}
							>
								<Image className='w-[60px] md:w-[100px]' src={contact.icon} width={200} height={200} alt={contact.alt} />
								<a href={contact.type === 'phone' ? `tel:${contact.label}` : `mailto:${contact.label}`}>
									<p className='text-green text-2xl lg:text-5xl font-semibold'>{contact.label}</p>
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
