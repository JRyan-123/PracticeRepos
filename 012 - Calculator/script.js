const display = document.getElementById('display');
// data-* :')

//select all btns
document.querySelectorAll('button').forEach(button=>{
	button.addEventListener("click", () => {
		const value = button.dataset.value;
		const action = button.dataset.action;
		//identifies value or action

		//coresponding actions
		if (action === 'clear') {
			display.innerText = "0";
		}
		else if (action === "delete") {
			let current = display.innerText;
			display.innerText =  current.length > 1 ? current.slice(0,-1): '0';
		}
		else if(action === "calculate"){
			try{
				display.innerText = eval(display.innerText);
			}
			catch{
				display.innerText = 'Error';
			}
		}

		//corresponding value
		else if(value){
			if (display.innerText === "0") {
				display.innerText = '';
			}
			display.innerText += value;
		}
	})
})