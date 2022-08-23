import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import "@styles/globals.css";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Voxelli</title>
			</Head>
			<NextNProgress color="#3daf6b" height={7} />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
