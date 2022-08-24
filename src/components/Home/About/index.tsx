import Highlight from "@components/Highlight";
import { CONFIG } from "@root/libs/config";
import useMediaQuery from "@utils/useMediaQuery";
import { motion } from "framer-motion";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div
			className="w-full
                flex flex-col md:flex-row text-center md:text-left"
			id="about"
		>
			<div
				className="w-full custom-md:w-1/2 md:w-4/5 px-8 sm:px-20 md:px-24 md:pr-6 2xl:pl-56 pt-28
                flex flex-col"
			>
				<p className="text-lg tracking-tightest font-bold">
					<Highlight>Being a&nbsp;{CONFIG.TITLE}...</Highlight>
				</p>
				<h1 className="text-6xl tracking-[-5px] text-white">
					Who am I <Highlight>&amp;</Highlight> how did I get here?
				</h1>
				<div className="mt-4">
					<p className="text-white text-md">
						I'm a self-taught, <Highlight>full-stack</Highlight>{" "}
						developer, that went headfirst into coding and fell in
						love with the first lines of code I've written!
						Currently Pursuing B.E. in <Highlight>IT</Highlight>. I
						like to{" "}
						<Highlight>
							Code, Design, Innovate and Experiment
						</Highlight>
						. I have a passion for building{" "}
						<Highlight>software</Highlight> and web applications.
						With a background in Javascript, Typescript, Java and
						C++, I'm currently learning Rust, C++, C.
						<br />
						<br />I like to build{" "}
						<Highlight>full-stack applications</Highlight> with{" "}
						<span
							onClick={() => {
								window.open("https://sofi.gg");
								return false;
							}}
							className="hover:cursor-pointer text-pastel-red underline hover:no-underline"
						>
							scalable
						</span>{" "}
						and{" "}
						<span
							onClick={() => {
								window.open("https://joinflatshare.com");
								return false;
							}}
							className="hover:cursor-pointer text-pastel-red underline hover:no-underline"
						>
							responsive
						</span>{" "}
						technologies. I'm also a fan of the{" "}
						<Highlight>open-source community</Highlight> and I'm
						always looking for new ways to improve my skills.
					</p>
					<br />
					<span className="text-white text-md">Views </span>
					<img
						className="inline"
						src="https://counter9.stat.ovh/private/freecounterstat.php?c=bhznk59x7hkwn26ypq4pllg9kr2sy86u"
						width={60}
						height={14}
					></img>
				</div>
			</div>

			{/* TODO: Merge these two to make one responsive component */}
			{!useMediaQuery(1200) ? (
				<div className="flex flex-col items-center justify-center mx-auto mr-24 2xl:mr-56 pt-0">
					<DesktopCodeComponent
						lang={"javascript"}
						level={"w-full"}
						logo={"javascript"}
						ikey={0}
					/>
					<DesktopCodeComponent
						lang={"typescript"}
						level={"w-2/3"}
						logo={"typescript"}
						ikey={1}
					/>
					<DesktopCodeComponent
						lang={"java"}
						logo={"java"}
						level={"w-2/3"}
						ikey={2}
					/>
					<DesktopCodeComponent
						lang={"C++"}
						logo={"C++Logo"}
						level={"w-1/3"}
						ikey={3}
					/>
				</div>
			) : null}

			{useMediaQuery(768) ? (
				<div className="flex flex-col w-full bg-epic-black pt-10">
					<MobileCodeComponent
						lang={"javascript"}
						level={"w-full"}
						logo={"javascript"}
						ikey={0}
					/>
					<MobileCodeComponent
						lang={"typescript"}
						level={"w-2/3"}
						logo={"typescript"}
						ikey={1}
					/>
					<MobileCodeComponent
						lang={"java"}
						logo={"java"}
						level={"w-2/3"}
						ikey={2}
					/>
					<MobileCodeComponent
						lang={"C++"}
						logo={"C++Logo"}
						level={"w-1/3"}
						ikey={3}
					/>
				</div>
			) : null}
		</div>
	);
};

type ICodeComponent = {
	lang: string;
	level: "w-full" | "w-2/3" | "w-1/3";
	ikey: number;
	logo: string;
};

const MobileCodeComponent = ({ lang, level, logo }: ICodeComponent) => {
	let fLevel;
	if (level == "w-full") {
		fLevel = "100%";
	} else if (level == "w-2/3") {
		fLevel = "66.6%";
	} else if (level == "w-1/3") {
		fLevel = "33.3%";
	} else {
		fLevel = "0%";
	}

	return (
		<motion.div
			className="bg-epic-black-light mx-auto w-4/5 h-16 rounded-lg mt-4 flex flex-row relative"
			whileHover={{ y: -5 }}
		>
			<img
				src={`./assets/langs/${logo}.svg`}
				className={`rounded-md mt-3 flex flex-row ${
					logo == "typescript" ? "h-10 w-10 ml-3" : null
				} ${logo == "java" ? "w-8 ml-4 mb-3" : null} ${
					logo == "C++Logo" ? "w-10 ml-3 mb-3" : null
				} ${
					logo == "javascript"
						? "h-10 w-10 ml-3 bg-pastel-yellow"
						: null
				}`}
			></img>
			<p
				className={`text-white flex flex-row my-auto ml-4 ${
					logo == ("java" || "C++Logo") ? "ml-5" : null
				}`}
			>
				{lang[0].toUpperCase() + lang.substring(1)}
			</p>
			<div
				className={`bg-epic-black h-2 ${
					useMediaQuery(550) ? "w-1/4" : "w-60"
				} my-auto flex flex-row rounded-full absolute right-4 top-[44%]`}
			>
				<motion.div
					animate={{ width: fLevel }}
					transition={{ duration: 5 }}
					className={`bg-pastel-green rounded-full`}
				></motion.div>
			</div>
		</motion.div>
	);
};

const DesktopCodeComponent = ({ lang, level, logo, ikey }: ICodeComponent) => {
	let fLevel;
	if (level == "w-full") {
		fLevel = "100%";
	} else if (level == "w-2/3") {
		fLevel = "66.6%";
	} else if (level == "w-1/3") {
		fLevel = "33.3%";
	} else {
		fLevel = "0%";
	}

	return (
		<motion.div
			className={`w-[460px] h-16 rounded-lg ${
				ikey !== 0 ? `mt-4` : "mt-28"
			}
						bg-epic-black-light flex flex-row relative overflow-hidden`}
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={`./assets/langs/${logo}.svg`}
				className={`rounded-md ${
					logo == "typescript" ? "h-10 w-10 ml-3 my-auto" : null
				} ${logo == "java" ? "w-8 ml-4" : null} ${
					logo == "C++Logo" ? "w-10 ml-3" : null
				} ${
					logo == "javascript"
						? "h-10 w-10 ml-3 my-auto bg-pastel-yellow"
						: null
				}`}
			></img>
			<p
				className={`text-white mt-[21px] ml-5 flex flex-row ${
					logo == "java" ? "ml-6" : null
				}`}
			>
				{lang[0].toUpperCase() + lang.substring(1)}
			</p>
			<div className="bg-epic-black h-2 w-60 my-auto flex flex-row rounded-full absolute right-4 top-[44%]">
				<motion.div
					animate={{ width: fLevel }}
					transition={{ duration: 5 }}
					className={`bg-pastel-green rounded-full`}
				></motion.div>
			</div>
		</motion.div>
	);
};

interface LanguageLinkProps {
	name: string;
	href: string;
	color: string;
}

export default About;
