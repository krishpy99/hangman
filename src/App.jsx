import { useState } from 'react'
import ClueBlanks from './components/ClueBlanks'
import './App.css'

function App() {
	const [answer, setAnswer] = useState(["ANSWER"]);
	const [guesses, setGuesses] = useState([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0]);
	const [stage, setStage] = useState(0);

	return (
		<>
			<h1>Hangman</h1>
			<ClueBlanks guesses={guesses} answer={answer} />
		</>
	)
}

export default App
