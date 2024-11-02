import { useState, useEffect } from 'react'

function ClueBlanks({ answer, guesses, setResult }) {
	
	const [clueString, setClueString] = useState("");


	useEffect(() => {
		setClueString(updateClueBlanks(answer, guesses));
	}, [answer, guesses]);
	
	const updateClueBlanks = (answer, guesses) => {
		var res = "";
		var cnt = 0;
		for(let i = 0;i < answer.length;i++){
			for(let j = 0;j < answer[i].length;j++){
				var ord = answer[i][j].charCodeAt(0) - 65;
				//console.log(answer[i][j], ord, guesses[ord]);
				if(guesses[ord] === 1){
					res += answer[i][j];
				}else{
					res += "_";
					cnt += 1;
				}
				res += " ";
			}
			res += "   ";
		}

		if(cnt === 0){
			setResult(1);
		}
		//console.log(res);
		return res;
	}; 


	return (
		<div>
			<h2><pre>{clueString}</pre></h2>
		</div>
	)
}

export default ClueBlanks;
