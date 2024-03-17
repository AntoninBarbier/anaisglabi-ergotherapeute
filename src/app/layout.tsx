import type { Metadata } from 'next'
import './globals.scss'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import localFont from 'next/font/local'

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
	title: 'Ergothérapeute à Lyon | Anaïs Glabi',
	description: "Ergothérapeute spécialisée en pédiatrie basée à Lyon et Champagne-au-Mont-d'Or",
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
