let hrs = document.getElementById('hours');
let min = document.getElementById('minutes');
let sec = document.getElementById('seconds');

setInterval( () =>{
	let now = new Date();
	console.log(now);
	hrs.innerHTML = String(now.getHours()).padStart(2, '0');
	min.innerHTML = String(now.getMinutes()).padStart(2, '0');
	sec.innerHTML = String(now.getSeconds()).padStart(2,'0')
},1000)