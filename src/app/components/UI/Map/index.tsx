'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type MapProps = {
	lat: number
	lng: number
}

const Map = ({ lat, lng }: MapProps) => {
	const mapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const initizalizeMap = async () => {
			const loader = new Loader({
				apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
				version: 'quartely',
			})

			const { Map } = await loader.importLibrary('maps')

			const { AdvancedMarkerElement } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary

			const options: google.maps.MapOptions = {
				center: { lat, lng },
				zoom: 12,
				fullscreenControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				mapId: 'google-map',
			}

			const map = new Map(mapRef.current as HTMLDivElement, options)
			const marker = new AdvancedMarkerElement({ map: map, position: { lat, lng } })
		}

		initizalizeMap()
	}, [lat, lng])

	return <div ref={mapRef} className='w-full h-[200px] md:h-[300px] mb-4 md:mb-6'></div>
}

export default Map
