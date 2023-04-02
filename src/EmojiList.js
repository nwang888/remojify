import React from "react";

const EmojiList = ({ codes }) => {
	const emojis = codes.map((code) =>
		String.fromCodePoint(parseInt(code.replace("\\x{", ""), 16))
	);

	return (
		<div>
			{emojis.map((emoji) => (
				<span>{emoji}</span>
			))}
		</div>
	);
};

export default EmojiList;
