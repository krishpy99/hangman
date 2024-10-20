import { useState, useEffect } from 'react';
import './GuessLetters.css'; // Import the CSS file

function GuessLetters({guesses, setGuesses, answer}) {

	const [buttons, setButtons] = useState([]);
	const [firstLoad, setFirstLoad] = useState(true);
	const [present, setPresent] = useState([]);
	
	const setIsItThere = () => {
		const isItThere = Array.from({length: 26}, (_, i) => 0);
		for(let i = 0;i < answer.length;i++){
			for(let j = 0;j < answer[i].length;j++){
				var ord = answer[i][j].charCodeAt(0) - 65;
				isItThere[ord] = 1; 
			}
		}
		setPresent(isItThere);
	};
	
	const handleClick = (key) => {
		var new_guesses = [...guesses];
		new_guesses[key] = 1;
		setGuesses(new_guesses);
	};

	const reRenderButtons = () => {
		const buttonsTemp = [];
		for (let i = 0; i < 26; i++) {
			let classnames = "letter-button";
			if(guesses[i] == 1){
				classnames += (present[i] ? " bg-green" : " bg-red");
			}
			buttonsTemp.push(
				<button key={i} onClick={() => handleClick(i)} className={classnames}>
					{String.fromCharCode(i + 65)}
				</button>
			);
		}
		setButtons(buttonsTemp);
	};

	useEffect(() => {
		if(firstLoad){
			setIsItThere();
			setFirstLoad(false);
		}
		reRenderButtons();
	}, [guesses]);

	return (
		<div className="button-container">
			{buttons.slice(0, 13)}
			<br/>
			{buttons.slice(13)}
		</div>
	);
}

export default GuessLetters;
