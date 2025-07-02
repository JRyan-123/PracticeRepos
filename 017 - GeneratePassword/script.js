const passwordBox = document.getElementById('password');
const limit = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+<>?:;/.,~";

const allChars = uppercase + lowercase + number + symbol;
function createPassword() {
	let password = "";

	while(limit > password.length){
		password += allChars[Math.floor(Math.random() * allChars.length)]
	}
	passwordBox.value = password;
}
function copyPassword() {
	passwordBox.select();
	document.execCommand("copy");
}