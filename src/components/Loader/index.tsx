import React from "react";
import styles from "./loader.module.css";
const LoadingScreen = () => {
	return (
		<div className="h-screen overflow-y-hidden flex flex-col items-center justify-center fixed min-w-full">
			<div className={styles["lds-ellipsis"]}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingScreen;
