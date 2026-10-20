import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { PRACTITIONER_NAME } from './data/practice'

// Preview image shown when the site is shared (WhatsApp, Facebook, LinkedIn…)
export const alt = 'Anaïs Glabi-Mus, ergothérapeute et consultante en lactation IBCLC à Lyon'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
	const portrait = await readFile(join(process.cwd(), 'public/images/anais-glabi-ergotherapeute.jpg'))
	const portraitSrc = `data:image/jpeg;base64,${portrait.toString('base64')}`

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
				<img src={portraitSrc} width={360} height={360} alt='' style={{ borderRadius: '50%', border: '4px solid #B42A64' }} />
				<div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 600 }}>
					<div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{PRACTITIONER_NAME}</div>
					<div style={{ fontSize: 38, lineHeight: 1.3 }}>Ergothérapeute et consultante en lactation IBCLC</div>
					<div style={{ fontSize: 30, color: '#407568' }}>Lyon • Champagne-au-Mont-d’Or</div>
				</div>
			</div>
		),
		size,
	)
}
