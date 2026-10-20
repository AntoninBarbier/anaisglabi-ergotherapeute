import { asImageSrc, asText, isFilled } from '@prismicio/client'
import { ImageResponse } from 'next/og'
import { getHomepage } from './data/homepage'

// Preview image shown when the site is shared (WhatsApp, Facebook, LinkedIn…)
export const alt = 'Anaïs Glabi-Mus, ergothérapeute et consultante en lactation IBCLC à Lyon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PORTRAIT_SIZE = 360

export default async function OpengraphImage() {
	const { data } = await getHomepage()

	// JPEG square crop of the "Qui suis-je" portrait, embedded as a data URL
	let portraitSrc: string | null = null
	if (isFilled.image(data.about_photo)) {
		const url = asImageSrc(data.about_photo, { w: PORTRAIT_SIZE * 2, h: PORTRAIT_SIZE * 2, fit: 'crop', fm: 'jpg' }) as string
		const portrait = Buffer.from(await (await fetch(url)).arrayBuffer())
		portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`
	}

	const subtitle = asText(data.header_subtitle).split('\n')[0]
	const cities = data.appointment_locations.map((location) => location.city).filter(Boolean).join(' • ')

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					gap: 64,
					padding: '0 88px',
					backgroundImage: 'linear-gradient(to right bottom, #ffe3e1, #ffe7e0, #ffece0, #fff0e1, #fff5e4)',
					color: '#B42A64',
				}}
			>
				{portraitSrc && (
					<img src={portraitSrc} width={PORTRAIT_SIZE} height={PORTRAIT_SIZE} alt='' style={{ borderRadius: '50%', border: '4px solid #B42A64' }} />
				)}
				<div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 600 }}>
					<div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{data.header_name}</div>
					<div style={{ fontSize: 38, lineHeight: 1.3 }}>{subtitle}</div>
					<div style={{ fontSize: 30, color: '#407568' }}>{cities}</div>
				</div>
			</div>
		),
		size,
	)
}
