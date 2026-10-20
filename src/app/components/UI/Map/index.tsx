'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

type MapProps = {
	lat: number
	lng: number
}

// Create the map two screens before it scrolls into view so its tiles are ready when the visitor gets there
const PRELOAD_MARGIN = '200% 0px'

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

		// Google Maps (~300 KiB) takes ~2s on a mobile connection: start downloading it as soon as
		// the visitor scrolls, so it is ready before the map is reached. Visitors who do not scroll
		// download nothing.
		const preload = () => loadLibraries()
		window.addEventListener('scroll', preload, { once: true, passive: true })

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
			window.removeEventListener('scroll', preload)
			observer.disconnect()
		}
	}, [lat, lng])

	return <div ref={mapRef} className='w-full h-[200px] md:h-[300px] mb-4 md:mb-6 bg-yellow'></div>
}

export default Map
