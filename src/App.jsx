import { useState } from 'react'
import ClueBlanks from './components/ClueBlanks'
import GuessLetters from './components/GuessLetters'
import './App.css'

function App() {
	const [answer, setAnswer] = useState(["ANSWER", "THIS", "QUESTION"]);
	const [guesses, setGuesses] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [stage, setStage] = useState(0);

	return (
		<>
			<ClueBlanks guesses={guesses} answer={answer} />
			<GuessLetters guesses={guesses} setGuesses={setGuesses}/>
		</>
	)
}

export default App
