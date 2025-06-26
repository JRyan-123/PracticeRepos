let [seconds , minutes , hours] = [0 , 0 , 0];
let displayTime	= document.getElementById('display');
let timer = null;
function stopwatch(){
	seconds++;
	if (seconds == 60) {
		seconds = 0;
		minutes++
		if (minutes == 60) {
			minutes = 0;
			hours++
		}
	}
	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;

	displayTime.innerHTML = h + " : " + m + " : " + s;
}

function start() {
	if (timer!== null) {
		clearInterval(timer);
	}
	timer = setInterval(stopwatch, 1000);
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
	[seconds , minutes , hours] = [0 , 0 , 0];
	displayTime.innerHTML = "00 : 00 : 00";
	displayTime.style.color = "white";
}