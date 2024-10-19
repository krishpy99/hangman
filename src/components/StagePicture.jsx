import { useState } from 'react'

function ClueBlanks() {

	return (
		<>
			<h1>Hangman</h1>
			<ClueBlanks guesses={guesses}/>
			<GuessLetters />
			<StagePicture stage={stage} />
		</>
	)
}

export default App
