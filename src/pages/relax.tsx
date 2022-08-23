import { NextPage } from "next";
import { useState } from "react";
import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import Main from "@components/Relax/index";

const Relax: NextPage<PageProps> = ({ lang }) => {
	const [appState, setAppState] = useState({
		isAudioPlaying: true,
	});
	const toggleAudioPlaying = () => {
		setAppState((prev) => ({
			isAudioPlaying: !prev.isAudioPlaying,
		}));
	};
	return (
		<div className="relative">
			<Header />
			<Main toggleAudioPlaying={toggleAudioPlaying} appState={appState} />
			<Footer />
		</div>
	);
};

export default Relax;
