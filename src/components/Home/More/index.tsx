import Highlight from "@components/Highlight";
import useMediaQuery from "@utils/useMediaQuery";
import { motion } from "framer-motion";
import { FC } from "react";

export const More: FC = () => {
	return (
		<div className="w-full flex flex-col md:flex-row text-center md:text-right mt-8">
			<div className="w-1/5 lg:w-1/2 px-8 sm:px-20 md:px-24 md:pt-28 2xl:pl-56 flex flex-row relative">
				{!useMediaQuery(1024) && (
					<>
						<motion.img
							src={"./assets/cat.png"}
							className="object-cover h-48 w-80 rounded-lg my-auto mt-16 absolute bottom-[130px]"
							whileHover={{ scale: 1.25 }}
						/>
						<img
							src={"./assets/cute_af_cat.png"}
							className="w-20 h-20 rounded-lg -mt-8 ml-4 absolute left-[400px] 2xl:left-[530px] top-20"
						/>
					</>
				)}
				{!useMediaQuery(1200) && (
					<motion.img
						src={"./assets/trips/ottawa.png"}
						className="w-72 h-56 mt-[180px] rounded-lg -ml-20 absolute -bottom-8 right-8 shadow-lg shadow-pastel-black"
						whileHover={{ scale: 1.5 }}
					/>
				)}
			</div>
			<div
				className="flex flex-col 
				w-full md:w-2/3 lg:w-3/5 custom-md:w-1/2
				px-8 sm:px-20 md:px-24 2xl:pr-56 pt-28
				text-white"
			>
				<h1 className="text-6xl tracking-[-5px] font-bold">
					Not in front of my <Highlight>IDE</Highlight>?
				</h1>
				<p className="mt-4">
					You will most likely find me playing{" "}
					<Highlight>Valorant</Highlight>, petting my cat, or&nbsp;
					<span
						onClick={() =>
							window.open(
								"https://www.youtube.com/watch?v=YfVt_jMaaKk",
							)
						}
						className="hover:cursor-pointer text-pastel-green underline hover:no-underline"
					>
						reading a book
					</span>
					.<br />
					<br />I also play a lot of nothing with my no friend. I
					dedicate most of my time for coding these days. Trying to
					get more skills.
				</p>
				{useMediaQuery(767) && (
					<div className="flex flex-row relative">
						<img
							src={"./assets/doggo.png"}
							className="w-72 mt-16 rounded-lg mx-auto shadow-lg shadow-pastel-black flex flex-row"
						/>
						<img
							src={"./assets/cute_af_doggo.png"}
							className="w-20 h-20 mt-16 rounded-lg mx-auto flex flex-row absolute right-6"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default More;
