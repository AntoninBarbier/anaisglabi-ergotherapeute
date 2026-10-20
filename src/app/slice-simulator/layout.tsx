import type { Metadata } from 'next'

// Prismic development tool: must stay out of search results
export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
}

export default function SliceSimulatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return children
}
