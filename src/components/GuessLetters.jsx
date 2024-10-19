import React from 'react';
import './GuessLetters.css'; // Import the CSS file

function GuessLetters({guesses, setGuesses}) {

  const handleClick = (key) => {
		var new_guesses = [...guesses];
		new_guesses[key] = 1;
		setGuesses(new_guesses);
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 26; i++) {
      buttons.push(
        <button key={i} onClick={() => handleClick(i)} className="letter-button">
          {String.fromCharCode(i + 65)}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="button-container">
      {renderButtons()}
    </div>
  );
}

export default GuessLetters;
