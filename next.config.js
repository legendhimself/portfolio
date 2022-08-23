/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	async redirects() {
		return [
			{
				source: "/go/patreon",
				destination: "https://www.patreon.com/voxelli",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
