import { FC } from "react";

import { CONFIG } from "@root/libs/config";
import Status from "@utils/activity";
import useMediaQuery from "@utils/useMediaQuery";
import { motion, useAnimation } from "framer-motion";
import Highlight from "@components/Highlight";

export const Hero: FC = () => {
	const date = new Date().getFullYear();

	return (
		<div
			className="w-full mt-24 md:mt-0
                flex flex-row
                bg-epic-black text-center md:text-left"
		>
			{useMediaQuery(768) && <div></div>}
			<div
				className="flex flex-col w-full md:w-4/5 lg:w-1/2
            		px-8 sm:px-20 md:px-24 md:pr-6 2xl:pl-56 pt-16"
			>
				<h1 className="text-6xl tracking-tighter text-white">
					{CONFIG.NAME}
					{!useMediaQuery(768) ? (
						<p className="text-3xl">
							<i>aka&nbsp;</i>
							<Highlight>{CONFIG.AKA}</Highlight>
						</p>
					) : null}
				</h1>
				<p className="mt-6 text-white text-md">
					I am a {date - 2002} year old software developer living{" "}
					{!useMediaQuery(980) && <br />}in&nbsp;{CONFIG.LOCATION}.
					<br />
					<br />I have <Highlight>
						over {date - 2019} years
					</Highlight>{" "}
					of experience in software development, and I am currently
					working with&nbsp;
					<LanguageLink
						name={"javascript"}
						href={"https://www.javascript.com/"}
						color={"text-pastel-yellow"}
					/>
					,&nbsp;
					<LanguageLink
						name={"rust"}
						href={"https://www.rust-lang.org/"}
						color={"text-pastel-red"}
					/>
					,&nbsp;
					<LanguageLink
						name={"typescript"}
						href={"https://www.typescriptlang.org/"}
						color={"text-pastel-blurple"}
					/>
					&nbsp;and&nbsp;
					<br />
					<LanguageLink
						name={"java"}
						href={"https://www.java.com/"}
						color={"text-pastel-orange"}
					/>
					<br />
					<br />
					Right now, I am{" "}
					<Highlight>
						<Status />
					</Highlight>
				</p>
			</div>
			{!useMediaQuery(1023) && (
				<div className="flex flex-col w-1/2">
					<motion.div
						className="flex flex-col items-center justify-center mx-auto mr-24 2xl:mr-56"
						whileHover={{ scale: 1.025 }}
					>
						<img
							src={CONFIG.AVATAR_URL} // Can be changed with "CONFIG.AVATAR_URL" (i use downloaded image cause my grandparent's internet is complete garbage)
							alt="voxelli"
							className="mx-auto md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl"
						/>
					</motion.div>
				</div>
			)}
		</div>
	);
};

interface LanguageLinkProps {
	name: string;
	href: string;
	color: string;
}

const LanguageLink = ({ name, href, color }: LanguageLinkProps) => {
	return (
		<span
			className={color + " " + "hover:cursor-pointer"}
			onClick={() => window.open(href)}
		>
			{name}
		</span>
	);
};

export default Hero;
