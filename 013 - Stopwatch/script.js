let [milliseconds, seconds , minutes] = [0 , 0 , 0];
let displayTime	= document.getElementById('display');
let timer = null;
function stopwatch(){
	milliseconds+=10;
	if (milliseconds == 1000) {
		milliseconds = 0;
		seconds++
		if (seconds == 60) {
			seconds = 0;
			minutes++
		}
	}

	let m = String(minutes).padStart(2, '0');;
	let s = String(seconds).padStart(2, '0');
	let ms = String(Math.floor(milliseconds / 10)).padStart(2, '0');
	displayTime.innerHTML = m + " : " + s + " : " + ms;
}

function start() {
	if (timer!== null) {
		clearInterval(timer);
	}
	timer = setInterval(stopwatch, 10);
	displayTime.style.color = "#0ff3ff";
}
function stop() {
	clearInterval(timer);
	displayTime.style.color = "#ff1212";
	if (timer === null) {
		displayTime.style.color = "white";
	}
}
function reset() {
	clearInterval(timer);
	[milliseconds, seconds , minutes] = [0 , 0 , 0];
	displayTime.innerHTML = "00 : 00 : 00";
	displayTime.style.color = "white";
}