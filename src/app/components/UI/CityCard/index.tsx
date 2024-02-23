import Button from '../Button'
import Map from '../Map'

interface CityCardProps {
	city: string
	firstLink: string
	secondLink: string
	address: string
	mapCenterCoordinates: [number, number]
}

const CityCard = ({ city, firstLink, secondLink, mapCenterCoordinates, address }: CityCardProps) => {
	return (
		<div className='flex flex-col text-green'>
			<h3 className='font-bold text-center text-2xl md:text-3xl xl:text-4xl mb-8 md:mb-16'>{city}</h3>
			<div className='flex gap-7 mb-8'>
				<Button size='small' color='green' shape='rounded' href={firstLink}>
					Rendez-vous Doctolib
				</Button>
				<Button size='small' color='green' shape='rounded' href={secondLink}>
					Rendez-vous Docorga
				</Button>
			</div>
			<Map lat={mapCenterCoordinates[0]} lng={mapCenterCoordinates[1]} />
			<p className='text-center text-base md:text-xl italic'>{address}</p>
		</div>
	)
}

export default CityCard
