/*const api = "https://api.quotable.io/random";

async function getQoute(url) {
	const response =  await fetch(url);
	let data = await response.json();
	console.log(data);
}
getQoute(api);*/ 
// api not available

const quotes = [
	{ 
  	text: "You have to be able to accept failure to get better.",
  	author: "LeBron James" },
  	{ 
  	text: "Hard work beats talent when talent fails to work hard.", 
  	author: "Kevin Durant" },
  	{ 
  	text: "Some people want it to happen, some wish it would happen, others make it happen.", 
  	author: "Michael Jordan" },
  	{ 
  	text: "Success is not an accident, success is actually a choice.", 
  	author: "Stephen Curry" },
  	{ 
  	text: "Don't let nobody tell you what you can’t be or what you can’t do.", 
  	author: "Giannis Antetokounmpo" },
  	{ 
  	text: "If you want to look good in front of thousands, you have to outwork thousands in front of nobody.", 
  	author: "Damian Lillard" },
];




const qoute =  document.getElementById('qoute');
const auth = document.getElementById('author');
const btn = document.getElementById('btn');
const twt = document.getElementById('twt');

btn.addEventListener("click", function() {
	const random = quotes[Math.floor(Math.random() * quotes.length)];
	console.log(`${random.text} — ${random.author}`);
	qoute.innerHTML = random.text;
	auth.innerHTML = random.author;
});

twt.addEventListener("click", function() {
	window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML + " ---" + auth.innerHTML, 
		"Tweet window", "width=600 , height=600");
});