/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// Inline the (small) Tailwind CSS in the HTML: removes render-blocking stylesheet requests
		inlineCss: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					// Forbid embedding the site in an iframe (clickjacking)
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
					// Only send the origin to external sites (Doctolib, Docorga, LinkedIn…)
					{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
					// Browser features the site never uses
					{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
				],
			},
		]
	},
}

export default nextConfig
