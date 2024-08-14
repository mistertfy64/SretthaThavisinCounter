const START_TIME = 1692637200 * 1000;
const DAY_TIME = 86400000;
const FACE_INTERVALS = [336, 28, 7, 1];
const loop = setInterval(() => {
	shuffleText();
}, 100);

const CORRUPTED_CHARACTER_POOL =
	"qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM";

function createFaces(days) {
	// const facesHTML = document.getElementById("faces");
	// let faceIntervalIndex = 0;
	// while (days > 0 && faceIntervalIndex < 4) {
	// 	threshold = FACE_INTERVALS[faceIntervalIndex];
	// 	if (days >= threshold) {
	// 		days -= threshold;
	// 		let face = document.createElement("img");
	// 		face.src = `./public/tpmc-srettha-${threshold}.png`;
	// 		face.width = 192;
	// 		face.height = 216;
	// 		facesHTML.appendChild(face);
	// 	} else {
	// 		faceIntervalIndex++;
	// 	}
	// }
}

function shuffleText() {
	const elements = document.getElementsByClassName("corrupted--halted");
	for (const element of elements) {
		const textLength = element.textContent.length;
		let newText = " ";
		for (let i = 0; i < textLength; i++) {
			if (element.textContent[i] === " ") {
				newText += " ";
			} else {
				const newCharacter =
					CORRUPTED_CHARACTER_POOL[
						Math.floor(
							Math.random() * CORRUPTED_CHARACTER_POOL.length
						)
					];
				newText += newCharacter;
			}
		}
		element.innerText = newText;
	}
}

createFaces(Math.floor((Date.now() - START_TIME) / DAY_TIME));
const now = Date.now();
const days = Math.floor((now - START_TIME) / DAY_TIME);
const counter = document.getElementById("counter");
// counter.innerText = days;
