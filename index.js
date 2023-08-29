const START_TIME = 1692637200 * 1000;
const DAY_TIME = 86400000;
const loop = setInterval(() => {
	const now = Date.now();
	const days = Math.floor((now - START_TIME) / DAY_TIME);
	const counter = document.getElementById("counter");
	counter.innerText = days;
}, 1000);
