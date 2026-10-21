import type { Metadata } from 'next'
import './globals.scss'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import { draftMode } from 'next/headers'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
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

// Defaults: the homepage overrides them with the SEO tab of its Prismic document
export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	verification: {
		// Google Search Console ownership (URL-prefix property)
		google: '9A__BmHDHoipWckD3W_YiuIpLiM1gOTCjIdlLls6w8o',
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// The Prismic toolbar script is only loaded while previewing drafts, not for visitors
	const { isEnabled: isPreview } = await draftMode()

	return (
		<html lang='fr'>
			<body className={`${source_serif_4.variable} ${source_sans_3.variable} font-serif`}>
				{children}
				{isPreview && <PrismicPreview repositoryName={repositoryName} />}
			</body>
		</html>
	)
}
