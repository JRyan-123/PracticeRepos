	let eyeIcon = document.getElementById('icon');
let password = document.getElementById('password');

eyeIcon.addEventListener('click', function() {
	if (password.type === "password") {
		password.type = "text";
		eyeIcon.src = "assets/open-eye.png"
	}
	else{
		password.type = "password";
		eyeIcon.src = "assets/close-eye.png"
	}
});