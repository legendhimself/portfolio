import { FC } from "react";
import { useState, useEffect } from "react";
// import LoadingScreen from "@components/Loader/index";

interface activity {
	id: string;
	name: string;
	type: number;
	url: string | null;
	details: string;
	state: string;
	applicationId: string;
	syncId: string | null;
	platform: string | null;
	party: string | null;
	flags: number;
	emoji: string | null;
	sessionId: string | null;
	buttons: Array<{}>;
	createdTimestamp: number;
}

interface dataInterface {
	userId: string;
	guild: string;
	status: string;
	activities: Array<activity>;
}
let interval: any = null;

const Status: FC = () => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("https://api.sofi.gg/member/activity", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id: "392779025803771904" }),
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data.data);
				setLoading(false);
			})
			.catch(
				// @ts-ignore
				(e) => (setData(undefined), setLoading(false)),
			);
	}, []);

	if (!interval) {
		interval = setInterval(() => {
			setLoading(true);
			fetch("https://api.sofi.gg/member/activity", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: "392779025803771904" }),
			})
				.then((res) => res.json())

				.then((data) => {
					data.data;
					setData(data.data);
					setLoading(false);
				})
				.catch(
					// @ts-ignore
					(e) => (setData(undefined), setLoading(false)),
				);
		}, 20000);
		// clear interval for idle visitors
		setTimeout(() => clearInterval(interval), 3 * 60 * 1000);
	}
	// <LoadingScreen />;
	if (isLoading) return <span>{"updating..."}</span>;

	if (!data) return <span>{"unavailable."}</span>;

	const { status, activities }: dataInterface = data;
	const getColor = () => {
		switch (status) {
			case "online":
				return {
					status: "online",
					color: "text-pastel-green",
				};
			case "idle":
				return {
					status: "idle",
					color: "text-pastel-orange",
				};
			case "dnd":
				return {
					status: "dnd",
					color: "text-pastel-red",
				};
			default:
				return {
					status: "offline",
					color: "text-pastel-pink",
				};
		}
	};

	const getStatus = () => {
		if (isLoading) return "loading...";

		if (!status || status == "offline") {
			return "offline";
		}

		const filtered = activities
			?.filter((activity) => activity.type !== 4)
			?.pop();

		if (!filtered) return "online";

		switch (filtered.name) {
			case "Spotify":
				return "Listening to " + filtered.details;
			case "Visual Studio Code":
				return filtered.details + " in Visual Studio Code";
			case "Neovim":
				return "using Neovim";
			default:
				if (filtered.name) return `Playing ${filtered.name}`;
		}
	};

	return (
		<span className={getColor().color}>
			{
				// @ts-ignore
				getStatus()[0].toLowerCase() + getStatus()?.substring(1)
			}
		</span>
	);
};

export default Status;
