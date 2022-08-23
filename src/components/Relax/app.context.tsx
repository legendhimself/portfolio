import React from "react";

export const context = React.createContext({
	isAudioPlaying: true,
	isResetSettings: false,
	togglePlaying: () => {},
	clearResetSettings: () => {},
	setResetSettings: () => {},
});

export default context;
