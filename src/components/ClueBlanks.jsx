import { useState, useEffect } from 'react'

function ClueBlanks({ answer, guesses, setResult }) {
	
	const [clueString, setClueString] = useState("");

	useEffect(() => {
		setClueString(updateClueBlanks(answer, guesses));
	}, [answer, guesses]);


	function isAlphaNumeric(str) {
		var code, i, len;

		for (i = 0, len = str.length; i < len; i++) {
			code = str.charCodeAt(i);
			if (!(code > 47 && code < 58) && // numeric (0-9)
				!(code > 64 && code < 91) && // upper alpha (A-Z)
				!(code > 96 && code < 123)) { // lower alpha (a-z)
				return false;
			}
		}
		return true;
	};


	const updateClueBlanks = (answer, guesses) => {
		var res = "", cnt = 0;
		for(let i = 0;i < answer.length;i++){
			for(let j = 0;j < answer[i].length;j++){
				if(isAlphaNumeric(answer[i][j])){
					var ord = answer[i][j].charCodeAt(0) - 65;
					if(guesses[ord] === 1) res += answer[i][j];
					else{
						res += "_"; cnt += 1;
					}
				}else res += answer[i][j];
				res += " ";
			}
			res += "   ";
		}
		if(cnt === 0)setResult(1);
		return res;
	}; 


	return (
		<div>
			<h2><pre>{clueString}</pre></h2>
		</div>
	)
}

export default ClueBlanks;
