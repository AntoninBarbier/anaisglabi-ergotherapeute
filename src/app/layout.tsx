import type { Metadata } from 'next'
import './globals.scss'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from './data/practice'

const source_serif_4 = Source_Serif_4({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-source-serif-4',
})

const source_sans_3 = Source_Sans_3({
	display: 'swap',
	subsets: ['latin'],
	variable: '--font-source-sans-3',
})

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'fr_FR',
		url: '/',
		siteName: 'Anaïs Glabi-Mus – Ergothérapeute',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fr'>
			<body className={`${source_serif_4.variable} ${source_sans_3.variable} font-serif`}>{children}</body>
		</html>
	)
}
