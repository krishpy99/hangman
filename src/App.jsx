import { useState } from 'react'
import ClueBlanks from './components/ClueBlanks'
import GuessLetters from './components/GuessLetters'
import StagePicture from './components/StagePicture'
import GameResult from './components/GameResult'
import './App.css'

function App() {
	const [answer, setAnswer] = useState(["ANSWER", "THIS", "QUESTION"]);
	const [guesses, setGuesses] = useState(Array.from({length: 26}, (_, i) => 0));
	const [stage, setStage] = useState(0);
	const [mistakes, setMistakes] = useState(0);
	const [result, setResult] = useState(0);

	const setNewAnswer = () => {
		
	};

	return (
		<>
			<ClueBlanks guesses={guesses} answer={answer} setResult={setResult} />
			<GuessLetters guesses={guesses} setGuesses={setGuesses} answer={answer} mistakes={mistakes} setMistakes={setMistakes} result={result} setResult={setResult}/>
			<StagePicture mistakes={mistakes} result={result}/>
			<GameResult result={result}/>
		</>
	)
}

export default App
