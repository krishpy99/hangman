import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [answer, setAnswer] = useState();
	const [guess, setGuess] = useState();
	const [stage, setStage] = useState(0);

	return (
		<>
			<h1>Hangman</h1>
			<div>
			<StagePicture stage={stage} />
		</>
	)
}

export default App
