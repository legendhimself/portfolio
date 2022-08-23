import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
	public override render() {
		return (
			<Html>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
