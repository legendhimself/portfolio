import { useState, useEffect, useRef, useContext } from "react";

import ReactSlider from "react-slider";
import styles from "./audio.module.css";
import AppContext from "./app.context";

const AudioCard = (props: any) => {
	const { Icon, audioName } = props || {};
	const [volume, setVolume] = useState(50);
	const [audio, setAudio] = useState(
		typeof Audio !== "undefined" ? false : undefined,
	);
	const [active, setActive] = useState(false);
	const audioTag = useRef(null);
	const appContext = useContext(AppContext);

	useEffect(() => {
		let audioUrl = "";
		if (audioName === "waterWaves") {
			audioUrl = "./audio/water_waves.wav";
		}
		if (audioName === "ambulance") {
			audioUrl = "./audio/ambulance_sound.wav";
		}
		if (audioName === "birds") {
			audioUrl = "./audio/birds.mp3";
		}
		if (audioName === "campFire") {
			audioUrl = "./audio/camp_fire.wav";
		}
		if (audioName === "children") {
			audioUrl = "./audio/children_audience.wav";
		}
		if (audioName === "cityRoad") {
			audioUrl = "./audio/city_road.wav";
		}
		if (audioName === "wind") {
			audioUrl = "./audio/wind.mp3";
		}
		if (audioName === "rain") {
			audioUrl = "./audio/rain.mp3";
		}
		if (audioName === "thunder") {
			audioUrl = "./audio/thunder.wav";
		}
		if (audioName === "clockTimer") {
			audioUrl = "./audio/clock_timer.wav";
		}

		if (!audio) {
			setAudio(
				// @ts-ignore
				typeof Audio !== "undefined" ? new Audio(audioUrl) : undefined,
			);
		}
	}, []);
	useEffect(() => {
		if (!appContext.isAudioPlaying) {
			// @ts-ignore
			audio.pause();
		} else if (appContext.isAudioPlaying && active) {
			// @ts-ignore
			audio.play().catch((e) => null);
		}
		if (appContext.isResetSettings) {
			resetSettings();
		}
	}, [appContext, active]);

	useEffect(() => {
		if (audio) {
			// @ts-ignore
			audio.volume = volume / 100;
		}
	}, [volume]);
	useEffect(() => {
		if (audio) {
			// @ts-ignore
			audio.loop = true;
		}
	}, [audio]);
	useEffect(() => {
		if (audio) {
			if (active && appContext.isAudioPlaying) {
				// @ts-ignore
				audio.play().catch((e) => null);
			} else {
				// @ts-ignore
				audio.pause();
			}
		}
	}, [active]);

	const toggleActive = () => {
		if (!active) {
			setActive(true);
		} else {
			setActive(false);
		}
	};
	const resetSettings = () => {
		setActive(false); // @ts-ignore
		audio.pause();
		setVolume(50);
		appContext.clearResetSettings();
	};

	return (
		<div
			className={`${styles.cardContainer} ${
				active && styles.cardContainerActive
			} ${!appContext.isAudioPlaying && styles.globalPaused}`}
		>
			<div
				className={styles.iconContainer}
				onClick={() => {
					toggleActive();
				}}
			>
				{Icon ? (
					<Icon
						fontSize={40}
						className={`${styles.icon} ${
							active && styles.iconActive
						}`}
					/>
				) : (
					""
				)}
			</div>
			<div>
				{/* <audio src="./audio/wind.mp3" autoPlay style={{ visibility: "hidden" }} loop ref={audioTag} /> */}
				<div
					className={`${styles.sliderContainer} ${
						active && styles.sliderContainerActive
					}`}
				>
					<ReactSlider
						className={styles.sliderMain}
						thumbClassName={styles.sliderThumb}
						trackClassName={styles.sliderTrack}
						renderThumb={(props, volumeState) => {
							return <div {...props}>{volumeState.valueNow}</div>;
						}}
						onChange={(e) => {
							setVolume(e);
						}}
						value={volume}
					/>
				</div>
			</div>
		</div>
	);
};

export default AudioCard;
