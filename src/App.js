import React, { useState } from "react";
import "./App.css";
import emojisList from "data/top_emojis.json";

function App() {
	const [currentEmoji, setCurrentEmoji] = useState([]);
	const [description, setDescription] = useState("");

	useEffect(() => {
		setEmojis(emojisList);
	}, []);

	const handleNewEmoji = () => {
		const randomIndex = Math.floor(Math.random() * emojis.length);
		setCurrentEmoji(emojis[randomIndex]);
		setDescription("");
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
					<button onClick={handleNewEmoji}>New Emoji</button>
				</div>
				<input
					type="text"
					value={description}
					onChange={handleInputChange}
					placeholder="Describe the emoji"
				/>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default App;
