'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type MapProps = {
	lat: number
	lng: number
}

// Start loading slightly before the map scrolls into view so it is ready when the visitor gets there
const PRELOAD_MARGIN = '300px'

type MapsLibraries = [google.maps.MapsLibrary, google.maps.MarkerLibrary]

// Loaded once and shared by every map on the page: both maps enter the viewport
// together, and parallel loads would inject the Google script twice
let librariesPromise: Promise<MapsLibraries> | null = null

const loadLibraries = () => {
	librariesPromise ??= (async () => {
		const loader = new Loader({
			apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
			version: 'quarterly',
		})
		const maps = await loader.importLibrary('maps')
		const marker = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary
		return [maps, marker]
	})()
	return librariesPromise
}

const Map = ({ lat, lng }: MapProps) => {
	const mapRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = mapRef.current
		if (!container) return

		let cancelled = false

		const initializeMap = async () => {
			const [{ Map }, { AdvancedMarkerElement }] = await loadLibraries()

			if (cancelled) return

			const options: google.maps.MapOptions = {
				center: { lat, lng },
				zoom: 12,
				fullscreenControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				mapId: 'google-map',
			}

			const map = new Map(container, options)
			new AdvancedMarkerElement({ map, position: { lat, lng } })
		}

		// Google Maps (~300 KiB) is only downloaded when the map approaches the viewport
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					observer.disconnect()
					initializeMap()
				}
			},
			{ rootMargin: PRELOAD_MARGIN },
		)

		observer.observe(container)

		return () => {
			cancelled = true
			observer.disconnect()
		}
	}, [lat, lng])

	return <div ref={mapRef} className='w-full h-[200px] md:h-[300px] mb-4 md:mb-6 bg-yellow'></div>
}

export default Map
