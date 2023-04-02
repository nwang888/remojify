import React, { useState, useEffect } from "react";
import "./App.css";
import emojisList from "./top_emojis.json";
import EmojiList from "./EmojiList";

function App() {
	const [emojis, setEmojis] = useState([]);
	const [currentEmoji, setCurrentEmoji] = useState([]);
	const [description, setDescription] = useState("");

	useEffect(() => {
		setEmojis(emojisList);
	}, []);

	// // set initial emoji to display immediately
	// useEffect(() => {
	// 	if (emojis.length > 0) {
	// 		const randomIndex = Math.floor(Math.random() * emojis.length);
	// 		setCurrentEmoji(emojis[randomIndex]);
	// 		// also remove the emoji from the list
	// 		const newEmojis = emojis.filter((emoji) => emoji !== emojis[randomIndex]);
	// 		setEmojis(newEmojis);
	// 	}
	// }, [emojis]);

	const handleSubmit = () => {
		if (!description) {
			return;
		}
		const randomIndex = Math.floor(Math.random() * emojis.length);
		setCurrentEmoji(emojis[randomIndex]);
		setDescription("");
		// also remove the emoji from the list
		const newEmojis = emojis.filter((emoji) => emoji !== emojis[randomIndex]);
		setEmojis(newEmojis);
		// also calculate score
		// also update the score
	};

	const handleInputChange = (event) => {
		setDescription(event.target.value);
	};

	return (
		<div>
			<nav>
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">
						Remojify
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="emoji-container">
					<span className="emoji" role="img" aria-label="current emoji">
						{currentEmoji}
					</span>
				</div>
				{/* <EmojiList codes={emojis} /> */}
				<input
					type="text"
					value={description}
					onChange={handleInputChange}
					placeholder="Describe the emoji"
				/>
				<button onClick={handleSubmit}>Submit</button>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default App;
