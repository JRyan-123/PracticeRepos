


let x = setInterval(function() {
	let countdownTime = new Date("2026-06-18T16:36:59");
const now = new Date().getTime();
let timeDifference =  countdownTime - now;

	if (timeDifference < 0) {
	  clearInterval(x); 
    alert("Countdown finished!");
    return;
}

	var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	var hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
	var minutes = Math.floor(timeDifference / (1000 * 60  ) % 60 );
	var seconds = Math.floor(timeDifference / (1000)  % 60);


	document.getElementById('days').innerHTML = days;
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
},1000)