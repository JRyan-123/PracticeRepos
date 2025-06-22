const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

passwordInput.addEventListener('input', function() {
	const password = passwordInput.value;
	const strength = checkPasswordStrength(password);
	if (passwordInput.value.length > 0) {
		message.style.display = "block";
	}
	else{
		message.style.display = "none";
	}
	if (strength === "weak") {
		message.innerHTML = "password is weak";
		message.style.color = "red";
		passwordInput.style.borderColor = "red";
	}
	else if (strength === "medium") {
		message.innerHTML = "password is medium";
		message.style.color = "orange";
		passwordInput.style.borderColor = "orange";
	}
	else if (strength === "strong") {
		message.innerHTML = "password is strong";
		message.style.color = "green";
		passwordInput.style.borderColor = "green";
	}
	else{
		passwordInput.style.borderColor = "white";
	}
});

function checkPasswordStrength(password) {
	let strength = 0;
	if (password.length >= 6) {
		strength++;
	}
	if (password.length >= 10) {
		strength++;
	}
	if (/[a-z]/.test(password)) {
		strength++
	}
	if (/[A-Z]/.test(password)) {
		strength++
	}
	if (/[0-9]/.test(password)) {
		strength++
	}
	if (/[^A-Za-z0-9]/.test(password)) {
		strength++
	}


	if (password.length === 0) {
		return "";
	}
	if (strength <=2) {
		return "weak";
	}
	if (strength === 3 ) {
		return "medium";
	}
	if (strength >=4) {
		return "strong";
	}
}