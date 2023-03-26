import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const emoji_vals = collection(db, "emoji-values");

await setDoc(doc(citiesRef, "SF")), {};

function App() {
	document.title = "remojify";
	const [score, setScore] = useState(0);
	const [meaning, setMeaning] = useState("");

	const searchMeaning = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	return (
		<div className="container">
			<div className="navbar">
				<header className="navbar__title">remojify</header>
			</div>
			<div className="game">
				<div className="game_score"></div>
				<div className="prompt"></div>
				<div className="game_input">
					<input
						placeholder="word that describes the emoji"
						value={searchTerm}
						onChange={(e) => setMeaning(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
