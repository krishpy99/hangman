import { useState, useEffect } from 'react'

function StagePicture({ mistakes }) {
	const srcDir = "./src/assets/stages/";
	const [imgSource, setImgSource] = useState(srcDir + "1.png");

	useEffect(() => {
		setImgSource(srcDir + mistakes + ".png");
	}, [mistakes]);

	return (
		<div>
			<h2> Mistakes made: {mistakes}</h2>
			<img src={imgSource} />	
		</div>
	)
}

export default StagePicture;
