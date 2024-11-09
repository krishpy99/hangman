import { useState } from 'react'
import ClueBlanks from './components/ClueBlanks'
import GuessLetters from './components/GuessLetters'
import StagePicture from './components/StagePicture'
import GameResult from './components/GameResult'
import generic from './assets/generic'
import movies from './assets/movies'
import './App.css'

function App() {
	const [answer, setAnswer] = useState(["THIS"]);
	const [guesses, setGuesses] = useState(Array.from({length: 26}, (_, i) => 0));
	const [stage, setStage] = useState(0);
	const [mistakes, setMistakes] = useState(0);
	const [result, setResult] = useState(0);

	const chooseNewWord = (arr) => {
		var ind = Math.floor(Math.random() * arr.length);
		var new_word = arr[ind].toUpperCase();
		setAnswer(new_word.split());
		setResult(0);
		setGuesses(Array.from({length: 26}, (_, i) => 0));
		setMistakes(0);
	};

	return (
		<div className={`game-container ${result !== 0 ? 'centered' : 'side-by-side'}`}>
			<div className="left-section">
				<ClueBlanks guesses={guesses} answer={answer} setResult={setResult} />
				{result === 0 && (
					<GuessLetters guesses={guesses} setGuesses={setGuesses} answer={answer} mistakes={mistakes} setMistakes={setMistakes} setResult={setResult} />
				)}
			</div>
			{result === 0 && (
				<div className="right-section">
					<StagePicture mistakes={mistakes} />
				</div>
			)}
			<GameResult result={result}/>
			{(result !== 0) && (
				<div className="button-group">
					<button onClick={() => chooseNewWord(generic)}>Get New Word</button>
					<button onClick={() => chooseNewWord(movies)}>Get A New Movie</button>
				</div>
			)}
		</div>
	)
}

export default App;

