import React from "react";

import AudioCard from "@components/Relax/_app";
import Highlight from "@components/Highlight";
import { BsCloudRain } from "react-icons/bs";
import { GiCampfire, GiNestBirds, GiModernCity } from "react-icons/gi";
import { SiWindicss } from "react-icons/si";
import { BiWater } from "react-icons/bi";
import { IoThunderstormOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import styles from "./main.module.css";

interface MainProps {
	toggleAudioPlaying: (isAudioPlaying: boolean) => void;
	appState: {
		isAudioPlaying: boolean;
	};
}
const Main = (props: MainProps) => {
	return (
		<div className="w-full flex flex-col md:flex-row text-center md:text-right mt-8">
			<div>
				{/* <audio src="/audio/wind.mp3" controls autoPlay style={{ visibility: "hidden" }} /> */}
				<div className={styles.soundContainer}>
					<AudioCard
						Icon={BsCloudRain}
						audioName="rain"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={GiCampfire}
						audioName="campFire"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={GiNestBirds}
						audioName="birds"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={SiWindicss}
						audioName="wind"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
				</div>
				<div className={styles.soundContainer}>
					<AudioCard
						Icon={BiWater}
						audioName="waterWaves"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={IoThunderstormOutline}
						audioName="thunder"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={GiModernCity}
						audioName="cityRoad"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
					<AudioCard
						Icon={IoIosPeople}
						audioName="children"
						appState={props.appState}
						toggleAudioPlaying={props.toggleAudioPlaying}
					/>
				</div>
			</div>
			<div className="w-1/2 lg:w-1/2 px-8 sm:px-20 md:px-24 md:pt-48 2xl:pl-56 flex flex-row relative text-pastel-pink">
				<h1 className="text-4xl tracking-[5px] font-bold">
					Inspired by
					<Highlight>
						{" "}
						<div className={styles.blink_me}>
							<span
								onClick={() =>
									window.open("https://www.relaxfrens.com/")
								}
								className="hover:cursor-pointer text-pastel-blue hover:underline"
							>
								Relax Frens
							</span>
						</div>
					</Highlight>
				</h1>
			</div>
		</div>
	);
};

export default Main;
