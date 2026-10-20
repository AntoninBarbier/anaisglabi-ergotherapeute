/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// Inline the (small) Tailwind CSS in the HTML: removes render-blocking stylesheet requests
		inlineCss: true,
	},
};

export default nextConfig;
